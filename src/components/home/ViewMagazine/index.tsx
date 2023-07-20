import React from 'react';
import { BsDownload } from 'react-icons/bs';

import { Button } from '../../global/Button';
import { PDFViewer } from '../PDFViewer';
import styles from './styles.module.scss';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface ViewMagazineProps {
  data: IMagazineProps;
}

export interface IMagazineProps {
  motivationalText: string;
  author: string;
  edition: string;
  year: string;
  status: boolean;
  highlight: boolean;
  archiveName: string;
  originalName: string;
}

export const ViewMagazine = ({ data }: ViewMagazineProps) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.PDFViewContainer}>
          <PDFViewer PDFName={data.archiveName} />
          <h1>
            <a
              download
              target="_blank"
              rel="noopener noreferrer"
              href={`${baseUrl}/files/download/${data.archiveName}`}
            >
              {data.edition.substring(0, 3) +
                ". " +
                data.edition.substring(data.edition.length - 1)}
              /{data.year}
            </a>
          </h1>
        </div>

        <div className={styles.motivationalText}>
          <div
            dangerouslySetInnerHTML={{ __html: data.motivationalText }}
          ></div>
          <p className={styles.assign}>{data.author}</p>

          <div className={styles.magazineButtonsContainer}>
            <Button
              colorType="red-dark"
              href={`${baseUrl}/files/download/${data.archiveName}`}
              icon={<BsDownload size={22} />}
            >
              Baixar PDF
            </Button>
            <Button colorType="red" href="/contato">
              Fale conosco!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
