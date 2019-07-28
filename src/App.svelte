<script>
	import Archive from './components/screens/Archive.svelte';
	import Registration from './components/screens/Registration.svelte';
	import Main from './components/screens/Main.svelte';
	import Result from './components/screens/Result.svelte';
	import Survey from './components/screens/Survey.svelte';

	import Screen from './components/common/Screen.svelte';
	export let name;

	import screens from './constants/screens.js'


</script>

<style>
</style>

<header>
  <h1> Система психологического тестирования </h1>
</header>

<main>
	<Screen id={ screens.ROOT }>
		<Main/>
	</Screen>
	<Screen id={ screens.REGISTRATION }>
		<Registration/>
	</Screen>
	<Screen id={ screens.SURVEY }>
		<Survey/>
	</Screen>
	<Screen id={ screens.RESULT }>
		<Result/>
	</Screen>
	<Screen id={ screens.ARCHIVE }>
		<Archive/>
	</Screen>
</main>