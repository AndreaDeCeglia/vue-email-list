var app = new Vue({
    
    el : '#root',
    
    data: {

        email: '',
        emailsArray: [],

    },

    mounted() {

    },

    created() {
  
    },
    beforeUpdate() {
  
    },
    
    methods: {

        generateEmails(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    
                    console.log(`this is 'response' written by me`, response);
                    console.log(`this is response.data`, response.data);
                    console.log(`this is response.data.response`, response.data.response);
                    console.log(`this is this`, this);

                    

                })
        }

    }
})