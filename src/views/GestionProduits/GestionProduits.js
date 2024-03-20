import NavbarAdmin from '@/components/NavbarAdmin/NavbarAdmin.vue'
import { ajoutProduit } from '@/services/ProduitsService'

export default ({
    name:'GestionProduits',
    components:{NavbarAdmin},
    data(){
        return{
            items:[],
            identifiants:"",
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
    this.items=['','Tulipe','Rosier','Soin','Materiel','Fruit','Potager']
},

methods:{
    addproduit(){
        ajoutProduit(this.nom, this.descriptionCourte,this.prix,this.stock ,this.descriptionComplete,this.imageProduit,this.categorie)
    }
    
}
})