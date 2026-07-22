import type { Shop } from "@/features/shop/types/shop";

export const shops: Shop[] = [
  {
    id: "shop-1",
    merchantId: "merchant-1",
    name: "Addis Bookstore",

    logo: "/shops/addis-bookstore/logo.png",

    banner: "/shops/addis-bookstore/banner.jpg",

    description: "Books, stationery and office supplies.",

    rating: 4.8,

    isOpen: true,
    slug : "addis-bookstore",
    deliveryTime: "20–30 min",
  },
];