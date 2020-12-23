exports.domain = "dear2020.seancdavis.com"

exports.baseUrl = `https://${this.domain}`

exports.buildUrl = (path) => `${this.baseUrl}${path}`
