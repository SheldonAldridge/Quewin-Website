const heroImage = Vue.createApp({
    data() {
      return {
        heroImage: {
          QuweinImage:"./Resources/Images/Quewin Images/69543088-01f5-4102-9bde-d2420736d14d.jpg",
        },

        title:{
            heroTitle:'Contact Me',
        }
      };
    },
  });
  
  heroImage.mount('#hero-image')

  const title = Vue.createApp({
    data() {
      return {
        title:{
            heroTitle:'Contact Me',
        },

        paragraph:{
            subtitle:"Looking for someone who is passionate about 2D art and graphic design? I'm seeking new opportunities to bring creativity and precision to your projects. Let's discuss how I can contribute to your team."
        },
      };
    },
  });

  title.mount('#contactMe')