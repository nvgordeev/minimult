<script>
  export let to = '';
  import currentScreen from '../../stores/currentScreen.js';
</script>

<style>
  .Link {
    cursor: pointer;
  }
</style>

<div class="Link" on:click={() => currentScreen.change(to)}>
  <slot></slot>
</div>