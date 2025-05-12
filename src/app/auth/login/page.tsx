/* eslint-disable @typescript-eslint/no-unused-vars */
/* src/app/auth/login/page.tsx */
"use client";

import styles from "./Login.module.css";
import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import LayoutWrapper from "@/components/LayoutWrapper";
import Image from "next/image";
import SectionHeading2 from "@/components/SectionHeading2/SectionHeading2";
import Contact2 from "@/components/Contact2/Contact2";
import FalseButton from "@/components/FalseButton/FalseButton";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Button from "@/components/Button/Button";
import Img1 from "../../../../public/images/ecomm.jpeg";

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginInner />
    </Suspense>
  );
}

function LoginInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isRegistered = searchParams.get("registered") === "true";

  const { data: session, status } = useSession();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(
    isRegistered ? "Account created successfully! Please log in." : null
  );

  // auto‑dismiss success message
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  // once we're sure the user is authenticated, fetch their role
  useEffect(() => {
    if (status === "authenticated" && !loading) {
      fetch("/api/user")
        .then((res) => (res.ok ? res.json() : Promise.reject()))
        .then((data) => {
          setUserRole(data.role);
        })
        .catch(() => {
          setUserRole(null);
        });
    }
  }, [loading, status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setGeneralError(null);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        setGeneralError("Invalid email or password");
      } else {
        const res = await fetch("/api/user");
        if (res.ok) {
          const { role } = await res.json();
          router.push(role === "ADMIN" ? "/admin/dashboard" : "/account");
        } else {
          router.push("/account");
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      setGeneralError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    await signOut({ redirect: false });
    setLoading(false);
  };

  // while session is loading, render nothing
  // if (status === "loading") return null;

  // if already signed in, show message + buttons
  if (status === "authenticated" && !loading) {

    return (
      <div className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.formCard}>
                <header className={styles.cardHeader}>
                  <SectionHeading2 title='You are now logged in.' />
                </header>
                <div className={styles.btnContainer}>
                  <Button
                    text='Go to Dashboard'
                    btnType='secondary'
                    href={
                      userRole === "ADMIN" ? "/admin/dashboard" : "/account"
                    }
                  />
                  <FalseButton
                    text={loading ? "Signing Out..." : "Sign Out"}
                    btnType='black'
                    onClick={handleSignOut}
                  />
                  <Button text='Home' btnType='primary' href='/' />
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image src={Img1} fill alt='' className={styles.img} />
              </div>
            </div>
          </div>
        </LayoutWrapper>
        <FinalCTA />
        <Contact2 />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.formCard}>
              <header className={styles.cardHeader}>
                <SectionHeading2 title='Welcome Back' />
                <p className={styles.cardDescription}>
                  Sign in to your account
                </p>
              </header>

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
                      required
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
                      required
                    />
                    {errors.password && (
                      <p className={styles.errorText}>{errors.password}</p>
                    )}
                  </div>

                  <FalseButton
                    text={loading ? "Loading..." : "Sign in"}
                    disabled={loading}
                    btnType='blue'
                  />
                </form>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img1} fill alt='' className={styles.img} />
            </div>
          </div>
        </div>

        <footer className={styles.cardFooter}>
          <p className={styles.footerText}>
            Don&apos;t have an account?{" "}
            <Link href='/auth/register' className={styles.link}>
              Sign up
            </Link>
          </p>
        </footer>
      </LayoutWrapper>
      <FinalCTA />
      <Contact2 />
    </div>
  );
}
