import AnimatedSection from "@/components/Animation";
import { techProducts } from "@/data";
import Image from "next/image";

export default function Tech() {
  return (
    <div className="flex flex-col gap-3">
      <h1>Tech</h1>
      <h4 className="mb-4">Some of my favourite tech products.</h4>
      {techProducts.map(({ id, product, icon }, delay) => {
        delay *= 0.1;
        return (
          <AnimatedSection
            className="avatar flex items-center gap-8"
            key={id}
            delay={delay}
          >
            <div className="w-24 rounded-xl">
              <Image
                src={icon}
                alt={`Product ${id}`}
                className="dark:bg-white bg-lightGray hover:opacity-80"
                priority
              />
            </div>
            <p className="text-sm">{product}</p>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
