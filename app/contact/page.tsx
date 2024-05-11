"use client";

import { sendMessage } from "@/actions/formAction";
import { TextArea, TextInput } from "@/components/Input";
import { Toaster } from "@/components/ui/sonner";
import { useRef } from "react";
import { toast } from "sonner";
import SubmitForm from "./submitForm";

export default function Contact() {
  const ref = useRef<HTMLFormElement>(null);

  const sendForm = async (formData: FormData): Promise<void> => {
    const response = await sendMessage(formData);
    if (response) {
      toast("Get back to you soon!");
      ref.current?.reset();
    } else {
      toast("Please fill in the blanks");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<any>): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <div className="flex flex-col gap-5 w-screen md:w-11/12">
      <h1>Contact</h1>
      <h4>Let's Chat.</h4>

      <form ref={ref} className="flex flex-col gap-5" action={sendForm}>
        <TextInput
          type="text"
          name="name"
          placeholder="Name"
          onKeyDown={handleKeyDown}
        />

        <TextInput
          type="email"
          name="email"
          placeholder="Email"
          onKeyDown={handleKeyDown}
        />

        <TextArea placeholder="Message" onKeyDown={handleKeyDown} />
        <SubmitForm />
        <Toaster />
      </form>
    </div>
  );
}
