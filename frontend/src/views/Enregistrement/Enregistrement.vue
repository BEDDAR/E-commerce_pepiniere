<template>
    <div>
        <div style="background-color: white;" class="sticky">
            <Navbar class="pl-10 pr-10 pb-15" />
            <h1 class="text-center texte-deco">Inscription</h1>
        </div>

        <body>

            <div v-if="response === ''">

                <span class="centrer-verticalement">
                    <v-card color="purple" dark width="1400">

                        <v-img height="200" src="../../../public/images/6.jpg"></v-img>

                        <span class="centrer-verticalement">
                            <v-form style="margin-right: 50px;">
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <!--Vérifier si tous les champs ne sont pas vides-->
                                            <v-text-field class="mb-5 resize-input" v-model="last_name" filled
                                                color="blue-grey" label="Nom"
                                                :rules="[v => !!v || 'Champ requis']"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field class="mb-5 resize-input" v-model="first_name" filled
                                                color="blue-grey" label="Prénom"
                                                :rules="[v => !!v || 'Champ requis']"></v-text-field>
                                        </v-col>
                                        <v-col class="d-flex justify-center" cols="7">
                                            <v-text-field class="mb-5" v-model="pseudo" filled color="blue-grey"
                                                label="Pseudo" :rules="[v => !!v || 'Champ requis']"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <!--Vérifier si l'adresse mail est valide-->
                                            <v-text-field class="mb-5 resize-input" v-model="email" filled
                                                color="blue-grey" label="Adresse email"
                                                :rules="[v => !!v || 'Champ requis', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'L\'adresse e-mail doit être valide']"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <!--Vérifier si le numéro de téléphone est valide-->
                                            <v-text-field class="mb-5 resize-input" v-model="phone" filled
                                                color="blue-grey" label="Numéro de téléphone"
                                                :rules="[v => !!v || 'Champ requis']"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <!--Vérifier si le mot de passe est valide-->
                                            <v-text-field class="resize-input" v-model="password"
                                                :type="inVisible ? 'password' : 'text'" filled color="blue-grey"
                                                :prepend-inner-icon="inVisible ? 'mdi-eye' : 'mdi-eye-off'"
                                                label="Mot de passe"
                                                :rules="[v => !!v || 'Champ requis', v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v) || 'Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial (@ $ ! % * ? &).']"
                                                @click:prepend-inner="inVisible = !inVisible"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <!--Vérifier si le mot de passe de confirmation correspond au mot de passe-->
                                            <v-text-field class="resize-input" v-model="password_confirm"
                                                :type="inVisible2 ? 'password' : 'text'" filled color="blue-grey"
                                                :prepend-inner-icon="inVisible2 ? 'mdi-eye' : 'mdi-eye-off'"
                                                label="Confirmation mot de passe"
                                                :rules="[password_confirm == password ? [] : 'Les mots de passe ne correspondent pas', v => !!v || 'Champ requis']"
                                                @click:prepend-inner="inVisible2 = !inVisible2"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                            <v-card-actions>
                                <v-btn class="mt-10" color="blue-grey" @click.prevent="submitFormulaire">
                                    Inscription
                                </v-btn>
                            </v-card-actions>
                        </span>
                    </v-card>
                </span>
            </div>
            <div text-center v-if="this.response.Status === 'Success'">

                <p class="box b">Votre compte a bien été crée !</p>
            </div>

        </body>
    </div>
</template>

<script src="./Enregistrement.js"></script>

<style src="./Enregistrement.css"></style>