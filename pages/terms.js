import Layout from "../components/layout"

const TermsPage = () => {
  return (
    <Layout title="Legal Stuff">
      <div className="max-w-lg mx-auto">
        <h1 className="text-center">Legal Stuff &amp; Things</h1>
        <div className="text-lg">
          <h2 className="uppercase mt-8 mb-2 text-2xl text-center">Terms &amp; Conditions</h2>
          <h3 className="text-2xl">The Code</h3>
          <p>
            Let's make a long story short. I don't really give a shit what you do with the{" "}
            <strong>code</strong> that makes up this site.
          </p>
          <p>
            Actually, that's not true. I want you to take it. Use it. Copy it. Fork it. Make
            something super awesome out of it. If you do, I'd love for you to{" "}
            <a href="https://twitter.com/seancdavis29" target="_blank">
              share it with me
            </a>
            !
          </p>
          <h3 className="text-2xl">The Content</h3>
          <p>I feel a differently about the content.</p>
          <p>
            This site is built to be anonymous. When submitting a letter, you must sign it, but may
            do so however you'd like so as to protect your privacy. You may optionally include an
            email address, but that is your choice.
          </p>
          <p>
            If you include an email address, I will ask your permission before I commercially reuse
            the content or when I receive a request for reuse. If you do not respond within seven
            days, it will be assumed you approve reuse.
          </p>
          <p>Please contact me before reusing this content in any way.</p>

          <h2 className="uppercase mt-12 mb-2 text-2xl text-center">Privacy Policy</h2>
          <p>
            Your privacy is important to me. It is my policy to respect your privacy regarding any
            information I may collect from you across this website,{" "}
            <a href="https://dear2020.seancdavis.com/">https://dear2020.seancdavis.com/</a>, and
            other sites I own and operate.
          </p>
          <p>
            I only ask for personal information when I truly need it to provide a service to you. I
            collect it by fair and lawful means, with your knowledge and consent. I also let you
            know why we’re collecting it and how it will be used.
          </p>
          <p>
            I only retain collected information for as long as necessary to provide you with your
            requested service. What data I store, we’ll protect within commercially acceptable means
            to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or
            modification.
          </p>
          <p>
            I don’t share any personally identifying information publicly or with third-parties,
            except when required to by law.
          </p>
          <p>
            This website may link to external sites that are not operated by me. Please be aware
            that I have no control over the content and practices of these sites, and cannot accept
            responsibility or liability for their respective privacy policies.
          </p>
          <p>
            You are free to refuse my request for your personal information, with the understanding
            that I may be unable to provide you with some of your desired services.
          </p>
          <p>
            Your continued use of this website will be regarded as acceptance of my practices around
            privacy and personal information. If you have any questions about how I handle user data
            and personal information, feel free to contact me.
          </p>
          <p>This policy is effective as of 1 December 2020.</p>
          <p className="text-sm text-center">
            (Privacy policy created with{" "}
            <a href="https://getterms.io" title="Generate free privacy policy" target="_blank">
              GetTerms
            </a>
            .)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default TermsPage
