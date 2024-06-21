const request = require('supertest'); // Supertest pour effectuer des requêtes HTTP
const app = require('../../app.js'); // Importer l'application Express

describe('Express App', () => {
  // Test de la route racine '/'
  test('GET /', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello' });
  });

});