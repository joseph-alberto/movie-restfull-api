const request = require("supertest");
const app = require("../app");

describe('Test movies routes', () => {

  test('GET /movies, it should retrived all movies data', async () => {
    const response = await request(app).get('/movies')
    expect(response.body.statusCode).toBe(200)
    expect(typeof response.body).toBe('object')
    expect(Array.isArray(response.body.data)).toBe(true)
  })

  test('GET /movies/:id, it should retrived specific movie data', async () => {
    const response = await request(app).get('/movies/1')
    expect(response.body.statusCode).toBe(200)
    expect(typeof response.body).toBe('object')
  })

  test('POST /movies, it should store movie data', async () => {
    const payload = {
      title: "Pengabdi Setan 2 Comunion",
      description: "adalah sebuah film horror Indonesia tahun 2022 yang disutradarai dan ditulis oleh Joko Anwar.",
      rating: 7,
      image: "img.png"
    }
    const response = await request(app)
      .post('/movies')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    expect(response.body.statusCode).toBe(200)
    expect(typeof response.body).toBe('object')
    expect(response.body.data.success).toBe(true)
    expect(typeof response.body.data.movie).toBe('object')
  })

  test('PATCH /movies, it should delete movie data', async () => {
    const payload = {
      title: "a",
      description: "b",
      rating: 4,
      image: "img.png"
    }
    const create = await request(app)
      .post('/movies')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    const payload2 = {
      title: "Pengabdi Setan 2 Comunion",
      description: "adalah sebuah film horror Indonesia tahun 2022 yang disutradarai dan ditulis oleh Joko Anwar.",
      rating: 4,
      image: "img.png"
    }

    const response = await request(app)
      .delete(`/movies/${create.body.data.movie.id}`)
      .send(payload2)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    expect(response.body.statusCode).toBe(200)
    expect(typeof response.body).toBe('object')
    expect(response.body.data.success).toBe(true)
  })

  test('DELETE /movies, it should delete movie data', async () => {
    const payload = {
      title: "Pengabdi Setan 5 Comunion",
      description: "adalah sebuah film horror Indonesia tahun 2022 yang disutradarai dan ditulis oleh Joko Anwar.",
      rating: 4,
      image: "delete.png"
    }
    const create = await request(app)
      .post('/movies')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    const response = await request(app)
      .patch(`/movies/${create.body.data.movie.id}`)
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    expect(response.body.statusCode).toBe(200)
    expect(typeof response.body).toBe('object')
    expect(response.body.data.success).toBe(true)
  })
})