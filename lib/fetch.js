import fetch from "isomorphic-unfetch"

export async function request(...args) {
  const res = await fetch(...args)
  return res.json()
}

export async function post(url, body) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }
  return request(url, options)
}

export default request
