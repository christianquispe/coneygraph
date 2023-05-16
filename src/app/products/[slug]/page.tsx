import Image from "next/image";
import productsData from "../../../../data/products.json";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Text from "@/components/Text";
import Button from "@/components/Button";

export default function ProductDetails({ params }: any) {
 const slug = params.slug;
 const product = productsData.find((product) => product.slug === slug);

 if (!product) {
  return <div>No tenemos datos para este producto</div>;
 }

 const dividedName = product.name.split(" ");
 const firstWord = dividedName[0];
 const restWord = dividedName.slice(1).join(" ");

 return (
  <Container>
   <section className="desktop:grid desktop:grid-cols-2 gap-14 py-10">
    <div className="px-4 py-8 flex flex-col gap-4 items-start desktop:order-1">
     <Title level="1" size="xxl" className="leading-normal">
      <Text as="span" withBox className="inline-block leading-normal">
       {firstWord}
      </Text>
      {restWord}
     </Title>
     <Text as="p" className="text-xl">
      {product.description}
     </Text>
     <Button type="primary" className="uppercase">
      Ver productos entregados
     </Button>
    </div>
    <div>
     <div className="max-w-[340px] mx-auto">
      <Image
       alt={product.altImg}
       src={product.img}
       width={1000}
       height={1000}
      />
     </div>
    </div>
   </section>
  </Container>
 );
}
