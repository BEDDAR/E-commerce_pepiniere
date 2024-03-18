<template>
    <div>
        <nav class="navbar navbar-expand-md" style="background-color: #e09c6c;">
            <router-link to="/" class="navbar-brand"><v-img src="../../../public/images/logo.png" style="max-width:50%"></v-img></router-link>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="menu">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Produits</a>
                        <div class="dropdown-menu">
                            <router-link to="/rosiers" class="dropdown-item">Rosiers</router-link>
                            <router-link to="/tulipes" class="dropdown-item">Tulipes </router-link>
                            <router-link to="/fruits" class="dropdown-item">Arbres fruitiers</router-link>
                            <router-link to="/potager" class="dropdown-item">Le potager</router-link>
                            <router-link to="/materiel" class="dropdown-item">Matériel de jardinage</router-link>
                            <router-link to="/soins" class="dropdown-item">Soins de jardin</router-link>
                        </div>
                    </li>
                    <li class="nav-item">
                            <input id="search" type="text" v-model="searchKey" placeholder="Rechercher des articles"
                                class="form-control input-resize" @keyup.enter="submit" on-focus="OnFocus()"/>
                                                           
                            <v-list v-if="searchKey != '' && showList" class="overflow-y-auto list" color="#0d837d">
                                <v-list-item v-for="(item, i) in articlesFiltered " :key="i">
                                    <v-list-item-title style="background-color: white;"
                                        @click="versPage(item.id)"><router-link :to="`/article/` + item.id">{{ item.nom
                                        }}</router-link></v-list-item-title>
                                </v-list-item>
                            </v-list>
                    </li>
                    <li class="nav-item">
                        <p v-if="getPanier && getPanier.length != 0" class="nb-articles">{{ getPanier.length }}</p>
                        <router-link to="/panier" class="nav-link"><i class="fa-solid fa-cart-shopping fa-2xl"></i>
                            Panier</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link"> <i class="fa-solid fa-comments fa-2xl"></i>
                            Contact</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link v-if="!isLoggedIn" to="/connexion" class="nav-link"> <i
                                class="fa-solid fa-user fa-2xl"></i>Compte</router-link>
                            
                        <div v-else-if="isLoggedIn" class="nav-link" data-toggle="dropdown">
                            <span class="d-flex">
                                <div class="user-full-name text-center">{{ user.pseudo }}</div>
                                <div dark class="btn-icon">
                                    <i class="fa-solid fa-user-gear fa-xl"></i>
                                </div>
                            </span>
                            <div class="dropdown-menu">
                                <router-link to="/panier">Mon panier</router-link>
                                <br>
                                <router-link to="/mescommandes">Mes commandes</router-link>
                                <br>
                                <span @click="deconnecter"> <a href="#">Déconnexion</a></span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
    

<script src="./NavbarAdmin.js"></script>

<style src="./NavbarAdmin.css"></style>
