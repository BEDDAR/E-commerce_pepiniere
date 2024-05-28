<template>
	<div class="not-found">
		<h1>Erreur 404 - Page non trouvée</h1>
		<p>Désolé, la page que vous recherchez est introuvable.</p>
		<router-link to="/">Retour à la page d'accueil</router-link>
	</div>
</template>

<script>
export default {
	name: 'NotFound'
}
</script>

<style scoped>
.not-found {
	text-align: center;
	margin-top: 50px;
}
</style>