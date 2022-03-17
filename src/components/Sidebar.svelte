<script lang="ts">
  export let open: boolean = false;
</script>

<div class="sidebar" class:open>
  <slot />
</div>

<style lang="scss">
  @import "src/styles/all";
  .sidebar {
    background-color: $bg-color;
    padding: 10px 0;
    height: 100%;
    width: 200px;
    transition: transform 0.3s ease;
    transform: translateX(-100%);
  }

  .open {
    transform: translateX(0);
  }
</style>
