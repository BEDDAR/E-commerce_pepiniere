import Navbar from '@/components/Navbar/Navbar.vue'
import CustomInput from '@/components/CustomInput.vue'
import { getTulipes, updateStock } from '@/services/ProduitsService'
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
            allTulipes: '',
            filtre: 'prix',
            quantite: 0,
        }
    },
    async created() {
        this.allTulipes = await getTulipes()
    },
    computed: {
        ...mapGetters(["getPanier"]),
    },
    methods: {
        ...mapMutations(["addPanier"]),

        generateImageFromBuffer(buffer) {
            let _buffer = Buffer.from(buffer.data, 'base64');
            return _buffer.toString('base64');
        },
        async ajoutAuPanier(produit) {
            if (this.quantite != 0) {
                const payload = {
                    produit: produit,
                    quantite: this.quantite,
                };
                this.addPanier(payload)
                let restStock = produit.stock - this.quantite
                updateStock(produit.id, restStock)
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

