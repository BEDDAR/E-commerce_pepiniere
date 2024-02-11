import Navbar from '@/components/Navbar/Navbar.vue'
import CustomInput from '@/components/CustomInput.vue'
import { getProduits, updateStock, getAvis, addAvis } from '@/services/ProduitsService'
import { mapMutations, mapGetters } from 'vuex'

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
            note: ''
        }
    },
    async created() {
        this.allProduits = await getProduits()
        this.article = this.allProduits[this.$route.params.id - 1]
        this.avis = await (await getAvis(this.$route.params.id)).data
    },

    computed: {
        ...mapGetters(["isLoggedIn", "getUser"])
    },

    methods: {
        ...mapMutations(["addPanier"]),
        generateImageFromBuffer(buffer) {
            let _buffer = new Buffer.from(buffer.data, 'base64');
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
            addAvis(this.getUser.id, idArticle, this.note, this.commentaire)
            location.reload()
        }
    }
}
