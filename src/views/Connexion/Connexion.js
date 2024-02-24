import Navbar from '@/components/Navbar/Navbar.vue'
import axios from 'axios'
import { setNewEmail } from '@/services/ConnexionService'
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
             await axios.post('/connexion',{ email: this.email, password: this.password }, {withCredentials: true, credentials: 'include'})
                .then(res => {
                    if (res.data.Status === 'Success') {
                        this.isLogged = true
                        this.setUser(res.data)
                        this.$router.go(-1)
                    } else {
                        alert(res.data.Error)
                    }
                })
                .then(err => console.log(err, this.isLogged))
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