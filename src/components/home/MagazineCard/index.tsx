import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";

interface CardProps {
  id: number;
  edition: string;
  year: string;
}

type Props = {
  data: CardProps;
};

export const MagazinesCard: React.FC<Props> = ({ data }) => {
  return (
    <Link href={`/revista/${data.id}`} passHref>
      <div className={styles.card}>
        <div className={styles.title}>
          <h2>{data.edition}</h2>
          <p>{data.year}</p>
        </div>
      </div>
    </Link>
  );
};
