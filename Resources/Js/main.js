const navbar = Vue.createApp({
   data(){
      return{
         objectNav: {
          burgerMen:'./Resources/Images/Navbar/Burger-Menu.svg',
          burgerMenSlide:'./Resources/Images/Navbar/Burger-Menu-Slide.svg',
          home:`Home`,
          aboutMe: `About Me`,
          mywork:`My Work`
         },

         objectLink: {
            homeImage: './Resources/Images/Images - artwork/Home.png',
            aboutImage: './Resources/Images/Images - artwork/AboutMe',
            myWorkImage: './Resources/Images/Images - artwork/MyWork',
         },

         //Toggle Burger Menu Images
         ShowBurgerMen: true,
         ShowBurgerMenSlide: false,
         ShowMenuList: false,

         //Toggle padding
         BurgPadding: false,

         //burger Slide Menu animation
         slideIn: true,

         //Menu list slide down animation
         slideDown: true,

      };
   },
      methods:{
         toggleBurger() {
            this.ShowBurgerMen = !this.ShowBurgerMen,
            this.ShowBurgerMenSlide = !this.ShowBurgerMenSlide,
            this.ShowMenuList = !this.ShowMenuList
            this.BurgPadding = !this.BurgPadding
            
         },

         toggleBurgerSlide() {
            this.ShowBurgerMenSlide = !this.ShowBurgerMenSlide,
            this.ShowBurgerMen = !this.ShowBurgerMen,
            this.ShowMenuList = !this.ShowMenuList
         },

         toggleSlideIn(){
            this.slideIn = !this.slideIn
         },
         toggleSlideDown(){
            this.slideDown = !this.slideDown
         },
      },

});

navbar.mount('#navbar')