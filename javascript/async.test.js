const waitSeconds = require('./async');

describe('waitSeconds', () => {
  it('Promise version', () => {
    return waitSeconds(2).then(data => {
      expect(data).toBe('Time waited')
    })
  })
})