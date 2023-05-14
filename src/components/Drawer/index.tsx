"use client"
import { useEffect } from "react";
import usePortal from "../../hooks/usePortal";
import { handleActiveClass } from "@/utils/classnames";

import styles from "./styles.module.css";
import { createPortal } from "react-dom";
import { Icon, IconIds } from "@/components/Icon";

interface DrawerProps {
 isVisible: boolean;
 className?: string;
 header?: React.ReactNode;
 children: React.ReactNode;
 onClose?: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({
 isVisible,
 className,
 children,
 header,
 onClose,
}) => {
 const portal = usePortal("drawer");

 const classes = [
  styles.Drawer,
  handleActiveClass(styles.DrawerActive, isVisible),
  className,
 ]
  .filter((c) => c)
  .join(" ");

 useEffect(() => {
  if (isVisible) {
   document.body.style.overflow = "hidden";
  }
  if (!isVisible) {
   document.body.style.overflow = "initial";
  }
 }, [isVisible]);

 if (!portal) {
  return null;
 }

 return createPortal(
  <div className={classes}>
   {typeof header === "string" ? (
    <div className={styles.Header}>
     <Icon
      id={IconIds.arrowLeft}
      onClick={onClose}
      size={24}
      className="font-semibold text-primary"
      strokeWidth={3}
     />
     {header}
     <span className="invisible pointer-events-none">Exit</span>
    </div>
   ) : (
    header
   )}
   {children}
  </div>,
  portal
 );
};
