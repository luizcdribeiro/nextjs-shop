import { useKeenSlider } from 'keen-slider/react';
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { GetStaticProps } from "next";

import { HomerContainer } from "@/styles/pages/home";
import 'keen-slider/keen-slider.min.css';
import { ProductsProps } from "@/interfaces/products";
import ProductItem from "@/components/Products";

export default function Home({ products }: ProductsProps) {

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
          <ProductItem
          id={product.id}
          imageUrl={product.imageUrl}
          name={product.name}
          key={product.id} 
          price={product.price}
          carouselClass="keen-slider__slide"
          />
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
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount as number / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 horas
  }
}