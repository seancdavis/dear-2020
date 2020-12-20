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

      <div className="mb-4 py-8 px-4">
        <ul className="flex mx-auto justify-center">
          <li className="mx-4">
            <a href="/">Write a Letter</a>
          </li>
          <li className="mx-4">
            <a href="/letters">Read Letters</a>
          </li>
        </ul>
      </div>

      <div className="mx-auto mb-12" style={{ maxWidth: "12rem" }}>
        <a href="/">
          <Logo />
        </a>
      </div>

      <div className="mb-12">{children}</div>

      <div className="py-8 px-4">
        <div className="max-w-md mx-auto text-center text-sm">
          <p className="mb-4">
            Made with ❤️ and 🥪 by{" "}
            <a href="https://www.seancdavis.com/" target="_blank" className="underline">
              Sean C Davis
            </a>
            .
          </p>
          <div className="flex justify-center">
            <p className="mx-2">&copy; 2020, Sean C Davis</p>
            <p>-</p>
            <p className="mx-2">
              <a href="/about" className="underline">
                WTF is this?
              </a>
            </p>
            <p>-</p>
            <p className="mx-2">
              <a href="/terms" className="underline">
                Legal Stuff
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
