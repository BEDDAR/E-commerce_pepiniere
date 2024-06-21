const { addUser } = require('../../controllers/utilisateursController'); // Importer la fonction à tester
const db = require('../../models/index');
describe('addUser function', () => {
  // Créer des mocks pour req et res
  let req;
  let res;

  beforeEach(() => {
    // Initialiser req et res avec des fonctions et des propriétés nécessaires
    req = { 
      body: {
        last_name: 'Doe',
        first_name: 'John',
        pseudo: 'john_doe',
        typeDeCompte: 'Client',
        email: 'Jdoe@examplse.com',
        phone: '+33123456789',
        password: 'password12'
      }
    };
    res = {
      status: jest.fn().mockReturnThis(), // Mock la fonction status
      json: jest.fn() // Mock la fonction json
    };
  });

  // Avant chaque test, assurez-vous que la base de données est synchronisée
  beforeEach(async () => {
    await db.sequelize.sync({ force: false });
  });

  test('should add a new user', async () => {
    // Mock la fonction findOne pour qu'elle retourne null, indiquant qu'aucun utilisateur n'existe déjà avec cet email
    const utilisateurs = {
      findOne: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockResolvedValue() // Mock la fonction create pour indiquer que l'ajout d'utilisateur a réussi
    };

    // Appeler la fonction addUser avec les mocks de req, res et utilisateurs
    await addUser(req, res, utilisateurs);

    // Vérifier que la fonction status a été appelée avec le bon code de statut
    expect(res.status).toHaveBeenCalledWith(201);
    // Vérifier que la fonction json a été appelée avec le bon message de succès
    expect(res.json).toHaveBeenCalledWith({ Status: 'Success' });
  });

  test('should return 409 if user already exists', async () => {
    // Mock la fonction findOne pour qu'elle retourne un utilisateur existant avec l'email donné
    const utilisateurs = {
      findOne: jest.fn().mockResolvedValue({}),
    };

    // Appeler la fonction addUser avec les mocks de req, res et utilisateurs
    await addUser(req, res, utilisateurs);

    // Vérifier que la fonction status a été appelée avec le bon code de statut
    expect(res.status).toHaveBeenCalledWith(409);
    // Vérifier que la fonction json a été appelée avec le bon message d'erreur
    expect(res.json).toHaveBeenCalledWith({ message: `L'utilisateur avec l'email : ${req.body.email} existe déjà!` });
  });
});