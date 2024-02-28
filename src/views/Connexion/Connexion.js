import Navbar from '@/components/Navbar/Navbar.vue'
import axios from 'axios'
import { setNewEmail } from '@/services/ConnexionService'


export default {
    name: 'connexion',
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

        async login() {
            await axios.post('/connexion', { email: this.email, password: this.password }, { withCredentials: true, credentials: 'include' })
                .then(res => {
                    if (res.data.Status === 'Success') {
                        this.$router.go(-1)
                    } else {
                        alert(res.data.Error)
                    }
                })
                .then(err => console.log(err))
        },
    },
    
}