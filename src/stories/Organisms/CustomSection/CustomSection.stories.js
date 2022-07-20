import CustomSection from "./CustomSection.vue";

export default {
  title: "Organisms/CustomSection",
  component: CustomSection,
};

const Template = (args) => ({
  components: { CustomSection },
  setup() {
    return { args };
  },
  template: '<CustomSection v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
  title: "Section Title",
  subTitle: "The main reason is because our competitors have disgusting sites, but we can' t write that here, so the text here will be different",
  bgGrey: true,
};
