<template>
    <div>
        <span class="sticky">
            <Navbar style="background-color: white;" class="pl-10 pr-10 pb-5" />
            <div style="background-color: white;">
                <p class="text-center titre-decoration-panier"> Mes Commandes</p>
                <hr>
            </div>
        </span>
        <v-container>
            <v-row>
                <v-col cols="4">
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
                <v-col cols="2" class="d-flex align-center justify-center">
                    <strong>Date</strong>
                </v-col>
            </v-row>
            <v-row v-for="(commande, i) in commandes" :key=i>
                <v-col cols="4">
                    <router-link :to="`/article/` + commande.id_produit">
                        <span class="d-flex align-center">
                            <v-img class="image-produit-resize"
                                :src="`data:image/jpg;base64,${generateImageFromBuffer(commande.imageProduit)}`" />
                            &nbsp;&nbsp;
                            {{ commande.nomProduit }}
                        </span>
                    </router-link>
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-center">
                    {{ commande.prix }}
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-center">
                    {{ commande.quantite }}
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-center">
                    {{ commande.total }}
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-center">
                    {{ commande.date }}
                </v-col>
            </v-row>
        </v-container>



    </div>
</template>
<script src="./Commandes.js"></script>
<style src="./Commandes.css"></style>