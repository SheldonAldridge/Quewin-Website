const nav = Vue.createApp({
   data(){
      return{

         objectNav: {
            burgerMen:'./Resources/Images/Navbar/Burger-Menu.svg',
            burgerMenSlide:'./Resources/Images/Navbar/Burger-Menu-Slide.svg',
           },

         listNavObj: {
            portfolio: 'Portfolio',
            aboutMe: 'About Me',
            ContactMe: 'Contact Me'
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
      }
   },

   methods:{
      toggleBurger() {
         this.ShowBurgerMen = !this.ShowBurgerMen,
         this.ShowBurgerMenSlide = !this.ShowBurgerMenSlide,
         this.ShowMenuList = !this.ShowMenuList,
         this.BurgPadding  = !this.BurgPadding
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

nav.mount('#burger-nav');

const canvas = Vue.createApp({
   data(){
      return{
         titleObj:{
            firstName: "Quewin",
            lastName: "Fortune"
         },
      }
   },
});

canvas.mount('#canvas')