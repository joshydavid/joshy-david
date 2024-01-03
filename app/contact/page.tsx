"use client";

import AnimatedSection from "@/components/Animation";
import { ChangeEvent, useState } from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { TextInput, TextArea } from "@/components/Input";
import { addFormToDB, randomId, validateDetails } from "@/helpers";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const { name, email, message } = form;
    setLoading(true);

    if (!validateDetails(name, email, message)) {
      setLoading(false);
      toast("Please fill in the fields.");
    } else {
      await addFormToDB(randomId(), name, email, message).then(() => {
        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
          toast("Get back to you soon!");
        }, 1000);
      });
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    event.key === "Enter" ? sendMessage(event) : null;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        <TextInput
          type="text"
          name="name"
          value={form.name}
          placeholder="Name"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <TextInput
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <TextArea
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <Button variant="secondary" size="lg" onClick={sendMessage}>
          {loading ? (
            <DotsHorizontalIcon className="w-9 h-9 animate-pulse" />
          ) : (
            "Send"
          )}
        </Button>

        <Toaster />
      </form>
    </AnimatedSection>
  );
}
