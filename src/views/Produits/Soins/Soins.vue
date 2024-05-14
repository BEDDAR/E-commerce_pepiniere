<template>
    <div>
        <span class="sticky">
            <Navbar style="background-color: white;" class="pl-10 pr-10 pb-5" />
            <h1 class="text-center titre-decoration-Soins">Soins De Jardin</h1>
            <hr>
        </span>
        <v-Container class="d-flex">
            <v-col cols="4">
                <v-card hover width="200" style="position: fixed;">
                    <P>&nbsp; &nbsp; Filtres</P>
                    <v-radio-group v-model="filtre">
                        <v-radio color="#7a2888" label="Prix" value="prix" @click="`one`" Checked
                            class="ml-3"></v-radio>
                        <v-radio color="#7a2888" label="Note" value="note" @click="`two`" class="ml-3"></v-radio>
                    </v-radio-group>
                </v-card>
            </v-col>
            <v-col cols="7">

                <div class="display-articles" v-for="(soin, i) in allSoins" :key="i">

                    <v-card hover width="500">
                        <div class="text-center">
                            <router-link :to="`/article/` + soin.id">
                                <h3>{{ soin.nom }} </h3>
                            </router-link>
                        </div>
                        <span class="d-flex justify-space-around align-center" :title="soin.descriptionCourte">
                            <span class="d-flex flex-column align-center">
                                <v-img class="image-size"
                                    :src="`data:image/jpg;base64,${generateImageFromBuffer(soin.imageProduit)}`" />
                                <v-rating readonly :length="5" :size="20" v-model="soin.note" color="yellow accent-4"
                                    dense half-increments></v-rating>
                            </span>
                            <span class="d-flex flex-column">
                                <h4>{{ soin.prix }}<strong>&nbsp;€</strong></h4>
                                <br>
                                <span class="d-flex">
                                    <span title="Ajouter au panier">
                                        <v-btn @click="ajoutAuPanier(soin)" outlined><i
                                                class="fa-solid fa-cart-plus fa-xl"></i></v-btn>
                                    </span>
                                    <span>
                                        <CustomInput title="Quantité" class="ml-5" v-model="quantite"
                                            :max="soin.stock" />
                                    </span>

                                </span>
                            </span>

                        </span>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="4">

            </v-col>
        </v-Container>
    </div>
</template>

<script src="./Soins.js"></script>
<style src="./Soins.css"></style>