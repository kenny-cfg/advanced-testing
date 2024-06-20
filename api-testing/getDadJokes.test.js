const getDadJokes = require("./getDadJokes");

describe('getDadJokes', () => {
  it('works', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ joke: 'Kenny' }),
      })
    );
    
    const result = await getDadJokes()
    
    expect(result).toBe('Kenny')
  })
})