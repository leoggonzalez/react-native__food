export type Price = "€" | "€€" | "€€€" | "€€€€";

export interface Restaurant {
  id: string;
  image_url: string;
  name: string;
  location: {
    city: string;
    country: string;
    address2: string;
    address3: string;
    state: string;
    address1: string;
    zip_code: string;
  };
  price: Price;
  rating: number;
  review_count: number;
  photos?: string[];
}
