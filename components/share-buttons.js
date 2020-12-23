import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share"

const ShareButtons = ({ url }) => {
  return (
    <div className="flex justify-center">
      <EmailShareButton url={url} className="rounded-sm overflow-hidden mx-1">
        <EmailIcon className="h-10 w-10" />
      </EmailShareButton>
      <FacebookShareButton url={url} className="rounded-sm overflow-hidden mx-1">
        <FacebookIcon className="h-10 w-10" />
      </FacebookShareButton>
      <TwitterShareButton url={url} className="rounded-sm overflow-hidden mx-1">
        <TwitterIcon className="h-10 w-10" />
      </TwitterShareButton>
    </div>
  )
}

export default ShareButtons
