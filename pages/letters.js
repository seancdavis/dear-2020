import Head from "next/head"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"

import Layout from "../components/layout"

const GET_LETTERS_QUERY = gql`
  query {
    letters {
      id
      body
    }
  }
`

const LettersPage = () => {
  const { loading, error, data } = useQuery(GET_LETTERS_QUERY)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`
  // console.log(data)

  const letterSnippet = (letter) => {
    let snippet = letter.body.slice(0, 100)
    if (letter.body.length > 100) {
      snippet += " ..."
    }
    return snippet
  }

  return (
    <Layout title="Letters">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Letters</h1>
        <div>
          {data.letters.map((letter, idx) => (
            <article key={idx}>
              <div dangerouslySetInnerHTML={{ __html: letterSnippet(letter) }} />
              <a href={`/letters/${letter.id}`}>Read More</a>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default LettersPage
