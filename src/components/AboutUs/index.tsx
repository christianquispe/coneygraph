import Container from "../Container";
import { Icon, IconIds } from "../Icon";
import Text from "../Text";
import Title from "../Title";
import styles from "./styles.module.css";

interface AboutUsCardProps {
  title: string;
  description: string;
  img: string;
  icon: string;
  isImgLeft?: boolean;
}

const AboutUsCard: React.FC<AboutUsCardProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={props.icon} alt="" />
      <div className="pb-3">
        <Title level="3">{props.title}</Title>
        <Text as="p">{props.description}</Text>
      </div>
      <img
        className={`${styles.img} ${props.isImgLeft ? "lg:-order-1" : ""}`}
        src={props.img}
        alt=""
      />
    </div>
  );
};

export default function AboutUs() {
  return (
    <section className={styles.AboutUs}>
      <Container>
        <div className={styles.wrapperList}>
          <AboutUsCard
            img="https://www.gigantografiaswilson.com/wp-content/uploads/2023/06/imagen-de-portada-de-calidad.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec"
            title="Calidad 1"
            icon={
              "https://www.gigantografiaswilson.com/wp-content/uploads/2023/06/1ca.png"
            }
          />
          <AboutUsCard
            img="https://www.gigantografiaswilson.com/wp-content/uploads/2023/06/imagen-de-portada-de-calidad.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec"
            title="Calidad 2"
            icon={
              "https://www.gigantografiaswilson.com/wp-content/uploads/2023/06/1ca.png"
            }
            isImgLeft
          />
          <AboutUsCard
            img="https://www.gigantografiaswilson.com/wp-content/uploads/2023/06/imagen-de-portada-de-calidad.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec"
            title="Calidad 3"
            icon={
              "https://www.gigantografiaswilson.com/wp-content/uploads/2023/06/1ca.png"
            }
          />
        </div>
      </Container>
    </section>
  );
}
