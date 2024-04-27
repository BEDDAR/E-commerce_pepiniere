// test/utilisateursController.test.js

// Importez votre service utilisateursController
import utilisateursController from '../../backEnd/controllers/utilisateursController';
import utilisateurModel from '../../backEnd/models/utilisateursModel'
const { Sequelize } = require('sequelize');
require('../../node_modules/mysql2/node_modules/iconv-lite/lib').encodingExists('foo');
const dbConfig = require('../../backEnd/config/dbConfig')

let mockedSequelize; 

describe('utilisateursController', () => {
    beforeEach(async () => {
        let mockedSequelize = new Sequelize( dbConfig.DB,
            dbConfig.USER,
            dbConfig.PASSWORD, {
            host: dbConfig.HOST,
            dialect: dbConfig.dialect,
            dialectOptions: {
                charset: 'utf8mb4', // ou un autre encodage pris en charge par votre base de données
                collate: 'utf8mb4_unicode_ci'
              },
        });
        await mockedSequelize.sync({ force: true });
    })
  
    afterEach(async () => {
        jest.clearAllMocks();
        await mockedSequelize.close();
    })
    it('devrait créer un nouvel utilisateur', async () => {
        jest.spyOn(utilisateurModel, 'create')
        // Votre test ici
        const req = {
            body: {
                nom: 'lola',
                prenom: 'lili',
                pseudo: 'lou',
                type_de_compte: 'Client',
                email: 'lola@gmail.com',
                telephone: '+33123456780',
                mot_de_passe: 'AA'
            }
        };

        const res = {
            status: jest.fn(() => res),
            json: jest.fn()
        };

        const newUser = await utilisateursController.addUser(req, res);
        expect(utilisateurModel.create).toHaveBeenCalledWith(req.body);
        expect(newUser).toBeDefined();
        expect(newUser.nom).toBe(req.body.nom);
        expect(newUser.prenom).toBe(req.body.prenom);
        expect(newUser.pseudo).toBe(req.body.pseudo);
        expect(newUser.type_de_compte).toBe(req.body.type_de_compte);
        expect(newUser.email).toBe(req.body.email);
        expect(newUser.telephone).toBe(req.body.telephone);
        expect(newUser.mot_de_passe).toBe(req.body.mot_de_passe);
    });
});