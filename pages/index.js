import { useRef, useState } from "react"
import gql from "graphql-tag"
import { useMutation } from "@apollo/client"
import ContentEditable from "react-contenteditable"

import Button from "../components/button"
import Layout from "../components/layout"

const CREATE_LETTER_MUTATION = gql`
  mutation CreateLetter($body: String!) {
    letter: insert_letters_one(object: { body: $body }) {
      id
    }
  }
`

const HomePage = () => {
  const [body, setBody] = useState("")
  const [status, setStatus] = useState(
    <p>
      Write a letter to 2020 in the box below. Don't be afraid to tell 2020 how you really feel. (
      <a href="/about" className="underline">
        Why is this a thing
      </a>
      ?)
    </p>
  )
  const editableRef = useRef(null)
  const [createLetter] = useMutation(CREATE_LETTER_MUTATION)

  const handleLetterSubmit = async () => {
    if (!body || body.length === 0) {
      return alert("GIMME A BODY")
    }
    const { data: newLetterData } = await createLetter({ variables: { body } })
    setBody("")
    setStatus(
      <p>
        Your letter has been sent.{" "}
        <a className="underline" href={`/letters/${newLetterData.letter.id}`}>
          View it
        </a>
        !
      </p>
    )
  }

  return (
    <Layout title="Write a Letter">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto mb-8 rounded-sm">{status}</div>

        <div className="max-w-md mx-auto bg-gray-50 text-gray-800 mb-8 rounded-sm">
          <ContentEditable
            innerRef={editableRef}
            html={body}
            disabled={false}
            onChange={(event) => setBody(event.target.value)}
            tagName="div"
            style={{ minHeight: "200px" }}
            className="p-4"
          />
        </div>

        <div className="text-center">
          <Button onClick={handleLetterSubmit}>Submit Letter</Button>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
