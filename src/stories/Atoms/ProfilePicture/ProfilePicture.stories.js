import ProfilePicture from './ProfilePicture.vue';

export default {
    title: "Atoms/ProfilePicture",
    component: ProfilePicture
};

const Template = (args) => ({
    components: { ProfilePicture },
    setup() {
      return { args };
    },
    template: '<ProfilePicture v-bind="args"/>',
});


export const Default = Template.bind({});
Default.args = {
    image: 'https://res.cloudinary.com/weigelcinthya/image/upload/v1658183370/ross-parmly-rf6ywHVkrlY-unsplash_jfoneh.jpg'
}