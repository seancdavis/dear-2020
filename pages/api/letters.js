import gql from "graphql-tag"

const Database = require("../../lib/database")

const GET_LETTERS_QUERY = gql`
  query {
    letters(order_by: { created_at: desc }) {
      id
      body
      signature
    }
  }
`

const CREATE_LETTER_MUTATION = gql`
  mutation CreateLetter($body: String!, $signature: String!, $email: String) {
    letter: insert_letters_one(object: { body: $body, signature: $signature, email: $email }) {
      id
    }
  }
`

export default async (req, res) => {
  const db = new Database({
    hasura_secret: process.env.HASURA_API_KEY,
    hasura_url: process.env.NEXT_PUBLIC_HASURA_URL
  })

  const { body, method } = req

  let response = {}

  switch (method) {
    case "GET":
      response = await db.request(GET_LETTERS_QUERY)
      break
    case "POST":
      response = await db.request(CREATE_LETTER_MUTATION, body)
      break
  }

  res.statusCode = 200
  res.json(response)
}
