<template>
    <div>
        <div class="d-flex menu_haut">
            <v-col class="header-element-centre" cols="2">
                <router-link to="/"><v-img src="../../../public/images/logo03.jpg"
                        style="max-width:50%"></v-img></router-link>
            </v-col>
            <v-col cols="5">
                <v-card-text class="ml-10">
                    <v-text-field id="search" v-model="searchKey" label="Chercher votre plante, matériel ou soin"
                        class="d-none d-sm-none d-md-flex" success rounded outlined dense
                        @keyup.enter="submit" @focus="OnFocus"></v-text-field>
                    <v-list v-if="searchKey != '' && showList" class="overflow-y-auto list" color="success">
                        <v-list-item v-for="(item, i) in articlesFiltered " :key="i">
                            <v-list-item-title style="background-color: white;" @click="versPage(item.id)"><router-link
                                    :to="`/article/` + item.id">{{ item.nom
                                    }}</router-link></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-col>
            <v-col class="marginLeft">
                <v-btn color="success" rounded dark small class="py-5 px-1 d-sm-none d-md-flex">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </v-col>
            <v-col class="header-element-centre">
                <p v-if="getPanier.length!=0" class="nb-articles">{{ getPanier.length }}</p>
                <router-link to="/panier"><i class="fa-solid fa-cart-shopping fa-2xl"></i> Panier</router-link>
            </v-col>
            <v-col class="header-element-centre">
                <router-link to="/contact"> <i class="fa-solid fa-comments fa-2xl"></i> Contact</router-link>
            </v-col>
            <v-col class="header-element-centre">
                <router-link v-if="!isLoggedIn" to="/connexion"> <i class="fa-solid fa-user fa-2xl"></i>Compte</router-link>
                <div v-else-if="isLoggedIn">
                    <v-menu open-on-hover offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <span class="d-flex" v-bind="attrs" v-on="on">
                                <div class="user-full-name text-center">{{ getUser.nom }} <br> {{ getUser.prenom }}</div>

                                <div dark class="btn-icon">
                                    <i class="fa-solid fa-user-gear fa-xl"></i>
                                </div>
                            </span>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-list-item-title> <router-link to="/panier">Mon panier</router-link></v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title> <router-link to="/mescommandes">Mes commandes</router-link></v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title @click="deconnecter"> <a href="#">Déconnexion</a></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </v-col>
        </div>
        <v-row class="menu_milieu">
            <router-link to="/rosiers">Rosiers</router-link>
            <router-link to="/tulipes">Tulipes </router-link>
            <router-link to="/fruits">Arbres fruitiers</router-link>
            <router-link to="/potager">Le potager</router-link>
            <router-link to="/materiel">Matériel de jardinage</router-link>
            <router-link to="/soins">Soins de jardin</router-link>
        </v-row>
    </div>
</template>
    

<script src="./Navbar.js"></script>

<style src="./Navbar.css"></style>
