import Button from "../Button";
import Container from "../Container";
import { Icon, IconIds } from "../Icon";
import Text from "../Text";
import Title from "../Title";
import styles from "./styles.module.css";
import * as icon from "react-feather";

export default function Catalog() {
  return (
    <section>
      <Container>
        <div className={styles.CatalogSection}>
          <Button>
            <div className={styles.linkToCatalog}>
            Catalogo de trabajos realizados
            <icon.ExternalLink />
            </div>
          </Button>
        </div>
      </Container>
    </section>
  );
}
