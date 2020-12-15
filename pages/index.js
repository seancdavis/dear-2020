import { useRef, useState } from "react"
import Head from "next/head"
import gql from "graphql-tag"
import { useMutation } from "@apollo/client"
import ContentEditable from "react-contenteditable"

import Layout from "../components/layout"

const CREATE_LETTER_MUTATION = gql`
  mutation CreateLetter($body: String!) {
    insert_letters_one(object: { body: $body }) {
      id
    }
  }
`

const HomePage = () => {
  const [body, setBody] = useState("")
  const editableRef = useRef(null)
  const [createLetter, { data: newLetterData }] = useMutation(CREATE_LETTER_MUTATION)

  const handleLetterSubmit = () => {
    if (!body || body.length === 0) {
      return alert("GIMME A BODY")
    }
    createLetter({ variables: { body } })
    setBody("")
  }

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Dear 2020,</h1>
      <p>[Write your letter ...]</p>

      <ContentEditable
        innerRef={editableRef}
        html={body}
        disabled={false}
        onChange={(event) => setBody(event.target.value)}
        tagName="div"
      />

      <button onClick={handleLetterSubmit}>Submit Letter</button>
    </Layout>
  )
}

export default HomePage
