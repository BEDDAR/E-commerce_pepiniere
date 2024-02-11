import Navbar from '@/components/Navbar/Navbar.vue'
import CustomInput from '@/components/CustomInput.vue'
import { getFruits, updateStock } from '@/services/ProduitsService'
import { mapMutations, mapGetters } from 'vuex'

//import VueCookies from 'vue-cookies'

const Buffer = require('buffer/').Buffer

export default {
    name: 'Fruit',
    components: {
        Navbar, CustomInput
    },
    data() {
        return {
            allFruits: '',
            filtre: 'prix',
            quantite: 0,
        }
    },
    async created() {
        this.allFruits = await getFruits()
    },
    computed: {
        ...mapGetters(["getPanier"]),
    },

    methods: {
        ...mapMutations(["addPanier"]),

        generateImageFromBuffer(buffer) {
            let _buffer = new Buffer.from(buffer.data, 'base64');
            return _buffer.toString('base64');
        },
        async ajoutAuPanier(produit) {
            if (this.quantite != 0) {
                let restStock = produit.stock - this.quantite
                updateStock(produit.id, restStock)
                const payload = {
                    produit: produit,
                    quantite: this.quantite,
                };
                this.addPanier(payload)
                location.reload();
            }
            if (produit.stock == 0) {
                alert("Stock épuisé")
            }
            if (this.quantite == 0) {
                alert("Quantité est nulle")
            }

        },
    }
}

