import Layout from "../components/layout"
import { buildUrl } from "../config"

const FeedbackPage = () => {
  return (
    <Layout title="Feedback" description="How to provide feedback, flag letters, and report bugs.">
      <div className="max-w-lg mx-auto px-6 sm:px-0">
        <h1 className="text-center">Feedback!</h1>
        <div className="text-lg">
          <p>
            I made this site quickly as a teaching ground for{" "}
            <a href="https://www.seancdavis.com/blog" target="_blank">
              new blog content
            </a>
            . That's a fancy way for me to say <em>this site ain't perfect</em>. I need a little
            help from you to make it more usable and enjoyable for others.
          </p>

          {/* --- FLAGS --- */}

          <h2 id="flags" className="uppercase mt-8 mb-2 text-2xl text-center">
            Flagging Letters
          </h2>
          <p>
            Let's be honest, some people suck. They puts words together that are unnecessarily
            hurtful or threatening. While this is meant to be an open platform for sharing thoughts,
            it's more important that it be a safe place.
          </p>
          <p>
            If you take issue with a particular letter, I would love to hear about it. Send me{" "}
            <a href="http://twitter.com/messages/compose?recipient_id=23583938" target="_blank">
              a message
            </a>{" "}
            or <a href="mailto:hello@seancdavis.com">email</a> with why you think the letter should
            be removed. Please include some identifiable details with the letter — the content,
            signature, or URL will do just fine.
          </p>

          {/* --- BUGS --- */}

          <h2 id="bugs" className="uppercase mt-8 mb-2 text-2xl text-center">
            Reporting Bugs
          </h2>
          <p>
            No matter where the bug reports originate, they will end up as{" "}
            <a href="https://github.com/seancdavis/dear-2020/issues" target="_blank">
              issues in GitHub
            </a>
            , which is where the code for this project lives. (I like to work out in the open.)
          </p>
          <p>
            If you are a GitHub user, it would be super duper awesome if you filed bugs directly on
            GitHub.
          </p>
          <p>
            You may also log reports by{" "}
            <a href="http://twitter.com/messages/compose?recipient_id=23583938" target="_blank">
              Sending me a message on Twitter
            </a>
            . Or, if you prefer email, <a href="mailto:hello@seancdavis.com">that's cool, too.</a>
          </p>

          {/* --- FEEDBACK --- */}

          <h2 id="feedback" className="uppercase mt-8 mb-2 text-2xl text-center">
            Providing Feedback
          </h2>
          <p>
            Got ideas on how to make this thing better? Something really sucks and you want to tell
            me about it? Great! I'd love to hear it.
          </p>
          <p>
            Please send me{" "}
            <a href="http://twitter.com/messages/compose?recipient_id=23583938" target="_blank">
              a message
            </a>{" "}
            or <a href="mailto:hello@seancdavis.com">email</a> with the details.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default FeedbackPage
