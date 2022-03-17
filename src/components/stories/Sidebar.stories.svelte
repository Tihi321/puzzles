<script>
  import { rangeMap } from "tsl-utils";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ThemeContainer from "../ThemeContainer.svelte";
  import Sidebar from "../Sidebar.svelte";
  import Menu from "../Menu.svelte";

  const menuItems = rangeMap(6, (index) => ({
    id: index,
    value: `Item ${index}`,
  }));
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Sidebar"
  component={Sidebar}
  argTypes={{
    open: { defaultValue: true, control: "boolean" },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <ThemeContainer>
    <Sidebar {...args}>
      <Menu items={menuItems} />
    </Sidebar>
  </ThemeContainer>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Default" />
