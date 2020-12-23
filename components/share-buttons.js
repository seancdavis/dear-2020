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
  )
}

export default ShareButtons
