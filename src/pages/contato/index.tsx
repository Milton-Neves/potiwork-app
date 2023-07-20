import Head from 'next/head';
import React from 'react';

import styles from './styles.module.scss';

const Contato = () => {
  return (
    <>
      <Head>
        <title>Revista Vivência - Contato</title>
      </Head>
      <section className={styles.contact}>
        <h2>Fale Conosco</h2>
        <div className={styles.contact__informations}>
          <div className={styles.contact__information}>
            <h5>E-mail</h5>
            <p>vivenciasrevista@gmail.com</p>
          </div>
          <div className={styles.contact__information}>
            <h5>Whatsapp</h5>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="whatsapp://send?abid=84987222573"
            >
              Cleide Almeida - (84) 98722-2573
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="whatsapp://send?abid=84999864776"
            >
              Maria José - (84) 99986-4776
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="whatsapp://send?abid=84991493745<"
            >
              Veruska Granja - (84) 99149-3745
            </a>
          </div>

          <div className={styles.contact__information}>
            <h5>ESCOLA MUNICIPAL BRIGADEIRO EDUARDO GOMES, <br />SECRETARIA MUNICIAL DE EDUCAÇÃO E CULTURA</h5>
            <p>
              Rua Aveloz, s/n, Nova Parnamirim, Parnamirim/RN - CEP: 59.152-001
            </p>
            <h5>PERIODICIDADE</h5>
            <p>
              Anual
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contato;