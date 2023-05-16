import { CATEGORIES_NAMES } from "@/config/constants";

import styles from "./styles.module.css";

export default function CategoriesSlides() {
 return (
  <div className={styles.CategoriesSlides}>
   <div className={styles.wraperList}>
    <ul className={styles.categories}>
     {[...CATEGORIES_NAMES, ...CATEGORIES_NAMES].map((category, index) => (
      <li key={`${category}-${index}`} className={styles.category}>
       {category}
      </li>
     ))}
    </ul>
   </div>
  </div>
 );
}
