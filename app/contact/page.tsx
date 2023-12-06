"use client";

import AnimatedSection from "@/components/Animation";
import Layout from "@/page";

export default function Contact() {
  const sendMessage = (e: any) => {
    e.preventDefault();
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
            placeholder="Name"
            className="input input-bordered"
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
          />

          <textarea
            className="textarea textarea-bordered"
            placeholder="Message"
          ></textarea>

          <button className="btn btn-neutral text-white" onClick={sendMessage}>
            Send
          </button>
        </form>
      </AnimatedSection>
    </Layout>
  );
}
