import { useRouter } from "next/router"
import { useState } from "react"
import { load } from "recaptcha-v3"

import { buildUrl } from "../config"

import { post } from "../lib/fetch"

import Layout from "../components/layout"
import ShareButtons from "../components/share-buttons"

const HomePage = () => {
  const router = useRouter()
  const initFormData = { body: "", signature: "", email: "" }
  const [disabled, setDisabled] = useState(false)
  const [formData, setFormData] = useState(initFormData)

  const handleLetterSubmit = async (event) => {
    event.preventDefault()
    setDisabled(true)

    const recaptcha = await load(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
    formData.token = await recaptcha.execute("submit")

    const { letter } = await post("/api/letters", formData)
    if (!letter) {
      return alert("There was an problem submitting your letter.")
    }

    setFormData(initFormData)
    setDisabled(false)
    router.push(`/letters/${letter.id}`)
  }

  return (
    <Layout title="Write a Letter">
      <div className="container mx-auto px-6 sm:px-0">
        <div className="max-w-md mx-auto mb-8 rounded-sm">
          <p>
            Write a letter to 2020 in the box below. Don't be afraid to tell 2020 how you really
            feel. (
            <a href="/about" className="underline">
              Why is this a thing
            </a>
            ?)
          </p>
        </div>

        <form onSubmit={handleLetterSubmit} className="max-w-md mx-auto mb-8">
          <div className="mb-4">
            <textarea
              name="body"
              placeholder="Dear 2020, ..."
              className="bg-gray-50 text-gray-800 p-4 rounded-sm w-full h-56"
              required
              onChange={(event) => setFormData({ ...formData, body: event.target.value })}
              value={formData.body}
            />
            <p className="text-xs italic">
              Supports markdown syntax.{" "}
              <a href="https://www.markdownguide.org/basic-syntax/" target="_blank">
                Learn more
              </a>
              .
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="#signature" className="block mb-1">
              Signature
            </label>
            <input
              type="text"
              id="signature"
              className="block py-2 px-4 text-gray-800 mb-1 w-full rounded-sm"
              placeholder="Type your name ..."
              required
              onChange={(event) => setFormData({ ...formData, signature: event.target.value })}
              value={formData.signature}
            />
            <p className="text-xs italic">This will be shared alongside your letter.</p>
          </div>
          <div className="mb-4">
            <label htmlFor="#email" className="block mb-1">
              Email (optional)
            </label>
            <input
              type="email"
              id="email"
              className="block py-2 px-4 text-gray-800 mb-1 w-full rounded-sm"
              placeholder="Type your email address ..."
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              value={formData.email}
            />
            <p className="text-xs italic">
              Your email address will only be used to ask your permission for reuse.{" "}
              <a href="/terms">Learn more</a>.
            </p>
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Submit Letter"
              className="bg-gray-50 duration-300 hover:bg-opacity-80 inline-block px-4 py-2 rounded-sm text-gray-800 transition-colors"
              disabled={disabled}
            />
          </div>
        </form>

        <p className="text-sm text-center mb-2">Loving this site? Share it!</p>
        <ShareButtons url={buildUrl("/")} />
      </div>
    </Layout>
  )
}

export default HomePage
