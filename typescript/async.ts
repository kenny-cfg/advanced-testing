const waitSeconds = (numberOfSeconds: number) => {
  console.log('SECOND')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('THIRD, after a delay')
      resolve('Time waited')
    }, numberOfSeconds * 1000)
  })
}

export default waitSeconds