const waitSeconds = (numberOfSeconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Time waited')
    }, numberOfSeconds * 1000)
  })
}
