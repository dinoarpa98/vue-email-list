var app = new Vue (
    {
        el: '#root',
        data: {
          array:[]
        },

        created(){
            for(let i=0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response);
                    this.array.push(response.data.response)
                })
            }
        },

        methods: {

        }
    }
)