"use client";
import { NAME } from "@/constant";
import { internships } from "@/data/internship";
import { urls } from "@/data/urls";
import Layout from "@/page";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/Animation";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-10">
        <AnimatedSection delay={0.1} className="flex flex-col gap-5">
          <div>
            <Image
              src="/joshua.png"
              width={100}
              height={100}
              className="rounded-full"
              alt="Display Picture"
              priority
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <h1>{NAME}</h1>
            <h4>iOS Developer </h4>
            <h4>
              Information Systems Sophomore @ Singapore Management University
            </h4>
            <h4>Aspiring Software Engineer</h4>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h4 className="leading-relaxed">
            Hi, I'm Joshua! I'm passionate about web/app development and all
            things tech. Outside of coding, you can find me hitting the gym or
            going for a quick run.
          </h4>

          <div className="flex flex-row gap-5 mt-6">
            {urls.map(({ label, path }) => (
              <span
                className="flex items-center gap-3 cursor-pointer"
                key={label}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                <Link key={label} href={path} className="dark:text-lightGray">
                  {label}
                </Link>
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <h1>Experience</h1>
          <div className="flex flex-col gap-12 mt-6">
            {internships.map(({ company, position, timeline, icon }) => (
              <div className="flex flex-row gap-7" key={company}>
                <div>
                  <Image
                    src={icon}
                    width={50}
                    height={50}
                    className="rounded-full"
                    alt={company}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h4>{position}</h4>
                  <h4>{company}</h4>
                  <h4>{timeline}</h4>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default About;
