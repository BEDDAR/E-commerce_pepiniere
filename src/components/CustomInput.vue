<template>
    <div>
        <!-- Bouton d'incrémentation -->
        <i class="fa-solid fa-plus" @click="increment" :style="[(this.num === this.max) && { 'display': 'none' }]"></i>
        <!-- Champ d'entrée de quantité -->
        <input class="input-quantite" placeholder="Quantité" v-model="num" :max="max" readonly />
        <!-- Bouton de décrémentation -->
        <i class="fa-solid fa-minus" @click="decrement" :style="[(this.num === 0) && { 'display': 'none' }]"></i>
    </div>
</template>

<script>
export default ({
    name: 'CustomInput',
    props: {
        value: Number, // Propriété pour stocker la valeur de la quantité
        max: Number // Propriété pour stocker la valeur maximale de la quantité
    },
    data() {
        return {
            num: Number(this.value), // Initialisation de la quantité avec la valeur passée en prop
        }
    },
    methods: {
        // Méthode pour incrémenter la quantité
        increment() {
            // Vérifie si la quantité est inférieure à la valeur maximale
            if (this.num < this.max) {
                this.num++ // Incrémente la quantité
                this.$emit('input', this.num) // Émet un événement avec la nouvelle quantité
                console.log(this.num) // Affiche la nouvelle quantité dans la console
            }
        },
        // Méthode pour décrémenter la quantité
        decrement() {
            // Vérifie si la quantité est supérieure à zéro
            if (this.num > 0) {
                this.num-- // Décrémente la quantité
                this.$emit('input', this.num) // Émet un événement avec la nouvelle quantité
            }
        },
    }
})
</script>

<style>
.input-quantite {
    border: 1px solid black;
    border-radius: 5px;
    width: 55px;
    outline: none;
    line-height: 35px;
    text-align: center;
}
</style>
