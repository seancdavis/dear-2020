import { buildUrl } from "../../config"

import fetch from "../../lib/fetch"

import Layout from "../../components/layout"
import ShareButtons from "../../components/share-buttons"

const LetterPage = ({ letter }) => {
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

        <p className="text-sm text-center mb-2">Tell the world how much you love this letter!</p>
        <ShareButtons url={buildUrl(`/letters/${letter.id}`)} />
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id

  const letter = await fetch(buildUrl(`/api/letters/${id}`))

  if (!letter.id) {
    return {
      notFound: true
    }
  }

  return {
    props: { letter }
  }
}

export default LetterPage
