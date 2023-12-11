<script>
import PageHeaderVue from "./components/PageHeader.vue"
import pageMainVue from "./components/pageMain.vue"
import pageFooter from "./components/pageFooter.vue"
import { store } from "./store.js" //state management

export default {
	components: {
		PageHeaderVue,
		pageMainVue,
		pageFooter
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.doThings();

		// axios.get("indirizzo").then(risultato => {
		// 	console.log(risultato);
		// }).catch(errore => {
		// 	console.error(errore);
		// });
	},
	methods: {
		doThings() {
			console.log("App.vue does things");
		}
	}
}
</script>

<template>
	<PageHeaderVue />
	<pageMainVue />
	<pageFooter />
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
</style>