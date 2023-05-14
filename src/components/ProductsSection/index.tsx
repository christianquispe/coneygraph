import CardProduct, { CardProductProps } from "../CardProduct";
import Container from "../Container";
import Title from "../Title";
import productsData from '../../../data/products.json'

import styles from "./styles.module.css";

export default function ProductsSection() {
 return (
  <section id="products" className="py-10">
   <Container>
    <Title level="2" className="mb-20">
     Nuestros productos
    </Title>
    <div className={styles.products}>
     {productsData.map(({ ...props }, index) => (
      <CardProduct key={index} {...props} />
     ))}
    </div>
   </Container>
  </section>
 );
}
