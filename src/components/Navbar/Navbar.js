import { mapGetters } from 'vuex'
import { getProduits, setArticlesFiltered } from '@/services/ProduitsService'

export default ({
    name: 'Navbar',
    data() {
        return {
            allProduit: '',
            searchKey: '',
            showList:false,
        }
    },
    async created() {
        this.allProduit = await getProduits()
    },

    computed: {
        ...mapGetters(["isLoggedIn", "getUser", "getPanier"]),
        articlesFiltered() {
            let articlesFiltered = this.allProduit.filter(element => {
                return element.descriptionComplete.toLowerCase().includes(this.searchKey.toLowerCase())
            })
            setArticlesFiltered(articlesFiltered)
            return articlesFiltered
        }

    },
    mounted() {
        // Ajouter un écouteur d'événement au niveau de la fenêtre
        document.addEventListener('click', this.handleEvent);
    },
    beforeDestroy() {
        // Supprimer l'écouteur d'événement avant la destruction du composant
        document.removeEventListener('click', this.handleEvent);
    },
    methods: {
        deconnecter() {
            localStorage.removeItem('store')
            this.$router.push('/')
            this.$router.go()
        },
        submit() {
            this.$router.push('/resultatrecherche')
        },
        versPage(id){
            this.$router.push(`/article/` + id)
            location.reload()
        },
       async handleEvent(event) {
        if(event.target.id=="search"){
              this.showList=true
            }else{
                this.showList=false 
            }            
        },
        onFocus(){
            this.showList=true   
        }
    },
})