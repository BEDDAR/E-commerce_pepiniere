import Navbar from '../../components/Navbar/Navbar.vue'
import { getCommandes } from '../../services/CommandesService'
import {getUser,isLoggedIn} from '@/services/ConnexionService'

const Buffer = require('buffer/').Buffer

export default {
    name: 'Commandes',
    components: { Navbar },
    data() {
        return {
            commandes: '',
            isLoggedIn:isLoggedIn()
        }
    },

    async created() {
        this.commandes = await getCommandes(getUser().id)
    },


    methods: {
        generateImageFromBuffer(buffer) {
            let _buffer = Buffer.from(buffer.data, 'base64');
            return _buffer.toString('base64');
        },

    }

}