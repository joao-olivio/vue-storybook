import PostCard from "./PostCard.vue";

export default {
  title: "Molecules/PostCard",
  component: PostCard,
};

const Template = (args) => ({
  components: { PostCard },
  setup() {
    return { args };
  },
  template: '<PostCard v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
  image:
    "https://res.cloudinary.com/weigelcinthya/image/upload/v1658183370/ross-parmly-rf6ywHVkrlY-unsplash_jfoneh.jpg",
  date: "May 20, 2022",
  estimatedReadingTime: "15 minutes",
  title: "Tips for flying on a plane",
  description:
    "If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you",
};
