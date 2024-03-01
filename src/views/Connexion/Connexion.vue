<template>
    <div>
        <span style="background-color: white;" class="sticky">
        <Navbar class="pl-10 pr-10 pb-10" />
        <h1 class="text-center texte-decoration">Connexion</h1>
            <br>
            <hr>
            <br>
    </span>
        <v-card hover>
            <span class="d-flex flex-wrap espacer-cards">
                <v-card class="pa-12 pb-8" width="500" rounded="lg" hover>
                    Déjà inscrit ?
                    <form @submit.prevent="login">
                        <v-text-field density="compact" placeholder="Adresse email" prepend-inner-icon="mdi-email-outline"
                            variant="outlined" color="#D6A300" v-model="email"></v-text-field>

                        <v-text-field :type="inVisible ? 'password' : 'text'" density="compact" placeholder="Mot de passe"
                            :prepend-inner-icon="inVisible ? 'mdi-eye' : 'mdi-eye-off'" variant="outlined"
                            @click:prepend-inner="inVisible = !inVisible" color="#D6A300"
                            v-model="password"></v-text-field>
                        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer"
                            target="_blank">
                            Mot de passe oublié ?</a>

                        <v-btn type="submit" block class="mb-8" size="large" variant="tonal" color="#D6A300">
                            Connexion
                        </v-btn>
                    </form>
                </v-card>

                <v-card class="pa-12 pb-8" width="500" rounded="lg" hover>
                    Créer un compte
                    <v-form @submit.prevent="versEnregistrement">
                        <v-text-field density="compact" placeholder="Adresse email" prepend-inner-icon="mdi-email-outline"
                            variant="outlined" v-model="newEmail" color="#D6A300"></v-text-field>

                        <v-btn type="submit" block class="mb-8" size="large" variant="tonal" color="#D6A300">
                            Créer un compte
                        </v-btn>
                    </v-form>
                </v-card>
            </span>
            <br>
            <br>
        </v-card>
    </div>
</template>

<script src="./Connexion.js"></script>

<style src="./Connexion.css"></style>