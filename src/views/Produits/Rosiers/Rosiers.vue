<template>
    <div>
        <span class="sticky">
            <Navbar style="background-color: white;" class="pl-10 pr-10 pb-5" />
            <h1 class="text-center titre-decoration">Rosiers</h1>
            <hr>
        </span>
        <v-Container class="d-flex">
            <v-col cols="3">
                <v-card width="200" hover style="position: fixed;">
                    <P>&nbsp; &nbsp; Filtres</P>
                    <v-radio-group v-model="filtre">
                        <v-radio color="#c13a0d" label="Prix" value="prix" @click="`one`" Checked></v-radio>
                        <v-radio color="#c13a0d" label="Note" value="note" @click="`two`"></v-radio>
                    </v-radio-group>
                </v-card>
            </v-col>
            <v-col cols="6">

                <div class="display-articles" v-for="(rosier, i) in allRosiers" :key="i">

                    <v-card hover width="500">
                        <div class="text-center">
                            <router-link :to="`/article/` + rosier.id">
                                <h3>{{ rosier.nom }} </h3>
                            </router-link>
                        </div>
                        <span class="d-flex justify-space-around align-center" :title="rosier.descriptionCourte">
                            <v-img class="image-size"
                                :src="`data:image/jpg;base64,${generateImageFromBuffer(rosier.imageProduit)}`" />
                            <span class="d-flex flex-column">
                                <h4>{{ rosier.prix }}<strong>&nbsp;€</strong></h4>
                                <br>
                                <span class="d-flex">
                                    <span title="Ajouter au panier">
                                        <v-btn @click="ajoutAuPanier(rosier)" outlined><i
                                                class="fa-solid fa-cart-plus fa-xl"></i></v-btn>
                                    </span>
                                    <span>
                                        <CustomInput title="Quantité" class="ml-5" v-model="quantite" :max="rosier.stock" />
                                    </span>

                                </span>
                            </span>

                        </span>
                        <span class="d-flex align-self-end mb-2">
                            <v-rating readonly :length="5" :size="20" v-model="rosier.note" color="yellow accent-4" dense
                                half-increments></v-rating>
                        </span>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="3">
                <v-card hover width="500" style="position: fixed;">
                    <ul>
                        <li><strong> Nom scientifique </strong>: Rosa</li>
                        <li><strong>Famille</strong> : Rosaceae</li>
                        <li><strong>Variétés</strong> : Rosa gallica, Rosa moschata, Rosa chinensis, Rosa centifolia, Rosa
                            gigantea</li>
                        <li><strong>Couleur des fleurs</strong> : Fleurs blanches, Fleurs jaunes, Fleurs orange, Fleurs
                            roses, Fleurs rouges</li>
                        <li><strong>Plantation</strong> : Plantation en septembre, Plantation en octobre</li>
                        <li><strong>Exposition</strong> : Soleil, Mi-ombre</li>
                        <li><strong>Type de sol</strong> : Ordinaire, Argileux</li>
                        <li><strong>Utilisation</strong> : En massif, Dans une haie, Isolé, En pot, En bac, Sur une tonnelle
                        </li>
                        <li><strong>Floraison</strong> : Floraison en avril, Floraison en mai, Floraison en juin, Floraison
                            en juillet, Floraison en août, Floraison en septembre, Floraison en octobre</li>
                        <li><strong>Feuillage</strong> : </li>
                        <li><strong>Maladies, animaux nuisibles</strong> : Araignées rouges, Chlorose, Pucerons</li>
                        <li><strong>Arrosage</strong> : Modéré</li>
                        <li><strong>Longévité</strong> : Vivace</li>
                        <li><strong>Hauteur</strong> : 50 cm - 10 m</li>
                        <li><strong>Symbolique</strong> : La rose symbolise l'amour, La passion (rose rouge), La joie (rose
                            rose), Le désir (rose orange) et la pureté (rose blanche), Trahison (rose jaune).</li>
                        <li><strong>Vertus médicinales</strong> : Plante émolliente</li>
                    </ul>
                </v-card>
            </v-col>
        </v-Container>
    </div>
</template>

<script src="./Rosiers.js"></script>
<style src="./Rosiers.css"></style>