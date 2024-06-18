<template>
    <div>
        <span class="sticky">
            <Navbar style="background-color: white;" class="pl-10 pr-10 pb-5" />
            <h1 class="text-center titre-decoration-tulipes">Tulipes</h1>
            <hr>
        </span>
        <v-Container class="d-flex">
            <v-col cols="3">
                <v-card width="200" hover style="position: fixed;">
                    <P>&nbsp; &nbsp; Filtres</P>
                    <v-radio-group v-model="filtre">
                        <v-radio color="#7a2888" label="Prix" value="prix" @click="`one`" class="ml-3"></v-radio>
                        <v-radio color="#7a2888" label="Note" value="note" @click="`two`" class="ml-3"></v-radio>
                    </v-radio-group>
                </v-card>
            </v-col>
            <v-col cols="6">
                <div class="display-articles" v-for="(tulipe, i) in allTulipes" :key="i">

                    <v-card hover width="500">
                        <router-link :to="{ name: 'article', params: { id: tulipe.id } }">
                            <div class="text-center">
                                <h3>{{ tulipe.nom }} </h3>
                            </div>
                        </router-link>
                        <span class="d-flex justify-space-around align-center" :title="tulipe.descriptionCourte">
                            <span class="d-flex flex-column align-center">
                                <v-img class="image-size"
                                    :src="`data:image/jpg;base64,${generateImageFromBuffer(tulipe.imageProduit)}`" />
                                <v-rating color="yellow accent-4" dense readonly :length="5" :size="18"
                                    v-model="tulipe.note" active-color="yellow-accent-4" half-increments></v-rating>
                            </span>
                            <span class="d-flex flex-column">
                                <h4>{{ tulipe.prix }}<strong>&nbsp;€</strong></h4>
                                <br>
                                <span class="d-flex">
                                    <span title="Ajouter au panier">
                                        <v-btn @click="ajoutAuPanier(tulipe)" outlined><i
                                                class="fa-solid fa-cart-plus fa-xl"></i></v-btn>
                                    </span>
                                    <span>
                                        <CustomInput title="Quantité" class="ml-5" v-model="quantite"
                                            :max="tulipe.stock" />
                                    </span>
                                </span>
                            </span>
                        </span>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="3">
                <v-card hover width="500" style="position: fixed;">
                    <ul>
                        <li><strong>Nom scientifique</strong> : Tulipa</li>
                        <li><strong>Famille</strong> : Liliaceae</li>
                        <li><strong>Variétés</strong> : Tulipa aximensis, Tulipa gesneriana, Tulipa kaufmanniana, Tulipa
                            viridiflora, Tulipa
                            sylvestris</li>
                        <li><strong>Couleur des fleurs</strong> : Fleurs blanches, Fleurs jaunes, Fleurs roses, Fleurs
                            rouges</li>
                        <li><strong>Plantation</strong> : Plantation en septembre, Plantation en octobre, Plantation en
                            novembre</li>
                        <li><strong>Exposition</strong> : Soleil, Mi-ombre</li>
                        <li><strong>Type de sol</strong> : Bien drainé, Léger, Sableux</li>
                        <li><strong>Utilisation</strong> : En massif, En bordure, En rocaille, En jardinière</li>
                        <li><strong>Floraison</strong> : Floraison en mars, Floraison en avril, Floraison en mai</li>
                        <li><strong>Feuillage</strong> : Caduc</li>
                        <li><strong>Maladies, animaux nuisibles</strong> : Limaces</li>
                        <li><strong>Arrosage</strong> : Modéré</li>
                        <li><strong>Longévité</strong> : Bulbe</li>
                        <li><strong>Hauteur</strong> : 20-70 cm</li>
                        <li><strong>Symbolique</strong> : La tulipe est le symbole de la déclaration d'amour</li>
                        <li><strong>Vertus médicinales</strong> : Plante toxique en cas d'ingestion</li>
                    </ul>
                </v-card>
            </v-col>
        </v-Container>
    </div>
</template>


<script src="./Tulipes.js"></script>

<style src="./Tulipes.css"></style>