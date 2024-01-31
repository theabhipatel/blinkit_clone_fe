interface IWhyShopFromBlinkit {
  title: string;
  desc: string;
  image: string;
}

export const whyShopFromBlinkit: IWhyShopFromBlinkit[] = [
  {
    title: "Superfast Delivery",
    desc: "Get your order delivered to your doorstep at the earliest from dark stores near you.",
    image: "/10-minute-delivery.avif",
  },
  {
    title: "Best Prices & Offers",
    desc: "Best price destination with offers directly from the manufacturers.",
    image: "/best-prices-offers.avif",
  },
  {
    title: "Wide Assortment",
    desc: "Choose from 5000+ products across food, personal care, household & other categories.",
    image: "/wide-assortment.avif",
  },
];

interface IUsefullLinks {
  title: string;
  link: string;
}

export const usefullLinks: IUsefullLinks[] = [
  {
    title: "About",
    link: "",
  },
  {
    title: "Privacy",
    link: "",
  },
  {
    title: "Partner",
    link: "",
  },
  {
    title: "Careers",
    link: "",
  },
  {
    title: "Terms",
    link: "",
  },
  {
    title: "Express",
    link: "",
  },
  {
    title: "Blog",
    link: "",
  },
  {
    title: "FAQs",
    link: "",
  },
  {
    title: "Seller",
    link: "",
  },
  {
    title: "Press",
    link: "",
  },
  {
    title: "Security",
    link: "",
  },
  {
    title: "Spotlight",
    link: "",
  },
  {
    title: "Lead",
    link: "",
  },
  {
    title: "Mobile",
    link: "",
  },
  {
    title: "Warehouse",
    link: "",
  },
  {
    title: "Value",
    link: "",
  },
  {
    title: "Contact",
    link: "",
  },
  {
    title: "Deliver",
    link: "",
  },
];

export interface IFilterList {
  id: string;
  title: string;
}

export const filterList: IFilterList[] = [
  {
    id: "1",
    title: "Relevance",
  },
  {
    id: "2",
    title: "Price (Low to high)",
  },
  {
    id: "3",
    title: "Price (High to low)",
  },
  {
    id: "4",
    title: "Discount (High to low)",
  },
  {
    id: "5",
    title: "Name (A to Z)",
  },
];
