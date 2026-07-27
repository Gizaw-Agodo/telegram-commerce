import { ShopSummary } from "@/features/shop/types/shop-summery";

export const mockShops: ShopSummary[] = [
  {
    id: "shop-1",
    merchantId: "merchant-1",
    slug: "gizaw-electronics",
    name: "Gizaw Electronics",
    logo: "/images/shops/electronics-logo.png",
    banner: "/images/shops/electronics-banner.jpg",
    description: "Phones, laptops, accessories, and gadgets.",
    rating: 4.8,
    isOpen: true,
    deliveryTime: "30-45 min",

    productCount: 48,
    pendingOrders: 12,
  },
  {
    id: "shop-2",
    merchantId: "merchant-1",
    slug: "gizaw-fashion",
    name: "Gizaw Fashion",
    logo: "/images/shops/fashion-logo.png",
    banner: "/images/shops/fashion-banner.jpg",
    description: "Clothing, shoes, and fashion accessories.",
    rating: 4.7,
    isOpen: true,
    deliveryTime: "20-30 min",

    productCount: 26,
    pendingOrders: 4,
  },
  {
    id: "shop-3",
    merchantId: "merchant-1",
    slug: "gizaw-books",
    name: "Gizaw Books",
    logo: "/images/shops/books-logo.png",
    banner: "/images/shops/books-banner.jpg",
    description: "Books, stationery, and educational materials.",
    rating: 4.9,
    isOpen: false,
    deliveryTime: "45-60 min",

    productCount: 15,
    pendingOrders: 0,
  },
];