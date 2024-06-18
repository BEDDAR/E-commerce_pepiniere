<template>
    <div>
        <!--Ajouter la classe sticky pour la Navbar et les titre de la page pour 
            que cette partie soit fixé en haut lors du défilement de la page -->
        <span class="sticky">
            <Navbar style="background-color: white;" class="pl-10 pr-10 pb-5" />
            <div style="background-color: white;">
                <p class="text-center titre-decoration-panier"> Mon Panier</p>
                <hr>
            </div>
        </span>
        <!--Mettre en place un tableau qui va contenir les information des produits ajoutés au panier-->
        <v-container>
            <!--Début de header du tableau-->
            <v-row>
                <v-col cols="5">
                    <strong>Produit</strong>
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-center">
                    <strong>Prix</strong>
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-center">
                    <strong>Quantité</strong>
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-center">
                    <strong>Total</strong>
                </v-col>
            </v-row>
            <!--fin de header du tableau-->
            <!--Parcourir le tableau getPanier pour afficher le contenu des produits qui sont dans ce tableau-->
            <v-row v-for="(element, i) in getPanier" :key="i">
                <v-col cols="5">
                    <!--ajouter un lien pour l'image et nom de produit, 
                    en cliquant sur ceci ça va nous ramener dans la fiche de produit-->
                    <router-link :to="`/article/` + element.produit.id">
                        <span class="d-flex align-center">
                            <!--générer une image à partir d'une chaîne encodée en base64-->
                            <!--generateImageFromBuffer() est une fonction qui génère une image encodée en base64-->
                            <v-img class="image-produit-resize"
                                :src="`data:image/jpg;base64,${generateImageFromBuffer(element.produit.imageProduit)}`" />
                            &nbsp;&nbsp;
                            {{ element.produit.nom }}
                        </span>
                    </router-link>
                </v-col>
                <v-col cols="2"><span class="align-text-center">{{ element.produit.prix
                }}<strong>&nbsp;€</strong></span></v-col>
                <v-col cols="2"><span class="align-text-center">
                    <!--La fonction increment sert à incrémenter la quantité de produit exactement par un-->
                        <i class="fa-solid fa-plus" @click="increment(element)"
                            :style="[(element.produit.stock === 0) && { 'display': 'none' }]"></i>

                        <input class="input-quantite" placeholder="Qantité" v-model="element.quantity" readonly />
                    <!--La fonction decrement sert à décrémenter la quantité de produit exactement par un-->
                        <i class="fa-solid fa-minus" @click="decrement(element)"
                            :style="[(element.quantity === 0) && { 'display': 'none' }]"></i>
                        &nbsp;
                        <!--La fonction deleteArticle sert à retirer l'article depanier-->
                        <i class="fa-regular fa-trash-can" title="Supprimer l'article" @click="deleteArticle(element)"></i>

                    </span>
                </v-col>
                <v-col cols="2"><span class="align-text-center">{{ element.total
                }}<strong>&nbsp;€</strong></span></v-col>
            </v-row>
            <v-row>
                <v-col cols="9"></v-col>
                <v-col cols="3"><span class="d-flex">
                    <!--Afficher le total de panier-->
                        <p>Total panier :</p>{{ getTotalPanier }}<strong>&nbsp;€</strong>
                    </span></v-col>

            </v-row>
            <v-row v-if="isLoggedIn">
                <v-col cols="9"></v-col>
                <v-col cols="3">
                        <v-btn color="#709b21" @click="validerPanier">Valider mon panier</v-btn>
                    </v-col>

            </v-row>

        </v-container>



    </div>
</template>
<script src="./Panier.js"></script>
<style src="./Panier.css"></style>