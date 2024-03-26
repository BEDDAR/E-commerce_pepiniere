import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Connexion from '@/views/Connexion/Connexion.vue'
import Panier from '@/views/Panier/Panier.vue'
import Contact from '@/views/Contact/Contact.vue'
import Enregistrement from '@/views/Enregistrement/Enregistrement.vue'
import Tulipes from '@/views/Produits/Tulipes/Tulipes.vue'
import FicheArticle from '@/views/FicheArticle/FicheArticle.vue'
import Rosier from '@/views/Produits/Rosiers/Rosiers.vue'
import Fruit from '@/views/Produits/Fruits/Fruits.vue'
import Potager from '@/views/Produits/Potager/Potager.vue'
import Materiel from '@/views/Produits/Materiel/Materiel.vue'
import Soins from '@/views/Produits/Soins/Soins.vue'
import Commandes from '@/views/Commandes/Commandes.vue'
import ResultatRecherche from '@/views/ResultatRecherche/ResultatRecherche.vue'
import GestionProduits from '@/views/GestionProduits/GestionProduits.vue'
import GestionUtilisateurs from '@/views/GestionUtilisateurs/GestionUtilisateurs.vue'
import HomeAdmin from '@/views/HomeAdmin.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: Connexion
  },
  {
    path: '/panier',
    name: 'panier',
    component: Panier
  },
  {
  path: '/contact',
  name: 'contact',
  component: Contact
},
  {
    path: '/enregistrement',
    name: 'enregistrement',
    component: Enregistrement
  },
  {
    path: '/tulipes',
    name: 'tulipes',
    component: Tulipes
  },
  {
    path:'/rosiers',
    name:'rosiers',
    component:Rosier
  },
  {
    path: '/article/:id(\\d+)',
    name: 'article',
    component: FicheArticle,

  },
  {
    path:'/fruits',
    name:'fruits',
    component:Fruit
  },
  {
    path:'/potager',
    name:'potager',
    component:Potager
  },
  {
    path:'/materiel',
    name:'materiel',
    component:Materiel
  },
  {
    path:'/soins',
    name:'soins',
    component:Soins
  },
  {
    path:'/mescommandes',
    name:'mescommandes',
    component:Commandes
  },
  {
    path:'/resultatrecherche',
    name:'resultatrecherche',
    component:ResultatRecherche
  },
  {
    path:'/admin/gestionutilisateurs',
    name:'/admin/gestionutilisateurs',
    component:GestionUtilisateurs
  },
  {
    path:'/admin/gestionproduits',
    name:'gestionproduits',
    component:GestionProduits
  },
  {
    path:'/admin/home',
    name:'admin/home',
    component:HomeAdmin
  },
  {
    path: '/:pathMatch(.*)*', redirect: '/' //component Not found
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
