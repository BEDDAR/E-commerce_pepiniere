import Navbar from '@/components/Navbar/Navbar.vue'
import axios from 'axios'
import { setNewEmail } from '@/services/ConnexionService'
import {setUser} from '@/services/ConnexionService'



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
    mounted() {
        this.verifyUser()
      },

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
                .then(err => console.log(err, this.isLogged))
        },

        verifyUser() {
            axios.get('/verifyuser', { withCredentials: true, credentials: 'include' })
              .then(res => {
                if (res.data.Status === "Success") {
                  this.isLogged = true;
                  setUser({id:res.data.id,name:res.data.name,role:res.data.role});
                } else {
                  this.isLogged = false;
                  alert(res.data.Error);
                }
              })
              .catch(err => console.error(err));
          }
    },
    
}