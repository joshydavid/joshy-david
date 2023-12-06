"use client";

import AnimatedSection from "@/components/Animation";
import { addFormToDB, validateDetails } from "@/helpers/form";
import { randomId } from "@/helpers/randomId";
import Layout from "@/page";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const sendMessage = async (e: any) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!validateDetails(name, email, message)) {
      throw Error;
    } else {
      await addFormToDB(randomId(), name, email, message).then(() => {
        // Form Sent
      });
    }
  };

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Layout>
      <AnimatedSection
        delay={0.1}
        className="flex flex-col gap-5 w-screen px-8 md:px-0 md:w-11/12"
      >
        <h1>Contact</h1>
        <h3>Let's Chat.</h3>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered text-white"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered text-white"
            onChange={handleChange}
          />

          <textarea
            name="message"
            className="textarea textarea-bordered text-white"
            placeholder="Message"
            onChange={handleChange}
          ></textarea>

          <button className="btn btn-neutral text-white" onClick={sendMessage}>
            Send
          </button>
        </form>
      </AnimatedSection>
    </Layout>
  );
}
