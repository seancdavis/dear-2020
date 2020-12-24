import Document, { Html, Head, Main, NextScript } from "next/document"

const GTag = () => {
  if (!process.env.NEXT_PUBLIC_ANALYTICS_ID) {
    return null
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
          `
        }}
      />
    </>
  )
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <GTag />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
