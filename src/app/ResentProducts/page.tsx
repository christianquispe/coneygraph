import Container from "@/components/Container";
import Title from "@/components/Title";
import Text from "@/components/Text";
import Button from "@/components/Button";
import {jobsData} from "../../components/JobsDone";
import Image from "next/image";

export default function ResentProducts({ params }: any) {

 return (
  <Container>
   <section>
      {jobsData.map((item, index) => (
              <div key={index} >
                <a href={item.link}>
                  <Image
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
   </section>
  </Container>
 );
}
