<div>
  <slot />
</div>

<style lang="scss">
  @import "src/styles/all";
  :global {
    body {
      @extend %default-body;
      @extend %scrollbar;
    }

    ul {
      @extend %reset-list;
    }

    button {
      @extend %reset-button;
    }
  }
</style>
