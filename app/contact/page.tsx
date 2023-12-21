"use client";

import AnimatedSection from "@/components/Animation";
import { addFormToDB, validateDetails } from "@/helpers/form";
import { randomId } from "@/helpers/randomId";
import { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Button from "@/components/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendMessage = async (e: any) => {
    e.preventDefault();
    const { name, email, message } = form;
    setLoading(true);

    if (!validateDetails(name, email, message)) {
      setTimeout(() => {
        setLoading(false);
        setError(true);
      }, 1300);
    } else {
      setError(false);
      await addFormToDB(randomId(), name, email, message).then(() => {
        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
          setSuccess(true);
        }, 1500);

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      });
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      sendMessage(event);
    }
  };

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <AnimatedSection
      delay={0.1}
      className="flex flex-col gap-5 w-screen md:w-11/12"
    >
      <h1>Contact</h1>
      <h4>Let's Chat.</h4>

      <form className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Name"
          className="form-input px-4 py-3 rounded-lg border-0 dark:bg-slate-900 dark:text-white bg-slate-100"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></input>

        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          className="form-input px-4 py-3 rounded-lg border-0 dark:bg-slate-900 dark:text-white bg-slate-100"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <textarea
          name="message"
          className="form-input px-4 py-3 rounded-lg border-0 dark:bg-slate-900 dark:text-white bg-slate-100"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <Button intent="black" onClick={sendMessage}>
          {loading ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            "Send"
          )}
        </Button>

        {error ? (
          <div role="alert" className="flex justify-center alert alert-error">
            <XMarkIcon className="w-5 h-5" />
            <span>Please fill in the fields</span>
          </div>
        ) : null}

        {success ? (
          <div role="alert" className="flex justify-center alert alert-success">
            <CheckIcon className="w-5 h-5" />
            <span>Success! I'll get back to you.</span>
          </div>
        ) : null}
      </form>
    </AnimatedSection>
  );
}
