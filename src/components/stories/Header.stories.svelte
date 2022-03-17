<script>
  import ThemeContainer from "../ThemeContainer.svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Header from "../Header.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Header"
  component={Header}
  argTypes={{
    title: { defaultValue: "Sudoku", control: "text" },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <ThemeContainer>
    <Header {...args} />
  </ThemeContainer>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Default" />
