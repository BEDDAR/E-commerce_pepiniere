import Navbar from '@/components/Navbar/Navbar.vue'
import CustomInput from '@/components/CustomInput.vue'
import { getProduits, updateStock, getAvis, addAvis } from '@/services/ProduitsService'
import { setUser, getUser, isLoggedIn } from '@/services/ConnexionService'
import { mapMutations } from 'vuex'
import axios from './../../axios.js'
const Buffer = require('buffer/').Buffer

export default {
    name: 'FicheArticle',
    components: {
        Navbar, CustomInput
    },
    data() {
        return {
            allProduits: '',
            article: '',
            reveal: false,
            quantite: 0,
            avis: [],
            ajouterCommentaire: false,
            commentaire: '',
            note: '',
            isLoggedIn: false
        }
    },
    async created() {
        this.allProduits = await getProduits()
        this.article = this.allProduits[this.$route.params.id - 1]
        this.avis = await (await getAvis(this.$route.params.id)).data
        this.verifyUser()
    },

    methods: {
        ...mapMutations(["addPanier"]),

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
        ajouterAvis(idArticle) {
            addAvis(getUser().id, idArticle, this.note, this.commentaire)
            location.reload()
        }
    }
}
