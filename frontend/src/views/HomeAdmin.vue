<template>
    <div v-if="user.role=='Admin' && isLoggedIn">
        <header><NavbarAdmin /></header>
        
       <p>Accueil Admin</p> 

    </div>
</template>

<script>

import NavbarAdmin from '@/components/NavbarAdmin/NavbarAdmin.vue'
import { getUser, isLoggedIn } from '@/services/ConnexionService'

export default {
    name:'HomeAdmin',
    components:{NavbarAdmin},
    data() {
        return {
            user: "",
            isLoggedIn: "",
        }
    },
    created() {
        this.user = getUser()
        this.isLoggedIn = isLoggedIn()
    },
}
</script>