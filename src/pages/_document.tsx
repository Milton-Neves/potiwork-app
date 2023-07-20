import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="A Revista Vivência tem o propósito de dinfundir as vivências literárias
              experienciadas nas instituições educacionais e na própria comunidade."
          />
          <meta
            name="keywords"
            content="revista, parnamirim, escola, literatura "
          />

          <meta
            property="og:url"
            content="http://revistavivencias.parnamirim.rn.gov.br/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Revista Vivência" />
          <meta
            property="og:description"
            content="A Revista Vivência tem o propósito de dinfundir as vivências literárias
              experienciadas nas instituições educacionais e na própria comunidade"
          />
          <meta
            property="og:image"
            content="http://revistavivencias.parnamirim.rn.gov.br/_next/image?url=%2Fimages%2Flogo.jpg&w=256&q=100"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:domain"
            content="revistavivencias.parnamirim.rn.gov.br"
          />
          <meta
            property="twitter:url"
            content="http://revistavivencias.parnamirim.rn.gov.br/"
          />
          <meta name="twitter:title" content="Revista Vivência" />
          <meta
            name="twitter:description"
            content="A Revista Vivência tem o propósito de dinfundir as vivências literárias
              experienciadas nas instituições educacionais e na própria comunidade"
          />
          <meta
            name="twitter:image"
            content="http://revistavivencias.parnamirim.rn.gov.br/_next/image?url=%2Fimages%2Flogo.jpg&w=256&q=100"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
