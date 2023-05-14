import styles from "./styles.module.css";

interface ContainerProps {
 children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
 return <div className={styles.Container}>{children}</div>;
}
