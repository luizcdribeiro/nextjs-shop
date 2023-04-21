import { HomerContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import camiseta1 from '../assets/camisetas/01.png'
import camiseta2 from '../assets/camisetas/02.png'
import camiseta3 from '../assets/camisetas/03.png'


export default function Home() {
  return (
    <HomerContainer>
      <Product>
        <Image src={camiseta1} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>

      </Product>

      <Product>
        <Image src={camiseta2} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta W</strong>
          <span>R$ 89,90</span>
        </footer>

      </Product>
      
    </HomerContainer>
  )
}
