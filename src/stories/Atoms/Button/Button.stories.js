import MyButton from "./Button.vue";

export default {
  title: "Atoms/Button",
  component: MyButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

