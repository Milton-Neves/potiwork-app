import React from "react";

import { TeamCard } from "../../components/home/TeamCard";
import styles from "./styles.module.scss";

const teamData = [
  {
    id: 1,
    name: "Gabriel",
    occupation: "Programador",
    archiveName: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
    description:
      "<p>Desenvolvedor web</p><p>Desenvolvedor Frontend</p><p>Desenvolvedor Fullstack</p>",
  },
  {
    id: 2,
    name: "Fulano",
    occupation: "Design",
    archiveName:
      "https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg",
    description: "<p>Marketing</p><p>Design UI/UX</p><p>Fotografo</p>",
  },
  {
    id: 3,
    name: "Cicrano",
    occupation: "Arquiteto",
    archiveName:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU",
    description:
      "<p>Arquiteto de interiores</p><p>Arquiteto de edificios</p><p>Desenhador profissional</p>",
  },
];

const Equipe = () => {
  return (
    <div className={styles.container}>
      <h2>Nossa Equipe</h2>
      <div className={styles.container__card}>
        {teamData.map((it) => (
          <TeamCard key={it.id} data={it} />
        ))}
      </div>
    </div>
  );
};

export default Equipe;
