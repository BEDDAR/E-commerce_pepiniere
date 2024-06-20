import { getUser, isLoggedIn, setUser } from '@/services/ConnexionService'
import axios from './../../axios.js'

export default ({
    name: 'NavbarAdmin',
    data() {
        return {
            user: '',
            isLoggedIn: false
        }
    },
    async created() {
        this.verifyUser()
    },
    methods: {
        deconnecter() {
            //Supprimer le cookie du navigateur de l'utilisateur
            document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
            //Rafraîchir la page après que l'utilisateur a été déconnecté et redirigé vers la page d'accueil
            this.$router.push('/')
            this.$router.go()
        },
        async verifyUser() {
            await axios.get('/verifyuser', { withCredentials: true, credentials: 'include' })
                .then(res => {
                    if (res.data.Status === "Success") {
                        setUser({ id: res.data.id, pseudo: res.data.pseudo, role: res.data.role });
                        this.user = getUser(); // Mettre à jour l'utilisateur
                        this.isLoggedIn = isLoggedIn();
                    } else {
                        console.log(res.data.Error);
                    }
                })
                .catch(err => console.error(err));
                console.log(this.user)
        }
    },
})