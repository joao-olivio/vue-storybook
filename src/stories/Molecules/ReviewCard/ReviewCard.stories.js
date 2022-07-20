import ReviewCard from './ReviewCard.vue';

export default {
    title: "Molecules/ReviewCard",
    component: ReviewCard
};

const Template = (args) => ({
    components: { ReviewCard },
    setup() {
      return { args };
    },
    template: '<review-card v-bind="args"/>',
});


export const Default = Template.bind({});
Default.args = {
    image: 'https://res.cloudinary.com/weigelcinthya/image/upload/v1658183370/ross-parmly-rf6ywHVkrlY-unsplash_jfoneh.jpg',
    testimonial: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
    authorName: "Jannike Borg",
    authorOccupation: "Publisher",
}