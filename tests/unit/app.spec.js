const request = require('supertest'); // Supertest pour effectuer des requêtes HTTP
const app = require('../../backEnd/app'); // Importer votre application Express

describe('Express App', () => {
  // Test de la route racine '/'
  test('GET /', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello' });
  });

  // Test de l'utilisation du middleware bodyParser.json()
  test('POST with JSON data', async () => {
    const data = { name: 'John Doe', age: 30 };
    const response = await request(app)
      .post('/')
      .send(data)
      .set('Content-Type', 'application/json');
    expect(response.statusCode).toBe(200);
    // Ajoutez d'autres assertions si nécessaire
  });

  // Test de l'utilisation du middleware bodyParser.urlencoded()
  test('POST with URL encoded data', async () => {
    const data = new URLSearchParams();
    data.append('name', 'John Doe');
    data.append('age', '30');
    const response = await request(app)
      .post('/')
      .send(data.toString())
      .set('Content-Type', 'application/x-www-form-urlencoded');
    expect(response.statusCode).toBe(200);
    // Ajoutez d'autres assertions si nécessaire
  });

  // Test de l'utilisation du middleware cookieParser()
  test('GET with cookie', async () => {
    const response = await request(app)
      .get('/')
      .set('Cookie', ['token=abcdefg']);
    expect(response.statusCode).toBe(200);
    // Ajoutez d'autres assertions si nécessaire
  });
});