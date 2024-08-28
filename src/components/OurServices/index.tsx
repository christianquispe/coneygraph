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
      <img className="w-20" src={props.icon} alt="" />
      <Title level="3">{props.title}</Title>
      <div>{props.description}</div>
      <div className="flex items-center">
      <Link href={"#"}>Mas informacion</Link>
            <icon.ArrowRight/>
      </div>
    </div>
  );
};

export default function OurServices() {
  return (
    <section>
      <Container>
        <div>
          <Title level="2">SERVICIOS QUE OFRECEMOS</Title>
        </div>
        <div>
          <ServicesCard icon="
          https://cdn.icon-icons.com/icons2/2566/PNG/512/search_small_icon_153439.png" title="HOla" description="senhales de vinil adhesivo"
          />
        </div>
      </Container>
    </section>
  );
}
