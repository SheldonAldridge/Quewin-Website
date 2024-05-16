const burgNavbar = Vue.createApp({
    data(){
       return{
          objectNav: {
           burgerMen:'./Resources/Images/Navbar/Burger-Menu.svg',
           burgerMenSlide:'./Resources/Images/Navbar/Burger-Menu-Slide.svg',
          },

          listNavObj: {
            home: 'Home',
            aboutMe: 'About Me',
            ContactMe: 'Contact Me'
         },
 
          projectPage:{
            title: 'Portfolio'
          },

          projectTitleObj:{
            digitalArt: 'Digital Art Work',
            traditionalArt: 'Traditional Art Work',
            animation: 'Animation Work'
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

 burgNavbar.mount('#burger-nav');

const portfolio = Vue.createApp({
    data(){
        return{
           imageGroups:[
            [
                {src: './Resources/Images/Gallery/Digital Art/Image 1.jpg', alt: 'Image 1'}
            ],

            [
                {src: './Resources/Images/Gallery/Digital Art/Image 3.jpg', alt: 'Image 3'},
                {src: './Resources/Images/Gallery/Digital Art/Image 2.jpg', alt: 'Image 2'},
                {src: './Resources/Images/Gallery/Digital Art/Image 4.jpg', alt: 'Image 4'}
            ],

            [
                {src: './Resources/Images/Gallery/Digital Art/Image 5.jpg', alt: 'Image 5'}
            ],

            [
                {src: './Resources/Images/Gallery/Digital Art/Image 6.jpg', alt: 'Image 6'},
                {src: './Resources/Images/Gallery/Digital Art/Image 7.jpg', alt: 'Image 7'},
                {src: './Resources/Images/Gallery/Digital Art/Image 8.jpg', alt: 'Image 8'}
            ],

            [
                {src: './Resources/Images/Gallery/Digital Art/Image 9.jpg', alt: 'Image 9'}
            ],

            [
                {src: './Resources/Images/Gallery/Digital Art/Image 10.jpg', alt: 'Image 10'},
                {src: './Resources/Images/Gallery/Digital Art/Image 11.jpg', alt: 'Image 11'},
                {src: './Resources/Images/Gallery/Digital Art/Image 16.jpg', alt: 'Image 16'}
            ],

           ]
        };
    }
})

portfolio.mount('#portfolio')