import { useState } from "react"
import Head from "next/head"
import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/client"

const GET_LETTERS_QUERY = gql`
  query {
    letters {
      id
      body
    }
  }
`

const CREATE_LETTER_MUTATION = gql`
  mutation CreateLetter($body: String!) {
    insert_letters_one(object: { body: $body }) {
      id
    }
  }
`

const HomePage = () => {
  const [body, setBody] = useState(null)
  const [createLetter, { data: newLetterData }] = useMutation(CREATE_LETTER_MUTATION)

  const { loading, error, data } = useQuery(GET_LETTERS_QUERY)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`
  console.log(data)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(body)
    if (!body) {
      return alert("GIMME A BODY")
    }
    createLetter({ variables: { body } })
    // Form was sent!
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Dear 2020,</h1>
      <p>[Write your letter ...]</p>

      <form onSubmit={handleFormSubmit}>
        <textarea
          name="body"
          cols="30"
          rows="10"
          placeholder="Write 2020 a letter ..."
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <input type="submit" value="submit" />
      </form>

      <hr />

      <div>
        <ul>
          {data.letters.map((letter, idx) => (
            <li key={idx}>
              <a href={`/letters/${letter.id}`}>{letter.id}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HomePage
