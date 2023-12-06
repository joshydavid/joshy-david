import iPhone15 from "@/public/apple-products/iPhone-15.png";
import AppleWatch from "@/public/apple-products/Apple-Watch.png";
import ApplePencil from "@/public/apple-products/Apple-Pencil.png";
import iPadAir from "@/public/apple-products/iPad-Air.png";
import MacBookPro from "@/public/apple-products/MacBook-Pro.png";
import AirPodsPro from "@/public/apple-products/AirPods-Pro.png";

type techProducts = {
  id: number;
  product: string;
  icon: any;
};

export const techProducts: techProducts[] = [
  {
    id: 0,
    product: "iPhone 15 (2023)",
    icon: iPhone15,
  },
  {
    id: 1,
    product: "Apple Watch SE (2022)",
    icon: AppleWatch,
  },
  {
    id: 2,
    product: "Apple Pencil (2018)",
    icon: ApplePencil,
  },
  {
    id: 3,
    product: "iPad Air 5 (2022)",
    icon: iPadAir,
  },
  {
    id: 4,
    product: "MacBook Pro (2021)",
    icon: MacBookPro,
  },
  {
    id: 5,
    product: "AirProds Pro (2019)",
    icon: AirPodsPro,
  },
];
