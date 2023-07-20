import React from "react";
import { BsDownload } from "react-icons/bs";

import { Button } from "../components/global/Button";
import { ViewMagazine } from "../components/home/ViewMagazine";
import styles from "../styles/home.module.scss";

const seila =
  "<p>Foi com muita surpresa que recebi o convite para fazer a apresentação da Revista Vivências. Mais surpreso ainda fiquei, quando a li, por apresentar um nível elevado na sua formatação e nos níveis dos trabalhos apresentados por educadores de diversas instituições educacionais.</p><p>Sabemos das dificuldades enfrentadas na elaboração desse trabalho, principalmente por ser oriundo de uma escola pública, na qual, por muitas vezes, há escassez de recursos. Contudo, os obstáculos vencidos são graças ao empenho e dedicação de toda a equipe.</p><p>A Revista Vivências faz uma abordagem bastante ampla sobre o que é vivido nas escolas, tratando de vários temas, dentre eles, a cultura, com ênfase na literatura, na arte, na música e no meio ambiente, destacando a importância dos cuidados com o planeta água.</p><p>Porquanto, imprime um papel social relevante, no que diz respeito ao desenvolvimento da consciência cultural, social e ambiental não só para o público escolar, como também para toda a comunidade.</p>";

const MagazineProps = {
  motivationalText: seila,
  author: "Gildásio Figueiredo",
  edition: "Vol. 2/2022",
  year: "2022",
  status: true,
  highlight: true,
  archiveName: "288faf19e4e2b14e54bdd77a0cc00f7f-RevistaVivÃªnciasV2-2022.pdf",
  originalName: "RevistaVivÃªnciasV2-2022.pdf",
};

const Home = () => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <h2>
          Leia Nossa
          <br /> Revista
        </h2>
      </div>

      <ViewMagazine data={MagazineProps} />

      <section className={styles.call}>
        <div className={styles.call__title}>
          <h2>
            Chamada para <br /> publicação
          </h2>
        </div>
        <div className={styles.call__content}>
          <p>
            Com alegria, convidamos alunos, professores, mediadores de leituras,
            técnicos, coordenadores pedagógicos, gestores e produtores culturais
            para juntar-se a nós, na segunda edição da Revista Vivências.
          </p>
          <br />
          <p>
            No ano de 2021, um ano desafiador, que nasce essa revista virtual,
            leve e plural, com o propósito de difundir as vivências literárias,
            criativas, humanistas, inclusivas, cidadãs, experienciadas nos
            últimos 12 meses no campo das ciências, das artes, da literatura e
            da cultura ocorridas nas instituições educacionais e na própria
            comunidade.
          </p>
          <br /> <br />
          <span>
            <b>Esperamos por você!</b>
          </span>
          <br /> <br />
          <span>
            <b>
              Veja as orientações e regras para submissão das produções abaixo.
            </b>
          </span>
          <div className={styles.call__buttons}>
            <Button
              colorType="red-dark"
              target="_blank"
              href={`https://drive.google.com/file/d/1EBVfEkqrNkz4PjsY0yO3xkAvs6KGc9sM/view`}
              icon={<BsDownload size={22} />}
            >
              Ver as Regras
            </Button>
            <Button colorType="red" href="/contato">
              Fale conosco!
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
