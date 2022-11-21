var app = new Vue({
    
    el : '#root',
    
    data: {

        //email: '',
        emailsArray: [],

    },

    mounted() {
        console.log(`this is emailsArray before triggering the function`, this.emailsArray)

    },

    created() {

    },

    beforeUpdate() {

    },
    
    methods: {

        generateEmails(){
            

            for( let i=0; i<10; i++){
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        let email = response.data.response;
                        this.emailsArray.push(email);
                    
                })
            }
            

            console.log(`this is my generated emails array`, this.emailsArray);

            
        },

    }
})