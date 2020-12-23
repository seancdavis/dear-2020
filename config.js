const isProd = process.env.NODE_ENV === "production"

exports.domain = isProd ? "dear2020.seancdavis.com" : "localhost:3000"

exports.baseUrl = `http${isProd ? "s" : ""}://${this.domain}`

exports.buildUrl = (path) => `${this.baseUrl}${path}`
