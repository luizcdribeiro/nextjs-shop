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
  price: string;
  carouselClass?: string;
  description?: string;
}

export interface ProductPropsItems {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    carouselClass?: string;
    description?: string;

  }
}