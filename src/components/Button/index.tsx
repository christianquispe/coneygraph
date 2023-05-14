import { handleActiveClass } from "@/utils/classnames";

import styles from "./styles.module.css";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
 children: React.ReactNode;
 type?: "default" | "primary" | "secondary" | "danger" | "warning";
 htmlType?: "submit" | "reset" | "button";
}

export default function Button({
 children,
 type = "primary",
 htmlType,
 className,
 ...rest
}: ButtonProps) {
 const clases = [styles.Button, styles[type], className].filter((c) => c).join(" ");

 return (
  <button className={clases} type={htmlType} {...rest}>
   {children}
  </button>
 );
}
