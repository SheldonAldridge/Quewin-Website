const nav = Vue.createApp({
   data(){
      return{
         listNavObj: {
            portfolio: 'Portfolio',
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


