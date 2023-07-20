import { GetServerSideProps } from "next";
import React from "react";

import {
  IMagazineProps,
  ViewMagazine,
} from "../../components/home/ViewMagazine";
import styles from "../../styles/home.module.scss";

type props = {
  data: IMagazineProps;
};

const Revista = ({ data }: props) => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <h2>
          Leia Nossa
          <br /> Revista
        </h2>
      </div>
      <ViewMagazine data={data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const seila =
    "<p>Foi com muita surpresa que recebi o convite para fazer a apresentação da Revista Vivências. Mais surpreso ainda fiquei, quando a li, por apresentar um nível elevado na sua formatação e nos níveis dos trabalhos apresentados por educadores de diversas instituições educacionais.</p><p>Sabemos das dificuldades enfrentadas na elaboração desse trabalho, principalmente por ser oriundo de uma escola pública, na qual, por muitas vezes, há escassez de recursos. Contudo, os obstáculos vencidos são graças ao empenho e dedicação de toda a equipe.</p><p>A Revista Vivências faz uma abordagem bastante ampla sobre o que é vivido nas escolas, tratando de vários temas, dentre eles, a cultura, com ênfase na literatura, na arte, na música e no meio ambiente, destacando a importância dos cuidados com o planeta água.</p><p>Porquanto, imprime um papel social relevante, no que diz respeito ao desenvolvimento da consciência cultural, social e ambiental não só para o público escolar, como também para toda a comunidade.</p>";

  const data = {
    motivationalText: seila,
    author: "Gildásio Figueiredo",
    edition: "Volume 2",
    year: "2022",
    status: true,
    highlight: true,
    archiveName:
      "288faf19e4e2b14e54bdd77a0cc00f7f-RevistaVivÃªnciasV2-2022.pdf",
    originalName: "RevistaVivÃªnciasV2-2022.pdf",
  };

  return {
    props: {
      data,
    },
  };
};

export default Revista;
