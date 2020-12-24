import Head from "next/head"
import { useRouter } from "next/router"
import { buildUrl } from "../config"

import Logo from "../public/dear-2020-logo.svg"

const Layout = ({ children, description, image, title }) => {
  const defaults = {
    description: "Write a letter to 2020. Tell 2020 how you really feel.",
    title: "Dear 2020",
    image: "/dear-2020-meta-image.png"
  }

  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title || defaults.title} | Dear 2020</title>

        <meta name="description" content={description || defaults.description} />

        <meta property="og:title" content={`${title || defaults.title} | Dear 2020`} />
        <meta property="og:description" content={description || defaults.description} />
        <meta property="og:image" content={buildUrl(image || defaults.image)} />
        <meta property="og:url" content={buildUrl(router.pathname)} />

        <meta property="twitter:title" content={`${title || defaults.title} | Dear 2020`} />
        <meta property="twitter:description" content={description || defaults.description} />
        <meta property="twitter:image" content={buildUrl(image || defaults.image)} />
        <meta property="twitter:card" content="summary_large_image" />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
            <a href="/">
              Write<span className="hidden sm:inline"> a Letter</span>
            </a>
          </li>
          <li className="mx-4">
            <a href="/letters">
              Read<span className="hidden sm:inline"> Letters</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="mx-auto mb-12 layout-logo">
        <a href="/">
          <Logo />
        </a>
      </div>

      <div className="mb-12">{children}</div>

      <div className="py-8 px-4">
        <div className="max-w-md mx-auto text-center text-sm">
          <p className="mb-6">
            Made with ❤️ and 🥪 by{" "}
            <a href="https://www.seancdavis.com/" target="_blank" className="underline">
              Sean C Davis
            </a>
            .
          </p>
          <div className="sm:flex justify-center mt-10 sm:mt-0 mb-2">
            <p className="mx-2 mb-2 sm:mb-0">&copy; 2020, Sean C Davis</p>
            <p className="hidden sm:block mb-0">-</p>
            <p className="mx-2 mb-2 sm:mb-0">
              <a href="/terms" className="underline">
                Legal Stuff
              </a>
            </p>
          </div>
          <div className="sm:flex justify-center">
            <p className="mx-2 mb-2 sm:mb-0">
              <a href="/about" className="underline">
                WTF is this?
              </a>
            </p>
            <p className="hidden sm:block mb-0">-</p>
            <p className="mx-2 mb-0">
              <a href="/feedback" className="underline">
                Feedback
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
