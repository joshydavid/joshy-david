import AnimatedSection from "@/components/Animation";
import { techProducts } from "@/data";
import Image from "next/image";

export default function Tech() {
  return (
    <AnimatedSection delay={0.1} className="flex flex-col gap-3">
      <h1>Tech</h1>
      <h4 className="mb-4">Some of my favourite tech products.</h4>
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
          <p className="text-sm">{product}</p>
        </div>
      ))}
    </AnimatedSection>
  );
}
