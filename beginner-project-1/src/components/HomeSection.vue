<template>
    <div class="home-section">
        <h1>Welcome to my page</h1>
        <v-container>
            <v-card class="mx-auto" v-for="element in cardsArray" :key="element.id">
                <v-card-text>
                    <p class="text-h4 text--primary">
                        {{ element.title }}
                    </p>
                    <div class="text--primary">
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
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem ullam nesciunt magni possimus sint sunt repudiandae mollitia nobis architecto suscipit culpa perferendis ipsa aut, molestias, nam fuga et laboriosam.',

                },
                {
                    id: 2,
                    title: 'Title 2',
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem ullam nesciunt magni possimus sint sunt repudiandae mollitia nobis architecto suscipit culpa perferendis ipsa aut, molestias, nam fuga et laboriosam.',
                },
                {
                    id: 3,
                    title: 'Title 3',
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem ullam nesciunt magni possimus sint sunt repudiandae mollitia nobis architecto suscipit culpa perferendis ipsa aut, molestias, nam fuga et laboriosam.',
                }
            ];
        }
    }
};
</script>

<style>
.home-section h1 {
    text-align: center;
    margin: 100px auto;
}
.v-container {
    display: flex;
    justify-content: space-around;
}
</style>