import Button from "../Button";
import Container from "../Container";
import { Icon, IconIds } from "../Icon";
import Text from "../Text";
import Title from "../Title";
import styles from "./styles.module.css";
import * as icon from "react-feather";
import Link from "next/link";
import { CardProductProps } from "../CardProduct";
import { title } from "process";

export interface servicesCardProps {
  title: string;
  icon: string;
  description: string;
}
const ServicesCard: React.FC<servicesCardProps> = (props) => {
  return (
    <div className={styles.cardServices}>
        <icon.Eye className={styles.icon}/>
      <div>
        <div className={styles.titleCard}>{props.title}</div>
        <div>{props.description}</div>
      </div>
      <div className="flex items-center">
        <Link href={"#"}>Mas informacion</Link>
        <icon.ArrowRight />
      </div>
    </div>
  );
};

export default function OurServices() {
  return (
    <section>
      <Container>
        <div>
          <Title className="text-center pb-8" level="2">
            SERVICIOS QUE OFRECEMOS
          </Title>
        </div>
        <div className={styles.cardsSection}>
          <ServicesCard
            icon="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_small_icon_153439.png"
            title="HOla"
            description="senhales de vinil adhesivo"
          />
          <ServicesCard
            icon="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_small_icon_153439.png"
            title="HOla"
            description="senhales de vinil adhesivo"
          />
          <ServicesCard
            icon="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_small_icon_153439.png"
            title="HOla"
            description="senhales de vinil adhesivo"
          />
          <ServicesCard
            icon="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_small_icon_153439.png"
            title="HOla"
            description="senhales de vinil adhesivo"
          />
          <ServicesCard
            icon="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_small_icon_153439.png"
            title="HOla"
            description="senhales de vinil adhesivo"
          />
          <ServicesCard
            icon="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_small_icon_153439.png"
            title="HOla"
            description="senhales de vinil adhesivo"
          />
          <ServicesCard
            icon="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_small_icon_153439.png"
            title="HOla"
            description="senhales de vinil adhesivo"
          />
          <ServicesCard
            icon="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_small_icon_153439.png"
            title="HOla"
            description="senhales de vinil adhesivo"
          />
          <ServicesCard
            icon="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_small_icon_153439.png"
            title="HOla"
            description="senhales de vinil adhesivo"
          />
          <ServicesCard
            icon="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_small_icon_153439.png"
            title="HOla"
            description="senhales de vinil adhesivo"
          />
          <ServicesCard
            icon="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_small_icon_153439.png"
            title="HOla"
            description="senhales de vinil adhesivo"
          />
          <ServicesCard
            icon="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_small_icon_153439.png"
            title="HOla"
            description="senhales de vinil adhesivo"
          />
        </div>
      </Container>
    </section>
  );
}
