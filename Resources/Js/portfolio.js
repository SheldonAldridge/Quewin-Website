const nameHeader = Vue.createApp({
    data(){
       return{
          nameTitleObj: {
             firstName: 'Quewin',
             lastName: 'Fortune'
          },

          projectPage:{
            title: 'Portfolio'
          }
       }
    }
});

nameHeader.mount('#nameHeader');

const portfolio = Vue.createApp({
    data(){
        return{
            projectTitleObj:{
                projectTitle: 'Digital Art Work'
            }
        }
    }
})

portfolio.mount('#portfolio')