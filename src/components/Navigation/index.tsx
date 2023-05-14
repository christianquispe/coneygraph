"use client";
import useDeviceDetector from "@/hooks/useDeviceDetector";
import Menu from "../Menu";

import styles from "./styles.module.css";
import { Drawer } from "@/components/Drawer";
import useDialog from "@/hooks/useDialog";
import { Icon, IconIds } from "../Icon";
import { MENU_ITEMS } from "@/config/header_menu";
import Link from "next/link";

export default function Navigation() {
 const { isMobile } = useDeviceDetector();
 const { handleOpen, isVisible, handleClose } = useDialog();

 return (
  <nav className={styles.Navigation}>
   <Link href="/">
    <h1 className={styles.Logo}>CONEYGRAPH</h1>
   </Link>
   {isMobile ? (
    <div className={styles.BurgerWrap}>
     <button onClick={handleOpen}>
      <Icon id={IconIds.burger} size={24} className="stroke-primary" />
     </button>
    </div>
   ) : (
    <Menu direction="row" items={MENU_ITEMS} />
   )}
   <Drawer
    className="bg-white"
    isVisible={isVisible}
    onClose={handleClose}
    header={
     <div className="flex justify-end" onClick={handleClose}>
      <button className="absolute top-4 right-4">
       <Icon id={IconIds.closeCircle} size={24} className="text-primary" />
      </button>
     </div>
    }
   >
    <div className="h-full flex flex-col justify-center items-center">
     <Menu direction="column" items={MENU_ITEMS} />
    </div>
   </Drawer>
  </nav>
 );
}
