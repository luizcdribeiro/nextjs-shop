import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter();
  return(
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>

      <ProductDetails>
        <h1>Camisa Fluminense</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quod dolorem praesentium, dolore non ad illum, laudantium impedit aspernatur molestias laboriosam nisi! Voluptate optio quae in non aliquid voluptatum fugiat?</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}