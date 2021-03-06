module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['"Architects Daughter"', "sans-serif"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
