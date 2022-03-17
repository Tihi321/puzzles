<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { TMenuItems } from "../types";
  export let items: TMenuItems = [];

  const dispatch = createEventDispatcher();

  const onClick = (item) => {
    dispatch("click", item);
  };
</script>

<div class="container">
  <div class="text title">Puzzles</div>
  <ul class="menu">
    {#each items as item}
      <li class="text menu-item" on:click={() => onClick(item)}>
        {item.value}
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  @import "src/styles/all";
  .text {
    display: block;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.75px;
    line-height: 14px;
    width: 100%;
    padding: 9px 16px;
    box-sizing: border-box;
  }

  .title {
    text-transform: uppercase;
    cursor: default;
  }

  .menu {
    margin: 10px 0;
  }

  .menu-item {
    cursor: pointer;
    text-transform: capitalize;
    &:hover {
      background-color: $menu-item-hover-bg;
    }
  }
</style>
