import Image from "next/image";
import React from "react";

import styles from "./styles.module.scss";

type TeamCardProps = {
  name: string;
  occupation: string;
  archiveName: string;
  description: string;
};

type Props = {
  data: TeamCardProps;
};

export const TeamCard = ({ data }: Props) => {
  return (
    <div className={styles.team}>
      <Image
        className={styles.team__image}
        src={data.archiveName}
        alt={data.name}
        width={160}
        height={160}
      />
      <div className={styles.team__about}>
        <h4>{data.name}</h4>
        <span className={styles.team__occupation}>({data.occupation})</span>
        <p>{data.description}</p>
      </div>
    </div>
  );
};
