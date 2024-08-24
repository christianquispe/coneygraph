import Image from "next/image";
import Container from "../Container";
import Title from "../Title";
import styles from "./styles.module.css";

export const jobsData = [
  {
    title: "roll Screen",
    img: "/roll-screem.jpg",
    type: "senhalitica de alto voltaje",
    link: "#",
  },

  {
    title: "roll Screen",
    img: "/roll-screem.jpg",
    type: "se999999999999999 ASDSAD",
    link: "#",
  },

  {
    title: "roll Screen",
    img: "/roll-screem.jpg",
    type: "senhalitica 88888888888888",
    link: "#",
  },

  {
    title: "roll Screen",
    img: "/roll-screem.jpg",
    type: "senhalitica d2222222222",
    link: "#",
  },
 {
    title: "roll Screen",
    img: "/roll-screem.jpg",
    type: "senhalitica 666666666",
    link: "#",
  },
  {
    title: "roll Screen",
    img: "/roll-screem.jpg",
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
            {jobsData.map((item, index) => (
              <div key={index} className={styles.cardsJobsDone}>
                <a href={item.link}>
                  <Image
                    className={styles.imagesJobs}
                    src={item.img}
                    alt={item.title}
                    height={200}
                    width={200}
                  />
                </a>
                <a href={item.link}>{item.type}</a>
                <a href={item.link}>{item.title}</a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
