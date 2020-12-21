import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout title="WTF is this?">
      <div className="max-w-lg mx-auto px-6 sm:px-0">
        <h1 className="text-center">Why is this a thing?</h1>
        <div className="text-lg">
          <p>
            Well 2020, because you suck, <em>mostly</em>. I don't think I need to explain why.
          </p>
          <p>
            Okay, that's not fair, I suppose. You deserve at least an explanation. Here it is in a
            thousand words:
          </p>
          <img
            src="https://media.giphy.com/media/XdIOEZTt6dL7zTYWIo/giphy.gif"
            alt="2020 Dumpster Fire"
            className="block mb-4"
          />
          <p>
            But, everyone has their version of this dumpster fire. This space is for you. Share your
            story. Tell 2020 how you really feel about them. (On this website, the personification
            of the year 2020 is nonbinary.) And once you've shared your letter(s), head on over to{" "}
            <a href="/letters" className="underline">
              view what others have to say
            </a>
            .
          </p>
          <p>
            But most importantly, I hope you have fun with this site. Be kind to others, goof
            around, and{" "}
            <a href="https://twitter.com/seancdavis29" target="_blank" className="underline">
              let me know what you think of it
            </a>
            .
          </p>
          <p>
            Made for you with ❤️ and 🥪 by{" "}
            <a href="https://www.seancdavis.com/" className="underline" target="_blank">
              Sean C Davis
            </a>
          </p>
          <p>
            P.S. I also built this site because I am a nerd and I wanted to try out a few new tools.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
