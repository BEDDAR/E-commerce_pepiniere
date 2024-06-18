import NavbarAdmin from '@/components/NavbarAdmin/NavbarAdmin.vue'
import { getUser, isLoggedIn } from '@/services/ConnexionService'

export default ({
    name: 'GestionUtilisateurs',
    components: { NavbarAdmin },
    data() {
        return {
            user: "",
            isLoggedIn: "",
        }
    },
    created() {
        this.user = getUser()
        this.isLoggedIn = isLoggedIn()
    },
})