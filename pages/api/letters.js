const Database = require("../../lib/database")
import gql from "graphql-tag"

const GET_LETTERS_QUERY = gql`
  query {
    letters(order_by: { created_at: desc }) {
      id
      body
      signature
    }
  }
`

export default async (req, res) => {
  const db = new Database({
    hasura_secret: process.env.NEXT_PUBLIC_HASURA_API_KEY,
    hasura_url: process.env.NEXT_PUBLIC_HASURA_URL
  })

  const letters = await db.request(GET_LETTERS_QUERY)

  res.statusCode = 200
  res.json(letters)
}
