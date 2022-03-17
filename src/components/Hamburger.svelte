<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let open: boolean = false;

  const dispatch = createEventDispatcher();
  const onClick = () => {
    dispatch("click", !open);
  };
</script>

<button type="button" class="hamburger-container" on:click={onClick}
  ><span class="hamburger-box"><span class="hamburger-inner" class:open /></span></button
>

<style lang="scss">
  @import "src/styles/all";

  .hamburger-container {
    padding: 0;
    border: 0;
    margin: 0;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 45px;
    min-width: 45px;
  }

  .hamburger-box {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    width: 20px;
    height: 20px;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -1.5px;
    width: 20px;
    height: 3px;
    background-color: $hamburger-color;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.1s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &::before,
    &::after {
      width: 20px;
      height: 3px;
      background-color: $hamburger-color;
      border-radius: 4px;
      position: absolute;
      content: "";
      display: block;
    }

    &::before {
      transition: top 0.1s 0.14s ease, opacity 0.1s ease;
      top: -7px;
    }

    &::after {
      transition: bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      bottom: -7px;
    }

    &.open {
      transform: rotate(45deg);
      transition-delay: 0.14s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &::before {
        top: 0;
        opacity: 0;
        transition: top 0.1s ease, opacity 0.1s 0.14s ease;
      }

      &::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.1s ease, transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
</style>
