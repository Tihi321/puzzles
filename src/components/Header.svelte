<script lang="ts">
  import Hamburger from "./Hamburger.svelte";
  import Logo from "./Logo.svelte";
  export let title: string;
  export let open: boolean;
</script>

<div class="header">
  <Hamburger on:click {open} />
  <div class="logo"><Logo /></div>
  <div class="divider" />
  <div class="game-title">{title}</div>
</div>

<style lang="scss">
  @import "src/styles/all";
  .header {
    position: relative;
    color: $font-color;
    background-color: $bg-color;
    display: flex;
    align-items: flex-end;
    padding: 2px 5px;
    border-bottom: 1px solid $header-border-color;
  }

  .divider {
    height: 45px;
    width: 1px;
    margin: 0 5px;
    background-color: $header-divider-color;
  }

  .logo {
    padding: 5px 0;
    height: 35px;
    display: flex;
  }

  .game-title {
    font-size: $normal-font-size;
    font-weight: bold;
    text-transform: capitalize;
  }
</style>
