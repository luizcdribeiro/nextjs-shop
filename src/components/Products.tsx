import { ProductProps } from "@/interfaces/products";
import { Product } from "@/styles/components/product";
import Image from "next/image";


export default function ProductItem({ id, imageUrl, name, price, carouselClass }: ProductProps) {

  return (
    <Product className={`${carouselClass}`} key={id}>
      <Image src={imageUrl} alt={name} width={520} height={480} />
      <footer>
        <strong>{name}</strong>
        <span>{price}</span>
      </footer>
    </Product>
  )
} 