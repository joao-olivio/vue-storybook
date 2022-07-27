import Hero from './Hero.vue';

export default {
    title: 'Organisms/Hero',
    component: Hero,
};

const Template = (args) => ({
    components: { Hero },
    setup() {
        return { args };
    },
    template: '<Hero v-bind="args"/>'
})

export const Default = Template.bind({});
Default.args = {
    title: "The best tours in just 3 clicks",
    description: "Enter a country, a city, or even just a landmark and we'll find the right tours for you",
    image: "https://res.cloudinary.com/weigelcinthya/image/upload/v1658183370/ross-parmly-rf6ywHVkrlY-unsplash_jfoneh.jpg"
}