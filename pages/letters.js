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

const LettersPage = () => {
  const { loading, error, data } = useQuery(GET_LETTERS_QUERY)

  let body

  if (loading) {
    body = <p>"Loading..."</p>
  } else if (error) {
    body = <p>Error loading letters. Please refresh the page.</p>
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
