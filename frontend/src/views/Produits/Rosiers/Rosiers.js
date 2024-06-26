import Navbar from '@/components/Navbar/Navbar.vue'
import CustomInput from '@/components/CustomInput.vue'
import { getRosiers, updateStock } from '@/services/ProduitsService'
import { mapMutations, mapGetters } from 'vuex'


const Buffer = require('buffer/').Buffer

export default ({
    name: 'Rosier',
    components: {
        Navbar, CustomInput
    },
    data() {
        return {
            allRosiers: '',
            filtre: 'prix',
            quantite: 0,
        }
    },
    async created() {
        this.allRosiers = await getRosiers()
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
})

