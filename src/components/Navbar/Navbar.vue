<template>
    <div>
        <nav>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <router-link to="/">
                <label class="logo-un ml-5">RebyPépinière</label>
                <br>
                <label class="logo-deux ml-5">
                Jardiner c'est donner de la vie, Jardiner en ligne
            </label>
            </router-link>
                <ul>
                    <span v-if="user.role == 'Admin'">
                        <li><router-link to="/admin/home"><i class="fa-solid fa-circle-right"></i>Vers Accueil Admin</router-link></li>
                    </span>
                    <li class="">
                        <a href="#" class="" data-toggle="dropdown">Produits</a>
                        <div class="dropdown-menu">
                            <router-link to="/rosiers" class="dropdown-item">Rosiers</router-link>
                            <router-link to="/tulipes" class="dropdown-item">Tulipes </router-link>
                            <router-link to="/fruits" class="dropdown-item">Arbres fruitiers</router-link>
                            <router-link to="/potager" class="dropdown-item">Le potager</router-link>
                            <router-link to="/materiel" class="dropdown-item">Matériel de jardinage</router-link>
                            <router-link to="/soins" class="dropdown-item">Soins de jardin</router-link>
                        </div>
                    </li>
                    <li >
                        <input id="search" type="text" v-model="searchKey" placeholder="Chercher des articles"
                            class="form-control input-resize" @keyup.enter="submit" on-focus="OnFocus()" />

                        <v-list v-if="searchKey != '' && showList" class="overflow-y-auto list" color="#0d837d">
                            <v-list-item v-for="(item, i) in articlesFiltered " :key="i">
                                <v-list-item-title style="background-color: white;"
                                    @click="versPage(item.id)"><router-link :to="`/article/` + item.id">{{ item.nom
                                        }}</router-link></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </li>
                    <li>
                        <p v-if="getPanier && getPanier.length != 0" class="nb-articles">{{ getPanier.length }}</p>
                        <router-link to="/panier"><i class="fa-solid fa-cart-shopping fa-2xl"></i>
                            Panier</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact"> <i class="fa-solid fa-comments fa-2xl"></i>
                            Contact</router-link>
                    </li>
                    <li class="">
                        <router-link v-if="!isLoggedIn" to="/connexion"> <i
                                class="fa-solid fa-user fa-2xl"></i>Compte</router-link>

                        <div v-else-if="isLoggedIn" data-toggle="dropdown">
                            <span class="d-flex">
                                <div class="user-full-name text-center">{{ user.pseudo }} {{ user.role }}</div>
                                <div dark class="btn-icon">
                                    <i class="fa-solid fa-user-gear fa-xl"></i>
                                </div>
                            </span>
                            <div class="dropdown-menu">
                                <span v-if="user.role == 'Client'">
                                    <router-link to="/panier">Mon panier</router-link>
                                    <br>
                                    <router-link to="/mescommandes">Mes commandes</router-link>
                                    <br>
                                </span>
                                <span @click="deconnecter"> <a href="#">Déconnexion</a></span>
                            </div>
                        </div>
                    </li>
                </ul>
        </nav>
    </div>
</template>

<script src="https://kit.fontawesome.com/a076d05399.js"></script>
<script src="./Navbar.js"></script>

<style src="./Navbar.css"></style>
