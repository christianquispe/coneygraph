import Image from "next/image";

import styles from "./styles.module.css";
import Container from "../Container";
import Button from "../Button";

export default function Hero() {
 return (
  <Container>
   <div className="pb-10">
    <div className={styles.Wrapper}>
     <div className={styles.wapperSlogan}>
      <p className={styles.slogan}>
       Convierte
       <span className={styles.TextWithBox}>con nosotros</span>
       tus ideas
       <span className={styles.TextWithBox}>en impresiones.</span>
      </p>
      <p className={styles.subSlogan}>¡Impresiona al mundo con tus ideas!</p>
      <Button type="primary">Ver productos</Button>
     </div>
     <div className={styles.wrapperImg}>
      <Image
       src="/banner-image.png"
       alt="Imagen de cuadros modernos"
       width={1000}
       height={1000}
      />
     </div>
    </div>
   </div>
  </Container>
 );
}
