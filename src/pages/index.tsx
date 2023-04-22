import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react';
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";

import { HomerContainer, Product } from "@/styles/pages/home";

import 'keen-slider/keen-slider.min.css';

import camiseta1 from '../assets/camisetas/01.png'
import camiseta2 from '../assets/camisetas/02.png'
import camiseta3 from '../assets/camisetas/03.png'
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}


export default function Home({ products }: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomerContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product className="keen-slider__slide" key={product.id}>
            <Image src={product.imageUrl} alt={product.name} width={520} height={480} />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}      
    </HomerContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {

    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount as number / 100,
    }
  })

  return {
    props: {
      products,
    }
  }
}