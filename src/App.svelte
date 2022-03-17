<script lang="ts">
  import map from "lodash/map";
  import get from "lodash/get";
  import { onMount } from "svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import Header from "./components/Header.svelte";
  import Menu from "./components/Menu.svelte";
  import ThemeContainer from "./components/ThemeContainer.svelte";
  import { EGames } from "./constants";
  import { useApi } from "./hooks";

  const { api, setApiEndpoint, setApiSearchEndpoint } = useApi();
  let sidebarOpen: boolean = false;

  $: menuItems = map(Object.values(EGames), (value) => ({
    id: value,
    value,
  }));

  onMount(() => {
    const name = get(location, ["search"], "").substring(1);
    setApiSearchEndpoint(name);
  });

  const onMenuItemClick = (event) => {
    event.stopPropagation();
    const name = get(event, ["detail", "id"], "");
    setApiEndpoint(name, $api.endpoint);
    sidebarOpen = false;
  };
</script>

<ThemeContainer>
  <main>
    <Header title={$api.name} on:click={() => (sidebarOpen = !sidebarOpen)} open={sidebarOpen} />
    <div class="sidebar" class:open={sidebarOpen} on:click={() => (sidebarOpen = false)}>
      <Sidebar open={sidebarOpen}><Menu items={menuItems} on:click={onMenuItemClick} /></Sidebar>
    </div>
    <iframe class="content" title={$api.name} width="300" height="200" src={$api.endpoint} />
  </main>
</ThemeContainer>

<style lang="scss">
  @import "src/styles/all";

  main {
    position: relative;
  }

  .sidebar {
    position: absolute;
    height: calc(100vh - 50px);
    width: 100%;
    pointer-events: none;
    background-color: transparent;
    transition: background-color 0.3s ease;

    &.open {
      pointer-events: all;
      background-color: $sidebar-backdrop-color;
    }
  }

  .content {
    width: 100%;
    height: calc(100vh - 55px);
    border: 0;
  }
</style>
