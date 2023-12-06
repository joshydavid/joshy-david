import AnimatedSection from "@/components/Animation";
import Image from "next/image";
import { techProducts } from "@/data/techProducts";

export default function Tech() {
  return (
    <AnimatedSection delay={0.1} className="flex flex-col gap-5">
      <h1>Tech</h1>
      <h3>Some of my favourite tech products.</h3>
      {techProducts.map(({ id, product, icon }, index) => (
        <div className="avatar flex items-center gap-8" key={index}>
          <div className="w-24 rounded-xl">
            <Image
              src={icon}
              alt={`Product ${id}`}
              className="dark:bg-white bg-lightGray hover:opacity-80"
              priority
            />
          </div>
          <p>{product}</p>
        </div>
      ))}
    </AnimatedSection>
  );
}
