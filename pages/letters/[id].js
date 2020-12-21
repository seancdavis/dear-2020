import gql from "graphql-tag"
import MarkdownIt from "markdown-it"

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
      <div className="max-w-md mx-auto px-6 sm:px-0">
        <div className="p-4 bg-gray-200 text-gray-800 rounded-sm">
          <div dangerouslySetInnerHTML={{ __html: letter.bodyHtml }} className="mb-4" />
          <p>- {letter.signature}</p>
        </div>
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

  const letter = {
    ...data.data.letter,
    bodyHtml: MarkdownIt().render(data.data.letter.body || "")
  }

  console.log(letter)

  return {
    props: { letter }
  }
}

export default LetterPage
