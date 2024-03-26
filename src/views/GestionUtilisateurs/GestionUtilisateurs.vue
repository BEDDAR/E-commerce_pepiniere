<template>
    <div v-if="user.role=='Admin' && isLoggedIn">
        <header class="sticky">
            <NavbarAdmin style="background-color: white;" class="pl-10 pr-10 pb-5" />
            <div style="background-color: white;">
                <p class="text-center titre-decoration-panier"> Gestion utlisateurs</p>
                <hr>
            </div>
        </header>

    </div>
</template>

<script src="./GestionUtilisateurs.js"></script>
<style src="./GestionUtilisateurs.css"></style>