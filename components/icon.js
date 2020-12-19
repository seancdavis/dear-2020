const icons = {
  arrowRight: (
    <g stroke="none" strokeWidth="1">
      <polygon points="138.933333 11 108.565333 41.1653333 174.442667 107.042667 0 107.042667 0 149.624 174.442667 149.624 108.565333 215.501333 138.933333 245.666667 256 128.333333"></polygon>
    </g>
  )
}

const Icon = ({ name, ...props }) => {
  return (
    <svg
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{name}</title>
      {icons[name]}
    </svg>
  )
}

export default Icon
