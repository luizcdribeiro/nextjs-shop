import {  ProductPropsItems } from "@/interfaces/products";
import { stripe } from "@/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";

export default function Product({product}: ProductPropsItems) {

  const { isFallback } = useRouter()

  if(isFallback) {
    return <h1>Loading...</h1>
  }

  return(
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt={product.name} width={520} height={480} />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  await new Promise(resolve => setTimeout(resolve, 2000))

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