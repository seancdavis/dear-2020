import { useEffect, useState } from "react"
import Head from "next/head"
import MarkdownIt from "markdown-it"
import stripHtml from "string-strip-html"

import Icon from "../components/icon"
import Layout from "../components/layout"

const Letter = (letter) => {
  const letterSnippet = (letter) => {
    const firstParagraph = (letter.body || "").split("\n")[0]
    const firstParagraphHtml = MarkdownIt().render(firstParagraph)
    let snippet = stripHtml(firstParagraphHtml).result
    let words = snippet.split(" ")
    return words.length > 20 ? `${words.slice(0, 20).join(" ")} ...` : snippet
  }

  return (
    <article className="bg-gray-200 text-gray-800 p-4 rounded-sm shadow-md flex flex-col justify-between">
      <div className="mb-2" dangerouslySetInnerHTML={{ __html: letterSnippet(letter) }} />
      <p className="mb-4">- {letter.signature}</p>
      <a href={`/letters/${letter.id}`}>
        <span className="inline-block align-middle mr-2 underline">Read Letter</span>
        <Icon name="arrowRight" className="inline-block w-4" />
      </a>
    </article>
  )
}

const LetterSkeleton = () => {
  return (
    <div className="h-32 bg-gray-600 rounded-sm shadow-md relative overflow-hidden letter-skeleton"></div>
  )
}

const LettersPage = () => {
  const [letters, setLetters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(async () => {
    const res = await fetch("/api/letters")
    const json = await res.json()
    if (!json.letters) {
      setError(true)
    }
    setLetters(json.letters)
    setLoading(false)
  }, [])

  let body

  if (loading) {
    body = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
        {[...Array(12)].map((_, idx) => (
          <LetterSkeleton key={idx} />
        ))}
      </div>
    )
  } else if (error) {
    body = (
      <div className="text-center text-2xl bg-yellow-300 max-w-md mx-auto p-6 rounded-sm text-black">
        <p>
          Error loading letters.
          <br /> Please{" "}
          <a href="/letters" className="underline">
            refresh the page
          </a>
          .
        </p>
      </div>
    )
  } else {
    body = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
        {letters.map((letter, idx) => (
          <Letter {...letter} key={idx} />
        ))}
      </div>
    )
  }

  return (
    <Layout
      title="Letters"
      description="Read letters others sent to 2020. Join the community in telling 2020 how you really feel."
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="container mx-auto px-6 xl:px-0">{body}</div>
      </div>
    </Layout>
  )
}

export default LettersPage
