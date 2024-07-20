
  const title = Vue.createApp({
    data() {
      return {
        title:{
            heroTitle:'Contact Me',
        },

        paragraph:{
            subtitle:"Looking for someone who is passionate about 2D art and graphic design? I'm seeking new opportunities to bring creativity and precision to your projects. Let's discuss how I can contribute to your team."
        },

        socialMedia:{
          facebook:"/Resources/Images/Contact_Page_Images/facebook.png",
          linkedIn:"/Resources/Images/Contact_Page_Images/linkedin.png",
          pinterest:"/Resources/Images/Contact_Page_Images/Pinterest.png",
          youtube:"/Resources/Images/Contact_Page_Images/youtube.png"
        }
      };
    },
  });

  title.mount('#contactMe')

  const media = Vue.createApp({
    data() {
      return {
        socialMedia:{
          facebook:"/Resources/Images/Contact_Page_Images/facebook.png",
          facebookLink:"https://m.facebook.com/quewin.fortuin/",
          tapas:"/Resources/Images/Contact_Page_Images/Tapas.png",
          tapasLink:"https://m.tapas.io/quewinty777",
          instagram:"/Resources/Images/Contact_Page_Images/Instagram.png",
          instagramLink:"https://www.instagram.com/wolfyque_art777/",
          youtube:"/Resources/Images/Contact_Page_Images/youtube.png",
          youtubeLink:"https://www.youtube.com/playlist?list=PLZIo7ASKMTki7VlMYXtF-24dgoCDQy14M",
          tickTock:"/Resources/Images/Contact_Page_Images/TickTok.png",
          tickTockLink:"https://www.tiktok.com/@wqa777"
        }
      };
    },
  });

  media.mount('#media')

  const contactinfo = Vue.createApp({
    data() {
      return {

        contactMe:{
          email:"/Resources/Images/Contact_Page_Images/Email_address.png",
          emailText:"quewinty777@gmail.com",
          phone:"/Resources/Images/Contact_Page_Images/smartphone_contact_info.png",
          phoneText:"(+27) 81 361 0615"
        }
      };
    },
  });
  
  contactinfo.mount('#contactInfo')
  