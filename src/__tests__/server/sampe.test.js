const request = require('supertest')
const app = require('../../server')

describe('API test', () => {
  it('Shouldget user name', async () => {
    const res = await request(app)
      .get('/api/getUsername')
      .send()
    expect(res.statusCode).toEqual(200)
  })
})