<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ThemeContainer from "../ThemeContainer.svelte";
  import Hamburger from "../Hamburger.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Hamburger"
  component={Hamburger}
  argTypes={{
    open: { defaultValue: false, control: "boolean" },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <ThemeContainer>
    <Hamburger {...args} />
  </ThemeContainer>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Default" />
