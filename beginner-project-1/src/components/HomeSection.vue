<template>
    <div class="home-section">
        <h1>Welcome to my page</h1>
        <v-container class="d-flex">
            <v-card class="mx-2" v-for="element in cardsArray" :key="element.id">

                <v-card-text>
                    <p class="text-h4 text--primary" id="title">
                        {{ element.title }}
                    </p>
                    <div class="text--primary" id="text">
                        {{ element.text }}
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-btn text color="teal accent-4" @click="reveal = true">
                        Learn More
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>


        <div class="button my-6">
            <v-btn @click="reverseElements()">
                REVERSE
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {

    name: "HomeSection",
    computed: {
        cardsArray() {
            return [
                {
                    id: 1,
                    title: 'Title 1',
                    text: '( I ) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem ullam nesciunt magni possimus sint sunt repudiandae mollitia nobis architecto suscipit culpa perferendis ipsa aut, molestias, nam fuga et laboriosam.',

                },
                {
                    id: 2,
                    title: 'Title 2',
                    text: '( II ) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem ullam nesciunt magni possimus sint sunt repudiandae mollitia nobis architecto suscipit culpa perferendis ipsa aut, molestias, nam fuga et laboriosam.',
                },
                {
                    id: 3,
                    title: 'Title 3',
                    text: '( III ) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem ullam nesciunt magni possimus sint sunt repudiandae mollitia nobis architecto suscipit culpa perferendis ipsa aut, molestias, nam fuga et laboriosam.',
                }
            ];
        }
    },

    methods: {
        reverseElements() {
            let newArr = this.cardsArray.reverse();
            for (let i = 0; i < newArr.length; i++) {
                document.getElementById('title').innerHTML = newArr[i].title;
                document.getElementById('text').innerHTML = newArr[i].text;
            }
        },
    },
};
</script>

<style>
.home-section h1 {
    text-align: center;
    margin: 60px auto;
}

.button {
    text-align: center;
}
</style>