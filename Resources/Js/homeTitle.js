const canvas = Vue.createApp({
    data(){
       return{

        objectNav: {
            burgerMen:'./Resources/Images/Navbar/Burger-Menu.svg',
            burgerMenSlide:'./Resources/Images/Navbar/Burger-Menu-Slide.svg',
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
 