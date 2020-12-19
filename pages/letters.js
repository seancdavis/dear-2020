import Head from "next/head"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"

import Icon from "../components/icon"
import Layout from "../components/layout"

const GET_LETTERS_QUERY = gql`
  query {
    letters {
      id
      body
    }
  }
`

const Letter = (letter) => {
  const letterSnippet = (letter) => {
    let snippet = letter.body.slice(0, 100)
    if (letter.body.length > 100) {
      snippet += " ..."
    }
    return snippet
  }

  return (
    <article className="bg-gray-200 text-gray-800 p-4 rounded-sm shadow-md flex flex-col justify-between">
      <div className="mb-2" dangerouslySetInnerHTML={{ __html: letterSnippet(letter) }} />
      <a href={`/letters/${letter.id}`}>
        <span className="inline-block align-middle mr-2 underline">View Letter</span>
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
  const { loading, error, data } = useQuery(GET_LETTERS_QUERY)

  let body

  if (loading) {
    body = (
      <div className="grid grid-cols-4 gap-6 auto-rows-fr">
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
      <div className="grid grid-cols-4 gap-6 auto-rows-fr">
        {data.letters.map((letter, idx) => (
          <Letter {...letter} key={idx} />
        ))}
      </div>
    )
  }

  return (
    <Layout title="Letters">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="container mx-auto">{body}</div>
      </div>
    </Layout>
  )
}

export default LettersPage
