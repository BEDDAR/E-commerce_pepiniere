import Navbar from '../../components/Navbar/Navbar.vue'
import CustomInput from '@/components/CustomInput.vue'
import { updateStock } from '@/services/ProduitsService'
import { validerPanier } from '@/services/PanierService'
import { mapGetters, mapMutations } from 'vuex'

const Buffer = require('buffer/').Buffer

export default {
    name: 'Panier',
    components: { Navbar, CustomInput },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["getPanier", "isLoggedIn", "getUser"]),

        getTotalPanier() {
            let total = 0
            this.getPanier.map(element => total += element.total)
            return total
        }
    },

    methods: {
        ...mapMutations(["addPanier", "deletePanier"]),
        generateImageFromBuffer(buffer) {
            let _buffer = new Buffer.from(buffer.data, 'base64');
            return _buffer.toString('base64');
        },

        increment(element) {
            if (element.produit.stock != 0) {
                let nouveauStock = element.produit.stock - 1
                const payload = {
                    produit: element.produit,
                    quantite: 1,
                };
                this.addPanier(payload)
                updateStock(element.produit.id, nouveauStock)
            }
        },

        decrement(element) {
            if (element.quantity > 0) {
                let nouveauStock = element.produit.stock + 1
                const payload = {
                    produit: element.produit,
                    quantite: -1,
                };
                this.addPanier(payload)
                updateStock(element.produit.id, nouveauStock)
            }
        },
        deleteArticle(article) {

            this.deletePanier(article)

        },
        validerPanier() {

            this.getPanier.map(article => {
                console.log(article)
                validerPanier(article.produit.id,article.produit.prix,article.quantity,article.total, this.getUser.id)
            }
                )
        }
    }
}