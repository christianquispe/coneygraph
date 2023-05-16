import Container from "../Container";
import { Icon, IconIds } from "../Icon";
import Text from "../Text";
import Title from "../Title";

export default function Footer() {
 return (
  <footer className="bg-primary text-white py-14">
   <Container>
    <div className="grid gap-4 desktop:flex desktop:justify-between">
     <div className="w-full max-w-[350px] flex flex-col gap-2">
      <Title level="2" size="3" color="white">
       CONEYGRAPH
      </Title>
      <Text as="p">
       Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </Text>
      <div className="flex gap-3">
       <div className="p-1 bg-white text-primary rounded">
       <Icon id={IconIds.facebook} size={16} />
       </div>
       <div className="p-1 bg-white text-primary rounded">
       <Icon id={IconIds.instagram} size={16} />
       </div>
      </div>
     </div>
     <div>
      <span className="font-medium">Empresa</span>
      <ul>
       <li className="text-gray-400">Nosotros</li>
       <li className="text-gray-400">Contactanos</li>
       <li className="text-gray-400">Ubicanos</li>
      </ul>
     </div>
    </div>
   </Container>
  </footer>
 );
}
