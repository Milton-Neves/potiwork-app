import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";
import logoEscola from "/public/images/escola-logo.svg";
import logoGCTI from "/public/images/gcti-logo.svg";
import logoPrefeitura from "/public/images/prefeitura-logo.svg";
import logoUnesco from "/public/images/unesco-logo.svg";

export const Footer = () => {
  const router = useRouter();
  const currentDate = new Date().getFullYear();

  if (router.pathname == "/login") return <div></div>;

  return (
    <footer className={styles.footer}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://gcti.parnamirim.rn.gov.br/"
      >
        <p className={styles.footer__gctiCopy}>
          &copy; {currentDate} <b>GCTI</b> - Grupo de Ciência, Tecnologia da
          Informação e Inovação
        </p>
      </a>
      <div className={styles.footer__logos}>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://gcti.parnamirim.rn.gov.br/"
        >
          <Image
            src={logoGCTI}
            alt="GCTI - Grupo de Ciência e Tecnologia da Informação"
            quality={100}
            width={90}
            height={90}
          />
        </a>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://parnamirim.rn.gov.br/"
        >
          <Image
            src={logoPrefeitura}
            alt="Prefeitura Municipal de Parnamirim"
            quality={100}
            width={150}
            height={100}
          />
        </a>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://portal.mec.gov.br/encceja-2/480-gabinete-do-ministro-1578890832/assessoria-internacional-1377578466/20747-unesco"
        >
          <Image
            src={logoUnesco}
            alt="Organização das Nações Unidas para a Educação, a Ciência e a Cultura"
            quality={100}
            width={100}
            height={100}
          />
        </a>
        <span>
          <Image
            src={logoEscola}
            alt="Escola Municipal Brigadeiro Eduardo Gomes"
            quality={100}
            width={150}
            height={80}
          />
        </span>
      </div>
    </footer>
  );
};
