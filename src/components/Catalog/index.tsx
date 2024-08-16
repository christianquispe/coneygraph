import Button from "../Button";
import Container from "../Container";
import { Icon, IconIds } from "../Icon";
import Text from "../Text";
import Title from "../Title";
import styles from "./styles.module.css";
import * as icon from "react-feather";
import Link from "next/link"

export default function Catalog() {
  return (
    <section>
      <Container>
        <div className={styles.CatalogSection}>
          <Link href="/ResentProducts">
          <Button>
            <div className={styles.linkToCatalog}>
            Catalogo de trabajos realizados
            <icon.ExternalLink />
            </div>
          </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
