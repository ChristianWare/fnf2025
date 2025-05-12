"use client";

import styles from "./ContactForm.module.css";
import toast from "react-hot-toast";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FalseButton from "../FalseButton/FalseButton";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectDescription: string;
  services: string[];
}

const serviceOptions = [
  "UI & UX Design",
  "Shopify",
  "WooCommerce",
  "Wix",
  "Custom Development",
  "Booking/Reservation System",
  "Membership Site",
  "Marketplace",
  "E-commerce",
  "Online Store",
  "Portfolio",
  "Blog/Content Site",
];

interface Props {
  border?: string;
}

export default function ContactForm({ border = "" }: Props) {
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    // Include selected services
    const formData = {
      ...data,
      services: selectedServices,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((res) => res.json());

    if (response.messageId) {
      toast.success("Thanks! I'll be in touch soon 😎");
    } else {
      toast.error("Opps! Please try again");
    }

    reset();
    setSelectedServices([]);
    setLoading(false);
  };

  return (
    <div className={styles.parent}>
      <div className={`${styles.content} ${styles[border]}`}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.namesContainer}>
            <div className={styles.labelInputBox}>
              <label htmlFor='firstName'>
                First Name <span className={styles.required}>*</span>
              </label>
              <input
                id='firstName'
                type='text'
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className={styles.error}>*** First Name is required</span>
              )}
            </div>
            <div className={styles.labelInputBox}>
              <label htmlFor='lastName'>
                Last Name <span className={styles.required}>*</span>
              </label>
              <input
                id='lastName'
                type='text'
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className={styles.error}>*** Last Name is required</span>
              )}
            </div>
          </div>
          <div className={styles.everythingElse}>
            <div className={styles.labelInputBox}>
              <label htmlFor='email'>
                Email <span className={styles.required}>*</span>
              </label>
              <input
                id='senderEmail'
                type='email'
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                placeholder='So I can respond. I won&#39;t send you spam.'
                maxLength={500}
              />
              {errors.email && (
                <span className={styles.error}>*** Email is required</span>
              )}
            </div>

            <div className={styles.labelInputBox}>
              <label htmlFor='company'>Company</label>
              <input
                id='company'
                type='text'
                {...register("company")}
                placeholder='Your company name (if applicable)'
                maxLength={500}
              />
            </div>

            <div className={styles.labelInputBox}>
              <label htmlFor='projectDescription'>
                Project Description <span className={styles.required}>*</span>
              </label>
              <textarea
                id='projectDescription'
                maxLength={5000}
                {...register("projectDescription", { required: true })}
                placeholder='Tell me about your project needs.'
              />
              {errors.projectDescription && (
                <span className={styles.error}>
                  *** Project Description is required
                </span>
              )}
            </div>
            <div className={styles.servicesSection}>
              <label className={styles.servicesLabel}>
                What services are you interested in?
              </label>
              <div className={styles.serviceButtons}>
                {serviceOptions.map((service) => (
                  <button
                    key={service}
                    type='button'
                    className={`${styles.serviceButton} ${
                      selectedServices.includes(service) ? styles.selected : ""
                    }`}
                    onClick={() => toggleService(service)}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.btnBtnContainer}>
            <FalseButton
              text={loading ? "Sending..." : "Submit"}
              btnType='blue'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
