import Footer from './Footer.vue';

export default {
    title: "Organisms/Footer",
    component: Footer,
  };
  
  const Template = (args) => ({
    components: { Footer },
    setup() {
      return { args };
    },
    template: '<Footer v-bind="args"/>',
  });
  
  export const Default = Template.bind({});
  Default.args = {
    firstSection: {
        title: 'Title of section',
        pages: [
            {
                pageTitle: 'Page title',
                url: '#'
            },
            {
                pageTitle: 'Page title',
                url: '#'
            },
            {
                pageTitle: 'Page title',
                url: '#'
            }
        ]
    },
    secondSection: {
        title: 'Title of section',
        pages: [
            {
                pageTitle: 'Page title',
                url: '#'
            },
            {
                pageTitle: 'Page title',
                url: '#'
            },
            {
                pageTitle: 'Page title',
                url: '#'
            }
        ]
    },
    thirdSection: {
        title: 'Title of section',
        pages: [
            {
                pageTitle: 'Page title',
                url: '#'
            },
            {
                pageTitle: 'Page title',
                url: '#'
            },
            {
                pageTitle: 'Page title',
                url: '#'
            }
        ]
    },
    newsletter: {
        title: 'Subscribe to newsletter',
        inputLabel: 'Your email'
    },
    icons: [],
    logo: ''
  };
  