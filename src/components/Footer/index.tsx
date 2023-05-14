import Container from "../Container";
import { Icon, IconIds } from "../Icon";
import Text from "../Text";
import Title from "../Title";

export default function Footer() {
 return (
  <footer className="bg-primary text-white py-14">
   <Container>
    <div className="flex justify-between">
     <div className="w-full max-w-[350px]">
      <Title level="2" size="3" color="white">
       CONEYGRAPH
      </Title>
      <Text as="p">
       Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </Text>
      <div>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
       >
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
       </svg>
       <Icon id={IconIds.burger} size={15} />
       <Icon id={IconIds.burger} size={15} />
       <Icon id={IconIds.burger} size={15} />
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
