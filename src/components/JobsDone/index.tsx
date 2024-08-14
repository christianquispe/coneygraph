import Container from "../Container";
import { Icon, IconIds } from "../Icon";
import Text from "../Text";
import Title from "../Title";
import styles from "./styles.module.css";
import Link from "next/link";

const jobsData = [
  {
    title: "roll Screen",
    img: "https://www.teleadhesivo.com/es/img/cuas058-jpg/folder/products-listado-merchant/vinilos-decorativos-taxi-nyc.jpg",
    type: "senhalitica de alto voltaje",
    link: "#",
  },

  {
    title: "roll Screen",
    img: "https://dbdzm869oupei.cloudfront.net/img/categories/combo/6396475310622.jpg",
    type: "se999999999999999 ASDSAD",
    link: "#",
  },

  {
    title: "roll Screen",
    img: "https://www.teleadhesivo.com/es/img/cuas058-jpg/folder/products-listado-merchant/vinilos-decorativos-taxi-nyc.jpg",
    type: "senhalitica 88888888888888",
    link: "#",
  },

  {
    title: "roll Screen",
    img: "https://http2.mlstatic.com/D_NQ_NP_816984-MLC75375616408_042024-O.webp",
    type: "senhalitica d2222222222",
    link: "#",
  },

  {
    title: "roll Screen",
    img: "https://www.teleadhesivo.com/es/img/cuas058-jpg/folder/products-listado-merchant/vinilos-decorativos-taxi-nyc.jpg",
    type: "senhalitica 666666666",
    link: "#",
  },
];

export default function JobsDone() {
  return (
    <section className={styles.JobsDone}>
      <Container>
        <div className={styles.boxJobsDone}>
          <div className={styles.titleJobsDone}>
            <Title level="1">TRABAJOS REALIZADOS</Title>
          </div>
          <div className={styles.publishedJobs}>
            {jobsData.map((item) => (
              <div className={styles.cardsJobsDone}>
                <a href={item.link}>
                  <img
                    className={styles.imagesJobs}
                    src={item.img}
                    alt=""
                  />
                </a>
                <a href={item.link}>{item.type}</a>
                <a href={item.link}>
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
