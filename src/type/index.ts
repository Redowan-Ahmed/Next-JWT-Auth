export interface Results {
  readonly id: string;
  name: string;
  description: string;
  sale: boolean;
  image: string;
  price: number;
  regular_price: number;
  fixed_discount_price: number | null;
  or_sale_percentage: number | null;
  slug: string;
  inventory: number;
  top_deal: boolean;
  flash_sales: boolean;
  created_at: string;
  updated_at: string;
  average_review: string;
  category: {
    readonly id?: string;
    title?: string;
    slug?: string;
    icon?: string;
    parent_category?: string | null;
    created_at?: string;
    updated_at?: string;
  };
}

export interface Product {
  count: number ;
  next: string | null;
  previous: string | null;
  results: Results[];
}
