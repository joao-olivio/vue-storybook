import Thumbnail from "./Thumbnail.vue";

export default {
  title: "Atoms/Thumbnail",
  component: Thumbnail,
};

const Template = (args) => ({
    components: { Thumbnail },
    setup() {
      return { args };
    },
    template: '<Thumbnail v-bind="args"/>',
});

export const Post = Template.bind({});
Post.args = {
  image:
    "https://res.cloudinary.com/weigelcinthya/image/upload/v1658183370/ross-parmly-rf6ywHVkrlY-unsplash_jfoneh.jpg",
};

export const Offer = Template.bind({});
Offer.args = {
  image:
    "https://res.cloudinary.com/weigelcinthya/image/upload/v1658183370/ross-parmly-rf6ywHVkrlY-unsplash_jfoneh.jpg",
  offer: {
    city: "Superior",
    initialDate: "18.09",
    finalDate: "21.09",
    price: 50000,
  },
};

