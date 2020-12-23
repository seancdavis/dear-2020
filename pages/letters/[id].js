import gql from "graphql-tag"
import MarkdownIt from "markdown-it"
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share"

import { buildUrl } from "../../config"

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
  const url = buildUrl(`/letters/${letter.id}`)

  return (
    <Layout
      title={`Letter from ${letter.signature}`}
      description={`Read a letter sent from ${letter.signature} to 2020. Then write your own letter!`}
    >
      <div className="max-w-md mx-auto px-6 sm:px-0">
        <div className="p-4 bg-gray-200 text-gray-800 rounded-sm mb-6">
          <div dangerouslySetInnerHTML={{ __html: letter.bodyHtml }} className="mb-4" />
          <p>- {letter.signature}</p>
        </div>

        <p className="text-sm text-center mb-0">Tell the world how much you love this letter!</p>
        <div className="flex justify-center">
          <EmailShareButton url={url} className="w-10 rounded-sm overflow-hidden mx-1">
            <EmailIcon />
          </EmailShareButton>
          <FacebookShareButton url={url} className="w-10 rounded-sm overflow-hidden mx-1">
            <FacebookIcon />
          </FacebookShareButton>
          <TwitterShareButton url={url} className="w-10 rounded-sm overflow-hidden mx-1">
            <TwitterIcon />
          </TwitterShareButton>
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

  return {
    props: { letter }
  }
}

export default LetterPage
