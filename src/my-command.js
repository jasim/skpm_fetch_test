import sketch from 'sketch'

function postJson(url, headers, jsonData) {
  return fetch(url, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: jsonData
  })
};

export default function () {
  postJson(
    "https://example.com/invalid-url",
    {},
    { foo: "bar" }
  ).then(res => {
    log("** No Error")
    log(res)
    log(JSON.stringify(res.statusText, null, 2))
  }).catch(err => {
    log("** Error");
    log(err)
  })
}
