import { mapGetters } from 'vuex'
import { getProduits, setArticlesFiltered } from '@/services/ProduitsService'
import { getUser, isLoggedIn, setUser } from '@/services/ConnexionService'
import axios from 'axios'

export default ({
    name: 'Navbar',
    data() {
        return {
            allProduit: '',
            searchKey: '',
            showList: false,
            user: '',
            isLoggedIn: false
        }
    },
    async created() {
        this.allProduit = await getProduits()
        this.verifyUser()
    },

    computed: {
        ...mapGetters(["getPanier"]),
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
            document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
            this.$router.push('/')
            this.$router.go()
        },
        async verifyUser() {
            await axios.get('/verifyuser', { withCredentials: true, credentials: 'include' })
                .then(res => {
                    if (res.data.Status === "Success") {
                        setUser({ id: res.data.id, pseudo: res.data.pseudo, role: res.data.role });
                        this.user = getUser(); // Mettre à jour l'utilisateur
                        this.isLoggedIn = isLoggedIn();
                    } else {
                        console.log(res.data.Error);
                    }
                })
                .catch(err => console.error(err));
        },
        submit() {
            this.$router.push('/resultatrecherche')
        },
        versPage(id) {
            this.$router.push(`/article/` + id)
            location.reload()
        },
        async handleEvent(event) {
            if (event.target.id == "search") {
                this.showList = true
            } else {
                this.showList = false
            }
        },
        onFocus() {
            this.showList = true
        }
    },
})