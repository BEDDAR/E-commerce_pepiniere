<template>
    <div>
        <header class="sticky">
            <NavbarAdmin style="background-color: white;" class="pl-10 pr-10 pb-5" />
            <div style="background-color: white;">
                <p class="text-center titre-decoration-panier"> Gestion des produits</p>
                <hr>
            </div>
        </header>
        <div class="d-flex justify-space-around">

            <v-card hover width="700">
                <p class="text-center"><strong>Ajouter un produit</strong></p>
             <v-container>
            <v-row>
                <v-col cols="8" >
                    <v-text-field v-model="nom" filled color="blue-grey" label="Nom"
                        :rules="[v => !!v || 'Champ requis']"></v-text-field>
                </v-col>
                <v-col cols="8">
                    <v-text-field v-model="prix" filled color="blue-grey"
                        label="Prix" :rules="[v => !!v || 'Champ requis']"></v-text-field>
                </v-col>
                <v-col cols="8">
                    <v-text-field v-model="stock" filled color="blue-grey"
                        label="Stock" :rules="[v => !!v || 'Champ requis']"></v-text-field>
                </v-col>
                <v-col cols="8">
                    <v-select :items="items" density="compact" label="Catégorie" v-model="categorie" ></v-select>
                </v-col>
                <v-col cols="8">
                    <v-textarea v-model="descriptionCourte" outlined color="blue-grey" label="Description courte"></v-textarea>
                </v-col>
                <v-col cols="8">
                    <v-textarea v-model="descriptionComplete" outlined color="blue-grey" label="Description complète"></v-textarea>
                </v-col>
                
            </v-row>
        </v-container>
    <v-card-actions>
        <v-btn class="mt-10" color="blue-grey" @click.prevent="addproduit">
            Ajouter
        </v-btn>
    </v-card-actions>
</v-card>

<v-card hover width="700">

   <p class="text-center"><strong>Supprimer ou mettre à jour un produit</strong></p>
    <v-container>
            <v-row>
                <v-col cols="8">
                    <v-select :items="identifiants" density="compact" label="Identifiant" ></v-select>
                </v-col>
                <v-col cols="8" >
                    <v-text-field v-model="last_name" filled color="blue-grey" label="Nom"
                        :rules="[v => !!v || 'Champ requis']"></v-text-field>
                </v-col>
                <v-col cols="8">
                    <v-text-field v-model="pseudo" filled color="blue-grey"
                        label="Prix" :rules="[v => !!v || 'Champ requis']"></v-text-field>
                </v-col>
                <v-col cols="8">
                    <v-text-field v-model="email" filled color="blue-grey"
                        label="Stock" :rules="[v => !!v || 'Champ requis']"></v-text-field>
                </v-col>
                <v-col cols="8">
                    <v-select :items="items" density="compact" label="Catégorie" ></v-select>
                </v-col>
                <v-col cols="8">
                    <v-textarea outlined color="blue-grey" label="Description courte"></v-textarea>
                </v-col>
                <v-col cols="8">
                    <v-textarea outlined color="blue-grey" label="Description complète"></v-textarea>
                </v-col>
                
            </v-row>
        </v-container>
    <v-card-actions>
        <v-btn class="mt-10" color="blue-grey" @click.prevent="submitFormulaire">
            Mettre à jour
        </v-btn>
        <v-btn class="mt-10" color="blue-grey" @click.prevent="submitFormulaire">
            Supprimer
        </v-btn>
    </v-card-actions>
</v-card>
        </div>


    </div>
</template>

<script src="./GestionProduits"></script>
<style src="./GestionProduits.css"></style>