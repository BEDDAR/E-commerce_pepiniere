<template>
    <div>
        <span style="background-color: white;" class="sticky">
            <Navbar class="pl-10 pr-10 pb-15" />
            <h1 class="text-center texte-deco">Contact</h1>
        </span>
        <div>

            <span class="centrer-verticalement">
                <v-card color="purple" dark width="1000" height="500">

                    <v-img height="200" src="../../../public/images/6.jpg"></v-img>

                    <span class="centrer-verticalement">
                        <v-form>
                            <v-text-field class="mt-10" width="500" outlined filled color="blue-grey"
                                label="Adresse email" :rules="[v => !!v || 'Champ requis']"></v-text-field>

                            <v-textarea class="resize" outlined color="blue-grey" label="Message"></v-textarea>
                        </v-form>
                    </span>
                </v-card>
                <v-btn class="justify-end" color="blue-grey" @click.prevent="envoyerMessage">
                    Envoyer
                </v-btn>
            </span>
        </div>
    </div>
</template>

<script src="./Contact.js"></script>

<style src="./Contact.css"></style>