export interface Shop {
  id: string;
  merchantId: string;
  slug : string;
  name: string;
  logo?: string;
  banner?: string;
  description?: string;
  rating: number;
  isOpen: boolean;
  deliveryTime: string;
}