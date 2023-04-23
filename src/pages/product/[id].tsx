import { ProductProps } from "@/interfaces/products";
import { stripe } from "@/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { GetStaticProps } from "next";
import Image from "next/image";
import Stripe from "stripe";

export default function Product({id, imageUrl, name, price, description}: ProductProps) {


  return(
    <ProductContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} width={520} height={480} />
      </ImageContainer>

      <ProductDetails>
        <h1>{name}</h1>
        <span>{price}</span>

        <p>{description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount as number / 100),
        description: product.description,
        
      }
    },
    revalidate: 60 * 60 * 1, // 1 hora
  }
}