import Layout from "../components/layout"

const PageNotFoundPage = () => {
  return (
    <Layout
      title="Page Not Found"
      description="This page does not exist. So how can it have a description?"
    >
      <div className="max-w-lg mx-auto px-6 sm:px-0">
        <h1 className="text-center">Uh oh!</h1>
        <div className="text-lg">
          <p>
            Looks like you've stumbled across a page that doesn't exist on this site. If you think
            this is a mistake, feel free to{" "}
            <a href="http://twitter.com/messages/compose?recipient_id=23583938" target="_blank">
              tell me about it
            </a>
            .
          </p>
          <img
            src="https://media.giphy.com/media/xT1XGWbE0XiBDX2T8Q/giphy.gif"
            alt="Oh no!"
            className="block"
          />
        </div>
      </div>
    </Layout>
  )
}

export default PageNotFoundPage
