const nav = Vue.createApp({
   data(){
      return{
         objectNav: {
            burgerMen:'./Resources/Images/Navbar/Burger-Menu.svg',
            burgerMenSlide:'./Resources/Images/Navbar/Burger-Menu-Slide.svg',
           },

         listNavObj: {
            home: 'Home',
            aboutMe: 'About Me',
            portfolio:'Portfolio',
            contactMe: 'Contact Me'
         },

         projectTitleObj:{
            digitalArt: 'Digital Art Work',
            traditionalArt: 'Traditional Art Work',
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

         ShowDigArt: true,
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

      toggleDigArt() {
         this.ShowDigArt = true,
         this.ShowTradArt = false
       },

       toggleTradArt() {
         this.ShowDigArt = false,
         this.ShowTradArt = true
       },
   },

    
});

nav.mount('#burger-nav');

