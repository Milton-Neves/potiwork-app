import React from "react";

import { JobsCard } from "../../components/home/JobsCard";
import styles from "./styles.module.scss";

const jobs = [
  {
    id: 1,
    title: "Rio Pequeno de Grandes Histórias",
    archiveName:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiVVrzvJxFLcIOE9oE0OfI7UdITM_hz_flw&usqp=CAU",
    archiveLegend:
      "O projeto Protagonismo literário dentro e fora da escola, fez juz" +
      "ao Prêmio do IPL como a Melhor Biblioteca Escolar do Brasil-2019.",
    description: `<p>ISBN 978-85-5508-072-2 Obra historiográfica editada no ano de 2016.
            Em 2018, recebeu uma versão comemorativa aos 60 anos de emancipação
            do município. Produzida a muitas mãos para as crianças e jovens de
            Prnamirim, com autoria de 03 professsoras, participação de alunos e
            de forma muito especial, apresenta textos do escritor Diógenes da
            Cunha Lima, tais como, o "Hino de Louvor a Parnamirim", além de
            fotografias do acervo da família. Percorremos pela história de
            Parnamirim como as águas correntes de um pequeno rio, com leveza nas
            palavras e beleza nas imagens. Apresentamos o nosso lugar, conhecido
            no mundo inteiro como Parnamirim Field. Autoras: Terezinha Martins
            da Silva; Maria José Felipe Pinheiro; Veruska de Araújo Vasconcelos
            Granja Rebouças.</p>`,
  },
  {
    id: 2,
    title:
      "O projeto Protagonismo literário dentro e fora da escola, fez juz ao Prêmio do IPL como a Melhor Biblioteca Escolar do Brasil-2019.",
    archiveName:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiVVrzvJxFLcIOE9oE0OfI7UdITM_hz_flw&usqp=CAU",
    archiveLegend: `O projeto "Protagonismo literário dentro e fora da escola", fez juz ao Prêmio do IPL como a Melhor Biblioteca Escolar do Brasil-2019.`,
    description: `<p>O prêmio do Instituto Pró-livro-IPL tem como objetivo reconhecer, valorizar e difundir projetos exitosos de fomento à leitura, promovidos 
    por organizações da sociedade civil, mídias, empresas da cadeia produtiva do livro e bibliotecas. Com edição anual, o prêmio tem abrangência nacional. 
    Os 10 finalistas na categoria bibliotecas eram dos estados de São Paulo, Rio de Janeiro, Minas Gerais, Paraná, Ceará, Mato Grosso, Acre e Goiás e fomos 
    nós de Parnamirim, Rio Grande do Norte que fomos vencedores. Prêmio compartilhado com o Projeto Rio de Leitura, que fazemos parte, enquanto Biblioteca Escolar.
    O objetivo do nosso projeto "Protagonismo literário dentro e fora da escola" é desenvolver o protagonismo literário para além dos muros da escola, incentivar 
    a leitura literária para os alunos e para comunidade escolar, produzindo ações permanentes, diferenciadas e envolventes, com vistas à formação de um leitor 
    autônomo que usufrua de todos os bens que a leitura literária proporciona.
    Desde o princípio, cuidamos da nossa biblioteca com muito carinho e zelo. Nos deixa felizes, ver nossos alunos atraídos pela leitura e por aquele lugar, abrirem
     os braços e dizer que gostariam de morar lá. Nossa biblioteca tem vida e arte, pulsa literatura</p>`,
  },
];

const NossosTrabalhos = () => {
  return (
    <section className={styles.container}>
      <h2>Nossos Trabalhos</h2>

      {jobs.map((job) => (
        <JobsCard key={job.id} data={job} />
      ))}
    </section>
  );
};

export default NossosTrabalhos;
