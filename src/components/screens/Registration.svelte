<script>
  import survey from '../../stores/survey.js';
  import currentScreen from '../../stores/currentScreen.js';
  import SCREENS from '../../constants/screens.js';
  import { onMount } from 'svelte';

  let name = '';
  let date = "";
  let gender = "";

  function onSavePerson() {
    survey.init();
    survey.setPerson({ name, date, gender });
    currentScreen.change(SCREENS.SURVEY);
  }

  function onCancel() {
    currentScreen.change(SCREENS.ROOT);
  }
</script>

<form on:submit={onSavePerson }>

  <label for="name">ФИО</label>
  <input bind:value={ name } type="text" id="name" required>

  <label for="date">Дата рождения</label>
  <input bind:value={ date } type="date" id="date" required>

  <label for="gender">Пол</label>
  <select id="gender" bind:value={ gender } required>
    <option value=""> ---- </option>
    <option value="m">Мужской</option>
    <option value="f">Женский</option>
  </select>

  <div>
    <button type="submit"> Сохранить и продолжить </button> 
    <button type="cancel" on:click={ onCancel }>Отмена </button> 
  </div>

</form>