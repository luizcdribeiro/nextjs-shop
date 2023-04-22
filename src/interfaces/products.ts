export interface ProductsProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  carouselClass?: string
}