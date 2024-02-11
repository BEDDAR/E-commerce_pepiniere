<template>
    <div>
        <span class="sticky">
        <Navbar style="background-color: white;" class="pl-10 pr-10 pb-5" />
        <h1 class="text-center titre-decoration-Potager">Le Potager</h1>
        <hr>
        </span>
        <v-Container class="d-flex">
            <v-col cols="4">
                <v-card hover width="200" style="position: fixed;">
                    <P>&nbsp; &nbsp; Filtres</P>
                    <v-radio-group v-model="filtre">
                        <v-radio color="#218229" label="Prix" value="prix" @click="`one`" Checked></v-radio>
                        <v-radio color="#218229" label="Note" value="note" @click="`two`"></v-radio>
                    </v-radio-group>
                </v-card>
            </v-col>
            <v-col cols="7">

                <div class="display-articles" v-for="(potager, i) in allPotager" :key="i">
                    
                        <v-card hover width="500">
                            <div class="text-center">
                                <router-link :to="`/article/` + potager.id"><h3>{{ potager.nom }} </h3></router-link>
                            </div>
                            <span class="d-flex justify-space-around align-center" :title="potager.descriptionCourte">
                                <v-img class="image-size"
                                    :src="`data:image/jpg;base64,${generateImageFromBuffer(potager.imageProduit)}`" />
                                <span class="d-flex flex-column">
                                    <h4>{{ potager.prix }}<strong>&nbsp;€</strong></h4>
                                    <br>
                                    <span class="d-flex">
                                        <span title="Ajouter au panier">
                                            <v-btn @click="ajoutAuPanier(potager)" outlined><i
                                                    class="fa-solid fa-cart-plus fa-xl"></i></v-btn>
                                        </span>
                                        <span>
                                        <CustomInput title="Quantité" class="ml-5" v-model="quantite" :max="potager.stock" />
                                    </span>

                                    </span>
                                </span>

                            </span>
                            <span class="d-flex align-self-end mb-2">
                                <v-rating readonly :length="5" :size="20" v-model="potager.note"
                                color="yellow accent-4" dense half-increments></v-rating>
                            </span>
                        </v-card>
                </div>
            </v-col>
            <v-col cols="4">
               
            </v-col>
        </v-Container>
    </div>
</template>

<script src="./Potager.js"></script>
<style src="./Potager.css"></style>