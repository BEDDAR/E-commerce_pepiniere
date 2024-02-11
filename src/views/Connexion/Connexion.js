import Navbar from '@/components/Navbar/Navbar.vue'
import axios from 'axios'
import { setNewEmail, isEmailExist } from '@/services/ConnexionService'
import bcrypt from 'bcryptjs';
import { mapGetters, mapMutations } from 'vuex';


export default {
    name: 'connexion',
    components: { Navbar, },

    data: () => ({
        inVisible: true,
        email: '',
        password: '',
        newEmail: '',
        isLogged: false,
    }),
    methods: {
        ...mapMutations(["setUser"]),

        async login() {
            const isExiste = await isEmailExist(this.email)
            
            if (isExiste) {
                const response = await axios.get('/connexion/' + this.email).then(response => response.data)

                this.isLogged = await bcrypt.compare(this.password, response.results[0].token)
                if (this.isLogged) {
                    this.setUser(response.results[0])
                    this.$router.go(-1)
                } else {
                    alert("Email ou mot de passe invalide")
                }
                
            } else {
                alert("Email ou mot de passe invalide")
            }
        },

        versEnregistrement() {

            setNewEmail(this.newEmail)
            this.$router.push('/enregistrement')
        }
    },
    computed: {
        ...mapGetters(["getUser"]),
    }
}