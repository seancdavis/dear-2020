import gql from "graphql-tag"
import MarkdownIt from "markdown-it"

const Database = require("../../../lib/database")

const GET_LETTER_QUERY = gql`
  query GetLetter($id: Int!) {
    letter: letters_by_pk(id: $id) {
      id
      body
      signature
    }
  }
`

export default async (req, res) => {
  const db = new Database({
    hasura_secret: process.env.HASURA_API_KEY,
    hasura_url: process.env.NEXT_PUBLIC_HASURA_URL
  })

  const {
    query: { id }
  } = req

  console.log("REQUESTING ...")
  let { letter } = await db.request(GET_LETTER_QUERY, { id })
  console.log(letter)

  if (letter) {
    letter.bodyHtml = MarkdownIt().render(letter.body || "")
  }

  res.statusCode = 200
  res.json(letter || {})
}
