<template>
    <div>
        <nav class="navbar navbar-expand-md" style="background-color: #e09c6c;">
            <router-link to="/" class="navbar-brand"><v-img src="../../../public/images/logo.png" style="max-width:50%"></v-img></router-link>
            
            <div class="collapse navbar-collapse justify-content-between" id="menu">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/gestionutilisateurs" class="nav-link">Gestion utilisateurs</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/gestionproduits" class="nav-link">Gestion Produits</router-link>
                    </li>
                    <li class="nav-item">
                        <i class="fa-solid fa-bell"></i>
                            Notifications
                    </li>
                    <li class="nav-item dropdown">
                        <router-link v-if="!isLoggedIn" to="/connexion" class="nav-link"> <i
                                class="fa-solid fa-user fa-2xl"></i>Compte</router-link>
                            
                        <div v-else-if="isLoggedIn" class="nav-link" data-toggle="dropdown">
                            <span class="d-flex">
                                <div class="user-full-name text-center">{{ user.pseudo }}</div>
                                <div dark class="btn-icon">
                                    <i class="fa-solid fa-user-gear fa-xl"></i>
                                </div>
                            </span>
                            <div class="dropdown-menu">
                                <span @click="deconnecter"> <a href="#">Déconnexion</a></span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
    

<script src="./NavbarAdmin.js"></script>

<style src="./NavbarAdmin.css"></style>
