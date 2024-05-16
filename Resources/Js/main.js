const nav = Vue.createApp({
   data(){
      return{
         listNavObj: {
            home: 'Portfolio',
            aboutMe: 'About Me',
            ContactMe: 'Contact Me'
         },

         nameTitleObj: {
            firstName: 'Quewin',
            lastName: 'Fortune'
         }
      }
   }
});

nav.mount('#nav');


