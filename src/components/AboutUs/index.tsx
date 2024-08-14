import Container from "../Container";
import { Icon, IconIds } from "../Icon";
import Text from "../Text";
import Title from "../Title";
import styles from "./styles.module.css";

export default function AboutUs() {
  return (
    <section className={styles.AboutUs}>
      <Container>
        <div>
            <div className={styles.wrapper}>
              <img
                className={styles.img}
                src="https://www.gigantografiaswilson.com/wp-content/uploads/2023/06/1ca.png"
                alt=""
              />
              <div>
                <Title level="3">Calidad</Title>
                <Text as="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  id odio animi nihil, aut cumque beatae esse. Non repellat
                  libero a facere, quas soluta dolor? Quidem aut ducimus
                  asperiores? Vero?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Qui magni omnis autem! A rerum adipisci quae
                  distinctio eos blanditiis eum velit voluptatum dignissimos
                  sit? Voluptatibus labore enim unde? Quia, modi!Lorem
                </Text>
              </div>
              <img
                src="https://www.gigantografiaswilson.com/wp-content/uploads/2023/06/imagen-de-portada-de-calidad.png"
                alt=""
              />
            </div>
            <div className={styles.wrapper}>
              <img
                src="https://www.gigantografiaswilson.com/wp-content/uploads/2023/06/imagen-de-portada-de-calidad.png"
                alt=""
              />
              <img
                className={styles.img}
                src="https://www.gigantografiaswilson.com/wp-content/uploads/2023/06/2ca.png"
                alt=""
              />
              <div>
                <Title level="3">Creatividad</Title>
                <Text as="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  id odio animi nihil, aut cumque beatae esse. Non repellat
                  libero a facere, quas soluta dolor? Quidem aut ducimus
                  asperiores? Vero?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Qui magni omnis autem! A rerum adipisci quae
                  distinctio eos blanditiis eum velit voluptatum dignissimos
                  sit? Voluptatibus labore enim unde? Quia, modi!Lorem
                </Text>
              </div>
            </div>
            <div className={styles.wrapper}>
              <img
                className={styles.img}
                src="https://www.gigantografiaswilson.com/wp-content/uploads/2023/06/3ca.png"
                alt=""
              />
              <div>
                <Title level="3">Material</Title>
                <Text as="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  id odio animi nihil, aut cumque beatae esse. Non repellat
                  libero a facere, quas soluta dolor? Quidem aut ducimus
                  asperiores? Vero?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Qui magni omnis autem! A rerum adipisci quae
                  distinctio eos blanditiis eum velit voluptatum dignissimos
                  sit? Voluptatibus labore enim unde? Quia, modi!Lorem
                </Text>
              </div>
              <img
                src="https://www.gigantografiaswilson.com/wp-content/uploads/2023/06/imagen-de-portada-de-calidad.png"
                alt=""
              />
            </div>
        </div>
      </Container>
    </section>
  );
}
