import Head from "next/head"

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Dear 2020,"} | Dear 2020,</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div>
        <ul>
          <li>
            <a href="/">Write a Letter</a>
          </li>
          <li>
            <a href="/letters">Letters</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/terms">Terms</a>
          </li>
        </ul>
      </div>

      <hr />
      <hr />

      {children}
    </>
  )
}

export default Layout
