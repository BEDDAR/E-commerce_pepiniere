import Navbar from '../../components/Navbar/Navbar.vue'
import { getCommandes } from '../../services/CommandesService'
import { mapGetters } from 'vuex'

const Buffer = require('buffer/').Buffer

export default {
    name: 'Commandes',
    components: { Navbar },
    data() {
        return {
            commandes: ''
        }
    },

    async created() {
        this.commandes = await getCommandes(this.getUser.id)
    },

    computed: {
        ...mapGetters(["getUser"]),

    },

    methods: {
        generateImageFromBuffer(buffer) {
            let _buffer = new Buffer.from(buffer.data, 'base64');
            return _buffer.toString('base64');
        },

        show() {
            console.log(this.commandes)
        }
    }

}