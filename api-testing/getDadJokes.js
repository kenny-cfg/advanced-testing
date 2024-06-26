const getDadJokes = async () => {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      'Accept': 'application/json'
    }
  })
  const json = await response.json()
  const joke = json.joke
  return joke
  /* Original Promise version
  return fetch('https://icanhazdadjoke.com', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => response.json()).then(json => console.log(json))
  */
}

module.exports = getDadJokes