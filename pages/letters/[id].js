import gql from "graphql-tag"

import apolloClient from "../../lib/apollo-client"

import Layout from "../../components/layout"

const GET_LETTER_QUERY = gql`
  query GetLetter($id: Int!) {
    letter: letters_by_pk(id: $id) {
      id
      body
      signature
    }
  }
`

const LetterPage = ({ letter }) => {
  return (
    <Layout>
      <div className="max-w-md mx-auto p-4 bg-gray-200 text-gray-800 rounded-sm">
        <div dangerouslySetInnerHTML={{ __html: letter.body }} className="mb-4" />
        {letter.signature && <p>- {letter.signature}</p>}
      </div>
    </Layout>
  )
}

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
