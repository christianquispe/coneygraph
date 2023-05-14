import { createElement } from "react";

import styles from "./styles.module.css";

type LevelsType = "1" | "2" | "3" | "4" | "5" | "6";

interface TitleProps {
 children: React.ReactNode;
 level: LevelsType;
 size?: LevelsType | "xxl";
 className?: string;
 color?: "primary" | "white" | "default"
}

export default function Title({
 children,
 level,
 className,
 size,
 color = "default",
}: TitleProps) {
 const tag = `h${level}`;

 return createElement(
  tag,
  {
   className: `${styles.Title} ${
    size ? styles[size] : styles[tag]
   } ${styles[color]} ${className}`,
  },
  children
 );
}
