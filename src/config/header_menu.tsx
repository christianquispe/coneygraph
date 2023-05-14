import Button from "@/components/Button";
import { MenuItemProps } from "@/components/Menu/Item";
import Link from "next/link";

export const MENU_ITEMS: MenuItemProps[] = [
 {
  href: "/#about-us",
  label: "Nosotros",
  className: "font-medium tracking-wide uppercase text-primary"
 },
 {
  href: "/#products",
  label: "Productos",
  className: "font-medium tracking-wide uppercase text-primary"
 },
 {
  href: "/#contact",
  label: "Contáctanos",
  className: "font-medium tracking-wide uppercase text-primary",
  customRender: ({ label, href, className }) => (
   <Link href={href}>
    <Button type="primary" className={className}>{label}</Button>
   </Link>
  ),
 },
];
