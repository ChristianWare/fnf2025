"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import styles from "./Login.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/ecomm.jpeg";
import SectionHeading2 from "@/components/SectionHeading2/SectionHeading2";
// import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Contact2 from "@/components/Contact2/Contact2";
import FalseButton from "@/components/FalseButton/FalseButton";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isRegistered = searchParams.get("registered") === "true";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(
    isRegistered ? "Account created successfully! Please log in." : null
  );

  useEffect(() => {
    // Clear success message after 5 seconds
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing again
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setGeneralError(null);

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setGeneralError("Invalid email or password");
      } else {
        // Check user role from session and redirect accordingly
        // For now, we'll fetch the user data to determine role
        const userResponse = await fetch("/api/user");
        if (userResponse.ok) {
          const userData = await userResponse.json();

          if (userData.role === "ADMIN") {
            router.push("/admin/dashboard");
          } else {
            router.push("/dashboard");
          }
        } else {
          // Default fallback if we can't determine role
          router.push("/dashboard");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setGeneralError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className=':styles left'>
            <div className={styles.formCard}>
              <div className={styles.cardHeader}>
                <div className={styles.SectionHeadingContainer}>
                  <SectionHeading2 title='Welcome Back' />
                </div>
                <p className={styles.cardDescription}>
                  Sign in to your account
                </p>
              </div>
              <div className={styles.cardContent}>
                <form
                  onSubmit={handleSubmit}
                  autoComplete='off'
                  className={styles.form}
                >
                  {generalError && (
                    <div className={styles.errorAlert}>
                      <p>{generalError}</p>
                    </div>
                  )}

                  {successMessage && (
                    <div className={styles.successAlert}>
                      <p>{successMessage}</p>
                    </div>
                  )}

                  <div className={styles.formGroup}>
                    <label htmlFor='email' className={styles.label}>
                      Email
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='john@example.com'
                      className={
                        errors.email ? styles.inputError : styles.input
                      }
                    />
                    {errors.email && (
                      <p className={styles.errorText}>{errors.email}</p>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <div className={styles.labelWithLink}>
                      <label htmlFor='password' className={styles.label}>
                        Password
                      </label>
                      <Link
                        href='/forgot-password'
                        className={styles.forgotPasswordLink}
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      value={formData.password}
                      onChange={handleChange}
                      placeholder='••••••••'
                      autoComplete='off'
                      className={
                        errors.password ? styles.inputError : styles.input
                      }
                    />
                    {errors.password && (
                      <p className={styles.errorText}>{errors.password}</p>
                    )}
                  </div>

                  {/* <button
                    type='submit'
                    className={styles.button}
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign in"}
                  </button> */}
                  <FalseButton
                    text={loading ? "Signing in..." : "Sign in"}
                    disabled={loading}
                    btnType='blue'
                  />
                </form>
              </div>

              <div className={styles.cardFooter}>
                <p className={styles.footerText}>
                  Don&apos;t have an account?{" "}
                  <Link href='/auth/register' className={styles.link}>
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img1} fill alt='' title='' className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
      {/* <FinalCTA /> */}
      <Contact2 />
    </div>
  );
}
