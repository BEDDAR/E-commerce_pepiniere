import NavbarAdmin from '@/components/NavbarAdmin/NavbarAdmin.vue'
import { ajoutProduit } from '@/services/ProduitsService'
import { getUser, isLoggedIn} from '@/services/ConnexionService'

export default ({
    name:'GestionProduits',
    components:{NavbarAdmin},
    data(){
        return{
            user:"",
            isLoggedIn:"",
            items:[],
            identifiants:[],
            nom:"", 
            descriptionCourte:"",
            prix:"",
            stock:"",
            descriptionComplete:"",
            imageProduit:"",
            categorie:""
        }
    },
created(){
    this.user= getUser()
    this.isLoggedIn=isLoggedIn()
    this.items=['','Tulipe','Rosier','Soin','Materiel','Fruit','Potager']
},

methods:{
    addproduit(){
        
        ajoutProduit(this.nom, this.descriptionCourte,this.prix,this.stock ,this.descriptionComplete,this.imageProduit,this.categorie)
        console.log(this.imageProduit)
    }
    
}
})