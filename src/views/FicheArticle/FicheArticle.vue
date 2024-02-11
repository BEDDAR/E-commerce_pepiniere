<template>
    <div>
        <span class="sticky">
            <Navbar style="background-color: white;" class="pl-10 pr-10 pb-15" />
            <hr>
        </span>
        <br>

        <div class="d-flex div1 justify-center">
            <v-card>
                <v-img class="image-size-article"
                    :src="`data:image/jpg;base64,${generateImageFromBuffer(article.imageProduit)}`" />
            </v-card>
            <v-card widt="479" class="pl-10 d-flex flex-column justify-space-between">
                <h1 class="titre-decoration-article ">{{ article.nom }}</h1>
                <hr>
                <span class="d-flex justify-space-between">

                    <span class="d-flex">
                        <h4>Prix :</h4> &nbsp;<p style="color: #CA7B42;"> {{ article.prix }}<strong>&nbsp;€</strong></p>
                        <span title="Ajouter au panier">
                            <v-btn @click="ajoutAuPanier(article)" outlined class="ml-4">
                                <i class="fa-solid fa-cart-plus fa-xl"></i></v-btn>
                        </span>
                        <span>
                            <CustomInput title="Quantité" class="ml-5" v-model="quantite" :max="article.stock" />
                        </span>
                    </span>

                    <span class="d-flex">
                        <v-rating color="yellow accent-4" dense readonly :length="5" :size="20" v-model="article.note"
                            half-increments></v-rating>
                        <p><a href="#avis">(Avis)</a></p>
                    </span>
                </span>
                <hr>
                <template>
                    <v-card class="description-courte">
                        <v-card-text>
                            <p> {{ article.descriptionCourte }}</p>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn text color="teal accent-4" @click="reveal = true">
                                Plus
                            </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal">
                                <v-card-text class="pb-0">
                                    {{ article.descriptionCourte }}
                                </v-card-text>
                                <v-card-actions class="pt-0">
                                    <v-btn text color="teal accent-4" @click="reveal = false">
                                        Moins
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-expand-transition>

                    </v-card>
                </template>
            </v-card>
        </div>
        <div class="mt-10">
            <v-card v-if="article.descriptionComplete" class="mx-auto" max-width="1300">
                <v-card-text>
                    <p style="background: #6fd497;border-radius: 10px;" class="text-h4 text--primary">
                        Description
                    </p>
                    <div class="text--primary">
                        <p>{{ article.descriptionComplete }}</p>
                    </div>
                </v-card-text>
            </v-card>
        </div>
        <div class="mt-10">
            <v-card class="mx-auto" max-width="1300">
                <v-card-text>
                    <p style="background: #6fd497;border-radius: 10px;" class="text-h4 text--primary">
                        <a name="avis"></a>
                        Avis
                    </p>

                    <div v-for="(item, i) in avis" :key="i">
                        <span class="d-flex">
                            <span>
                                <v-rating color="yellow accent-4" dense readonly :length="5" :size="20" v-model="item.note"
                                    half-increments></v-rating>
                                {{ item.date }}
                            </span>
                            <div v-if="item.avis" class="text-wrap">{{ item.avis }}</div>
                        </span>
                        <br>
                        <hr>
                    </div>
                    <div v-if="isLoggedIn">
                        <v-btn @click="ajouterCommentaire = true">Ajouter un commentaire</v-btn>
                        <br>
                        <v-expand-transition>
                            <div v-if="ajouterCommentaire">
                                <v-card height="150">
                                    <v-form>
                                        <v-rating color="yellow accent-4" dense :length="5" :size="20" v-model="note"
                                            half-increments></v-rating>
                                        <br>
                                        <v-textarea rows="3" row-height="25" outlined color="blue-grey" label="Avis"
                                            v-model="commentaire"></v-textarea>
                                    </v-form>
                                </v-card>
                                <br>
                                <v-btn @click="ajouterAvis(article.id)" class="m-15">Soumettre</v-btn>
                            </div>
                        </v-expand-transition>
                    </div>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script src="./FicheArticle.js"></script>
<style src="./FicheArticle.css"></style>