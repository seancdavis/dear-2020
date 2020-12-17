import Head from "next/head"

import Logo from "../public/dear-2020-logo.svg"

const Layout = ({ children, title }) => {
  return (
    <div>
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

      <div className="mb-8 py-8 px-4">
        <ul className="flex mx-auto justify-center">
          <li className="mx-4">
            <a href="/">Write a Letter</a>
          </li>
          <li className="mx-4">
            <a href="/letters">Letters</a>
          </li>
          <li className="mx-4">
            <a href="/about">About</a>
          </li>
          <li className="mx-4">
            <a href="/terms">Terms</a>
          </li>
        </ul>
      </div>

      <div className="max-w-xs mx-auto mb-12">
        <Logo />
      </div>

      {children}
    </div>
  )
}

export default Layout
