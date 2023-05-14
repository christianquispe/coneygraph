import Link from "next/link";

import styles from "./styles.module.css";

export interface MenuItemProps extends React.HTMLProps<HTMLLIElement> {
 label: string;
 href: string;
 isActive?: boolean;
 isDisabled?: boolean;
 icon?: React.ReactNode;
 customRender?: (props: Omit<MenuItemProps, "customRender">) => React.ReactNode;
}

export default function Item({ customRender, ...restProps }: MenuItemProps) {
 const { href, label, isActive, icon, className } = restProps;

 const classes = [styles.MenuItem, className].filter(c => c).join(" ")

 return (
  <>
   {customRender ? (
    customRender?.(restProps)
   ) : (
    <li className={classes}>
     <Link href={href}>
      {icon}
      {label}
     </Link>
    </li>
   )}
  </>
 );
}
