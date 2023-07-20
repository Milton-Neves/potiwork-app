import React from "react";

import styles from "./styles.module.scss";

const data = {
  id: 1,
  name: "Escola Municipal Brigadeiro Eduardo Gomes",
  desciption: `
    <p>A Escola Municipal Brigadeiro Eduardo Gomes, inaugurada em 30 de dezembro de 2008, 
    é mantida pelo poder público, sob a administração da Secretaria Municipal de Educação 
    e Cultura de Parnamirim. O decreto de sua criação data de 07 de julho de 2009, sob o 
    nº 1.431/2009. As atividades educacionais tiveram início em 2009 e oferece Educação 
    Básica, anos iniciais e finais de 1º ao 9º ano, nos turnos matutino e vespertino e 
    atende a mais de 600 alunos/ano.<br><br>A missão dela é garantir um ensino de qualidade, 
    promover a construção da cidadania em um ambiente educacional democrático, fortalecido 
    por valores éticos, capazes de permitir aos educandos tornarem-se construtores da sua 
    história, assegurando o seu acesso e permanência na escola. Nesta linha, inúmeros projetos 
    realizados na escola se destacaram no âmbito municipal, estadual e até nacional, fazendo 
    jus a uma instituição associada à Rede PEA-UNESCO, desde o ano de 2018. Os projetos e 
    ações desenvolvidos objetivam fortalecer o protagonismo, a aprendizagem ativa, significativa 
    e inclusiva alinhados a construção da cultura de paz, a aprendizagem intercultural e a 
    educação para o desenvolvimento sustentável. A instituição apresenta Índices de 
    Educação Básica – IDEB – acima da média registrada no município e no estado. Com resultados, 
    nos anos finais, bastante positivos, a escola tem o 2º melhor IDEB da região 
    metropolitana e o 9º do Estado do RN.</p>
  `,
  coordinatePeaple: `
    <p><strong>GESTÃO</strong></p><p><br>Aracelli Oliveira da Silva <strong>Viegas Gestora&nbsp;</strong>
    <br>Sérgio Carvalho Dantas <strong>Vice-gestor</strong></p><p>&nbsp;</p><p>&nbsp;</p><p><strong>
    COORDENAÇÃO PEDAGÓGICA</strong></p><p><br>Mônica Raíssa <strong>Anos iniciais&nbsp;</strong>
    <br>Maria José Felipe Pinheiro <strong>Anos finais</strong></p>
  `,
  highlightTeachers: {
    id: 1,
    initialYears: `
      <p><strong>1ºA</strong> - Cenilde Cortez</p><p><strong>1ºB</strong> - Nina Rosa Linhares</p>
      <p><strong>2ºA</strong> - Liege Alves</p><p><strong>2ºB</strong> - Conceição Tavares</p>
      <p><strong>3ºA</strong> - Makclhaene Brito</p><p><strong>3ºB</strong> - Lidiane Santos</p>
      <p><strong>4ºA</strong> - Isabela Bione</p><p><strong>4ºB</strong> - Elizonete Maia</p>
      <p><strong>5ºA</strong> - Áudria Quiroz</p><p><strong>5ºB</strong> - Veruska Granja</p>
      <p><strong>Arte</strong> - Wanessa Souza</p><p><strong>Biblioteca</strong> - Maria José Pinheiro</p>
      <p><strong>Ed. Física</strong> - Karina Santos</p><p><strong>Laboratório de Informática</strong> - Síria Lopes</p>
      <p><strong>Sala Multifuncional</strong> - Eliane Teixeira</p>
    `,
    finalYears: `
      <p><strong>Língua Portuguesa</strong> - Cleide Almeida e Verônica de Araújo</p>
      <p><strong>Matemática</strong> - Sarah Leôncio e Selma Fonseca</p>
      <p><strong>História</strong> - Liduína Bezerra e Lindemberg Araújo</p>
      <p><strong>Geogafia</strong> - Alexandre Vieira e Liduína Peregrino</p>
      <p><strong>Ciências</strong> - Carolina Leiros e Isabelly Teixeira</p>
      <p><strong>Inglês</strong> - Luciano Júnior</p><p><strong>Ensino Religioso</strong> - Lisabele Teixeira</p>
      <p><strong>Arte</strong> - Kaenia Paiva</p><p><strong>Educação Física</strong> - Sônia Araújo</p>
      <p><strong>Biblioteca</strong> - Lúcia Silva</p><p><strong>Laboratório de Informática</strong> - Izaac Costa</p>
      <p><strong>Sala multifuncional</strong> - Iara Cunha</p>
    `,
  },
};

const Sobre = () => {
  return (
    <section className={styles.container}>
      <h2>{data.name}</h2>

      <div
        className={styles.container}
        dangerouslySetInnerHTML={{ __html: data.desciption }}
      ></div>

      <div className={`${styles.grid} ${styles.grid_4} ${styles.mt_3}`}>
        <div dangerouslySetInnerHTML={{ __html: data.coordinatePeaple }}></div>
        <div>
          <div>
            <h3>PROFESSORES (ANOS INICIAIS)</h3>
          </div>
          <div className={`${styles.grid} ${styles.grid_2}`}>
            <div
              className={styles.school__text}
              dangerouslySetInnerHTML={{
                __html: data.highlightTeachers.initialYears,
              }}
            ></div>
          </div>
        </div>
        <div>
          <div>
            <h3>PROFESSORES (ANOS FINAIS)</h3>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: data.highlightTeachers.finalYears,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
