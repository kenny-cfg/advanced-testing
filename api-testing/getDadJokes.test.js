const getDadJokes = require("./getDadJokes");

describe('getDadJokes', () => {
  it('works', async () => {
    global.fetch = jest.fn(async () => {
      return {
        json: async () => {
          return {
            joke: 'Kenny'
          }
        }
      }
    }
      /* Original, ugh
      Promise.resolve({
        json: () => Promise.resolve({ joke: 'Kenny' }),
      })
      */
    );
    
    /*
    Promise.resolve(something)
    is equivalent to
    new Promise((resolve, reject) => resolve(something))
    */
    
    /*
     Use of reject example
     const login = (username, password) => {
       return new Promise((resolve, reject) => {
         if (username === 'kenny' && password === 'password') {
           resolve('successful')
         } else {
           reject('failed')
        }
        })
      }
      
      login(username, password).then(() => console.log('You are logged in')).catch(() => console.log('You are not logged in'))
      
      async/await version:

      try {
        await login(username, password)
        console.log('You are logged in')
      } catch (err) {
        console.log('You are not logged in')
      }
    */

    const result = await getDadJokes()

    expect(result).toBe('Kenny')
  })
})