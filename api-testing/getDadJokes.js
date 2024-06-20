const getDadJokes = () => {
  return fetch('https://icanhazdadjoke.com', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => response.json()).then(json => console.log(json))

}

module.exports = getDadJokes