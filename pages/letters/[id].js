import gql from "graphql-tag"

import apolloClient from "../../lib/apollo-client"

const LetterPage = ({ letter }) => {
  return (
    <>
      <a href="/">Go Home</a>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: letter.body }} />
    </>
  )
}

const GET_LETTER_QUERY = gql`
  query GetLetter($id: uuid!) {
    letter: letters_by_pk(id: $id) {
      id
      body
    }
  }
`

export async function getServerSideProps(context) {
  const id = context.params.id

  const data = await apolloClient.query({ query: GET_LETTER_QUERY, variables: { id } })

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { letter: data.data.letter } // will be passed to the page component as props
  }
}

export default LetterPage
