import Item, { type MenuItemProps } from "./Item";

import styles from './styles.module.css'

interface MenuProps {
 items: MenuItemProps[];
 direction?: "column" | "row"
}

export default function Menu({ items, direction = "row" }: MenuProps) {
 return (
  <ul className={`${styles.Menu} ${styles[direction]}`}>
   {items.map(({ ...props }) => (
    <Item key={props.href} {...props} />
   ))}
  </ul>
 );
}
