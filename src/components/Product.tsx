import { ProductProps } from "@/interfaces/products";
import { Product } from "@/styles/components/product";
import Image from "next/image";
import Link from "next/link";


export default function ProductItem({ id, imageUrl, name, price, carouselClass }: ProductProps) {

  return (
    <Link key={id} href={`/product/${id}`} prefetch={false}>
      <Product className={`${carouselClass}`}>
        <Image src={imageUrl} alt={name} width={520} height={480} />
        <footer>
          <strong>{name}</strong>
          <span>{price}</span>
        </footer>
      </Product>
    </Link>
  )
} 