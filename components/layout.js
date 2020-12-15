import Head from "next/head"

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
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
