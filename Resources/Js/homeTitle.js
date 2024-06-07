const canvas = Vue.createApp({
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
 
          groundObj:{
             background:"./Resources/Images/Images - artwork/MyWork.png"
          },
 
          titleObj:{
             firstName: "Quewin",
             lastName: "Fortune"
          },
       }
    },
 });
 
 canvas.mount('#canvas')
 