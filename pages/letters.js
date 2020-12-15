import Head from "next/head"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"

const GET_LETTERS_QUERY = gql`
  query {
    letters {
      id
      body
    }
  }
`

const HomePage = () => {
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
    <div>
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
    </div>
  )
}

export default HomePage
