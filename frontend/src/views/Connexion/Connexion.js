import Navbar from '@/components/Navbar/Navbar.vue'
import axios from './../../axios.js'
import { setNewEmail } from '@/services/ConnexionService'


export default ({
    name: 'Connexion',
    components: { Navbar, },

    data: () => ({
        inVisible: true,
        email: '',
        password: '',
        newEmail: '',
    }),

    methods: {

        versEnregistrement() {

            setNewEmail(this.newEmail)
            this.$router.push('/enregistrement')
        },

        // Définition d'une fonction asynchrone nommée login()
        async login() {
            // Envoi d'une requête POST à l'endpoint '/connexion' avec les informations d'identification de l'utilisateur (email et mot de passe)
            // Les options { withCredentials: true, credentials: 'include' } permettent d'inclure les cookies d'authentification dans la requête
            await axios.post('/connexion', { email: this.email, password: this.password }, { withCredentials: true, credentials: 'include' })
                .then(res => { // Attache une fonction de rappel à la promesse renvoyée par la requête POST
                    if (res.data.Status === 'Success') { // Vérifie si le statut de la réponse est 'Success'
                        // Redirige l'utilisateur vers la page précédente
                        this.$router.go(-1);
                    } else {
                        // Affiche une alerte avec le message d'erreur contenu dans la réponse
                        alert(res.data.Error);
                    }
                });
        }
    },

})