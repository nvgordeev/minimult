<script>
	import Archive from './components/screens/Archive.svelte';
	import Registration from './components/screens/Registration.svelte';
	import Main from './components/screens/Main.svelte';
	import Result from './components/screens/Result.svelte';
	import Survey from './components/screens/Survey.svelte';

	import Screen from './components/common/Screen.svelte';

	import SCREENS from './constants/screens.js'
</script>

<style>
</style>

<header>
  <h1> Система психологического тестирования </h1>
</header>

<main>
	<Screen id={ SCREENS.ROOT }>
		<Main/>
	</Screen>
	<Screen id={ SCREENS.REGISTRATION }>
		<Registration/>
	</Screen>
	<Screen id={ SCREENS.SURVEY }>
		<Survey/>
	</Screen>
	<Screen id={ SCREENS.RESULT }>
		<Result/>
	</Screen>
	<Screen id={ SCREENS.ARCHIVE }>
		<Archive/>
	</Screen>
</main>