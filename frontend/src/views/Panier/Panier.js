import Navbar from '../../components/Navbar/Navbar.vue'
import CustomInput from '@/components/CustomInput.vue'
import { updateStock } from '@/services/ProduitsService'
import { validerPanier} from '@/services/PanierService'
import { getUser, isLoggedIn,setUser } from '@/services/ConnexionService'
import { mapGetters, mapMutations } from 'vuex'
import axios from 'axios'
const Buffer = require('buffer/').Buffer

export default {
    name: 'Panier',
    components: { Navbar, CustomInput },
    data() {
        return {
            isLoggedIn: false
        }
    },
    created() {
       this.verifyUser()
    },
    computed: {
        ...mapGetters(["getPanier"]),

        getTotalPanier() {
            let total = 0
            this.getPanier.map(element => total += element.total)
            return total
        }
    },

    methods: {
        ...mapMutations(["addPanier", "deletePanier"]),

        async verifyUser() {
            await axios.get('/verifyuser', { withCredentials: true, credentials: 'include' })
                .then(res => {
                    if (res.data.Status === "Success") {
                        setUser({ id: res.data.id, pseudo: res.data.pseudo, role: res.data.role });
                        this.isLoggedIn = isLoggedIn();
                    } else {
                        console.log(res.data.Error);
                    }
                })
                .catch(err => console.error(err));
        },

        generateImageFromBuffer(buffer) {
            let _buffer = Buffer.from(buffer.data, 'base64');
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
            if (this.getPanier.length != 0) {
                validerPanier(this.getPanier, getUser().id)
                //notifications.push(`Une commande est validée par id: ${getUser().id} pseudo: ${getUser().pseudo}`)
            }
        }
    }
}