<script>
  import currentScreen from '../../stores/currentScreen.js';
  export let id;
</script>

{ #if $currentScreen === id }
 <slot></slot>
{ /if }