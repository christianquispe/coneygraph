import Image from "next/image";

import styles from "./styles.module.css";
import { Icon, IconIds } from "../Icon";
import Link from "next/link";

export interface CardProductProps {
 name: string;
 img: string;
 altImg: string;
 slug: string;
}

export default function CardProduct({
 img,
 altImg,
 name,
 slug,
}: CardProductProps) {
 return (
  <article className={styles.CardProduct}>
   <Image
    className={styles.img}
    src={img}
    alt={altImg}
    width={484}
    height={704}
   />
   <Link href={`/products/${slug}`}>
    <div className={styles.dataWrap}>
     <div>
      <h1 className={styles.title}>{name}</h1>
      <span className="text-gray-500">Ver detalle</span>
     </div>
     <Icon id={IconIds.largeRightArrow} size={16} className="fill-primary" />
    </div>
   </Link>
  </article>
 );
}
