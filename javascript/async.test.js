const waitSeconds = require('./async');

describe('waitSeconds', () => {
  it('Promise version', () => {
    console.log('FIRST')
    return waitSeconds(2).then(data => {
      console.log('FOURTH')
      expect(data).toBe('Time waited')
    })
  })
})