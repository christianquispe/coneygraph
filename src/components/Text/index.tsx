import { createElement } from "react";

import styles from "./styles.module.css";

interface TextProps {
 as: "p" | "span";
 children: React.ReactNode;
 className?: string;
 withBox?: boolean;
}

export default function Text({
 as = "p",
 children,
 className,
 withBox,
}: TextProps) {
 return createElement(
  as,
  {
   className: `${styles.Text} ${withBox ? styles.withBox : ""} ${className}`,
  },
  children
 );
}
