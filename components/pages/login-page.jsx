"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar";
import Input from "../Input";
import Button from "../Button";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) {
      setError("Email and password are required.");
      return;
    }

    // Static only - no backend
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // simulate redirect to dashboard
      router.push("/dashboard");
    }, 700);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-start justify-center bg-gray-50 py-12 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded shadow-md"
        >
          <h2 className="text-2xl text-black font-bold mb-6 text-center">Sign In</h2>

          {error && (
            <div className="mb-4 text-red-600 text-center text-sm" role="alert">
              {error}
            </div>
          )}

          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            disabled={isLoading}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            disabled={isLoading}
          />

          <div className="flex items-center justify-start">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <button
              type="button"
              onClick={() => router.push('/signup')}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
