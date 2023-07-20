import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import Image from 'next/image';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import { useWindowDimensions } from '../../../helpers/useWindowDimensions';
import { Loading } from '../../global/Loading';
import styles from './styles.module.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface PDFViewerProps {
  PDFName: string;
}

interface DocumentOnLoadSuccessProps {
  _pdfInfo: {
    numPages: number;
  }
}

interface onLoadProgressProps {
  loaded: number,
  total: number
}

interface onLoadErrorProps {
  name: string;
  status: number;
  message: string;
}

export const PDFViewer = ({ PDFName }: PDFViewerProps) => {
  const [totalNumberPages, setTotalNumberPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true)
  const { windowWidth } = useWindowDimensions();

  const onDocumentLoadSuccess = ({ _pdfInfo: { numPages } }: DocumentOnLoadSuccessProps) => {
    setTotalNumberPages(numPages);
    setCurrentPage(1)
  }

  const handleNextPage = () => {
    setCurrentPage(oldValue => oldValue + 1);
  }

  const handlePreviousPage = () => {
    setCurrentPage(oldValue => oldValue - 1)
  }

  return (
    <div className={styles.viewer} >
      {
        <Document
          file={`${baseUrl}/files/view/${PDFName}`}
          loading={() => <Loading />}
          error={() => isLoading ? <Loading /> : <ErrorPDFLoading />}
          onLoadProgress={({ loaded, total }: onLoadProgressProps) => {
            loaded == total &&
              setTimeout(() => { setIsLoading(false) }, 400)
          }}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(err) => {
            const error = err as onLoadErrorProps
            error.status == 401 || err.name == "UnknownErrorException" &&
              setIsLoading(false)
          }}
          renderMode="canvas"
        >
          {
            (windowWidth !== null && windowWidth >= 540) ? (
              <Page renderTextLayer={false} width={350} pageNumber={currentPage} />
            ) : (
              <Page renderTextLayer={false} width={220} pageNumber={currentPage} />
            )
          }
        </Document>
      }
      <div className={styles.viewer__control}>
        <button
          className={styles.viewer__changePage}
          type="button"
          disabled={currentPage <= 1}
          onClick={handlePreviousPage}
        >
          <Image
            width={20}
            height={20}
            src="/icons/arrow-left.svg"
            alt="Seta para Esquerda"
          />
        </button>
        <p className={styles.viewer__pageNumber}>
          {currentPage || (totalNumberPages ? 1 : "--")} de {totalNumberPages || "--"}
        </p>
        <button
          type="button"
          disabled={currentPage >= totalNumberPages}
          onClick={handleNextPage}
          className={styles.viewer__changePage}
        >
          <Image
            width={20}
            height={20}
            src="/icons/arrow-right.svg"
            alt="Seta para Direita"
          />
        </button>
      </div>
    </div >
  )
}

const ErrorPDFLoading = () => {
  return (
    <div className={styles.error_loading_container}>
      <p>Erro ao carregar.</p>
    </div>
  )
}