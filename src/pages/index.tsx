import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react';

import { HomerContainer, Product } from "@/styles/pages/home";

import 'keen-slider/keen-slider.min.css';

import camiseta1 from '../assets/camisetas/01.png'
import camiseta2 from '../assets/camisetas/02.png'
import camiseta3 from '../assets/camisetas/03.png'


export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomerContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>

      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta W</strong>
          <span>R$ 89,90</span>
        </footer>

      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta J</strong>
          <span>R$ 99,90</span>
        </footer>

      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta J</strong>
          <span>R$ 99,90</span>
        </footer>

      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta J</strong>
          <span>R$ 99,90</span>
        </footer>

      </Product>
      
    </HomerContainer>
  )
}
