const navbar = Vue.createApp({
   data(){
      return{
         objectNav:{
          burgerMen:'./Resources/Images/Navbar/Burger-Menu.svg',
          burgerMenSlide:'./Resources/Images/Navbar/Burger-Menu-Slide.svg',
          home:`Home`,
          aboutMe: `About Me`,
          mywork:`My Work`
         }
      }
   }
});

navbar.mount('#navbar')