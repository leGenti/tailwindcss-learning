import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
// import GetInitialProps from ''

type props = {}

class Document extends NextDocument<props> {
//   static async getInitialProps(ctx):GetInitialProps {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document