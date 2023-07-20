import React, { use, useEffect, useState } from "react";

import { MagazinesCard } from "../../components/home/MagazineCard";
import styles from "./styles.module.scss";

const data = [
  {
    id: 1,
    motivationalText: "",
    author: "Fulano",
    edition: "Volume 1",
    year: "2021",
    status: true,
    highlight: true,
    archiveName: "asdasd3h248fd-revista-1.pdf",
    originalName: "revista-1.pdf",
    createAt: "01/01/2021",
  },
  {
    id: 2,
    motivationalText: "",
    author: "Cicrano",
    edition: "Volume 2",
    year: "2022",
    status: false,
    highlight: false,
    archiveName: "asdasd3h248fd-revista-2.pdf",
    originalName: "revista-2.pdf",
    createAt: "01/01/2022",
  },
  {
    id: 3,
    motivationalText: "",
    author: "beltrano",
    edition: "Volume 3",
    year: "2023",
    status: true,
    highlight: false,
    archiveName: "asdasd3h248fd-revista-3.pdf",
    originalName: "revista-3.pdf",
    createAt: "01/01/2023",
  },
];

const VolumesAnteriores = () => {
  const [magazines, setMagazines] = useState(() => {
    return data.filter((data) => data.status && !data.highlight);
  });

  return (
    <>
      <section className={styles.container}>
        <div className={styles.container__about}>
          <h2>Revista Vivências</h2>
          <p>
            A Revista Vivências nasce da inquietação de três professoras da
            Escola Municipal Brigadeiro Eduardo Gomes, no ano de 2021, com a
            missão de promover a difusão das práticas experienciadas no chão das
            instituições escolares.
            <br />
            <br /> Apresentando-se como um instrumento integrador, a revista,
            produzida a muitas mãos, constitui-se em um esforço coletivo para
            fortalecer a produção cultural, as ciências, a literatura, as artes,
            a criatividade, a curiosidade e o encantamento com a leitura e a
            escrita.
            <br />
            <br /> Além de estimular o protagonismo, o empoderamento, as
            habilidades, as competências, o senso crítico, o senso estético, a
            reflexão e ação pujantes nas atividades educacionais; a Revista
            Vivências pode promover o fortalecimento e elevar a autoestima da
            comunidade escolar, o que é motivo de celebração e louvor.
            <br />
            <br /> É nesse contexto e nesta terra banhada por rios e mar que
            deságua essa revista virtual, enquanto suporte de texto/imagem
            plural, espelho para as realizações desafiadoras, criativas,
            humanísticas, inclusivas, cidadãs e libertadoras que brotam em
            nossas escolas e na comunidade em geral.
            <br />
            <br />{" "}
            <b>
              Navegue e passeie pela leitura dessa revista, produzida
              especialmente para você.
            </b>
            <br />
            <br /> <b>Equipe editorial</b>
          </p>
        </div>
        <div className={styles.old__magazines}>
          {magazines.map((data) => (
            <MagazinesCard key={data.id} data={data} />
          ))}
        </div>
      </section>
    </>
  );
};

export default VolumesAnteriores;
