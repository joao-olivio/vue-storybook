import ReviewSection from "./ReviewSection.vue";

export default {
  title: "Organisms/ReviewSection",
  component: ReviewSection,
};

const Template = (args) => ({
  components: { ReviewSection },
  setup() {
    return { args };
  },
  template: '<ReviewSection v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
  title: "Reviews",
  btnLabel: "More reviews",
  bgGrey: false,
  reviews: [
    {
      image:
        "/pictures/profile-picture-2.png",
      testimonial:
        "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
      authorName: "LeBron Durant",
      authorOccupation: "Flight attendant",
    },
    {
      image:
        "/pictures/profile-picture-1.png",
      testimonial:
        "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
      authorName: "Jannike Borg",
      authorOccupation: "Publisher",
    },
    {
      image:
        "/pictures/profile-picture-3.png",
      testimonial:
        "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
      authorName: "Kaarel Piho",
      authorOccupation: "Chiropodist",
    },
  ],
};
