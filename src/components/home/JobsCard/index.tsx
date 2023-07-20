import Image from "next/image";
import React from "react";

import styles from "./styles.module.scss";

type JobCardProps = {
  title: string;
  description: string;
  archiveName: string;
  archiveLegend: string;
};

type props = {
  data: JobCardProps;
};

export const JobsCard = ({ data }: props) => {
  return (
    <article className={styles.container}>
      <h3>{data.title}</h3>

      <div className={styles.container__content}>
        <div className={styles.image}>
          <Image
            src={data.archiveName}
            width={438}
            height={438}
            className={styles.image}
            alt={data.archiveName}
          />
          <figcaption>{data.archiveLegend}</figcaption>
        </div>
        <div className={styles.container__description}>
          <h3>{data.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
      </div>
    </article>
  );
};
