<template>
    <h1 class="my-10 px-12">ABOUT US</h1>
    <div v-for="element in contentArray" :key="element.id" class="div-1 mx-auto">
        <div class="d-flex px-10 py-2 mx-auto my-8" v-if="(element.imagelocation === 'right')">
            <p>{{ element.text }}</p>
            <v-img class="img" :src="require(`../assets/${element.img}`)"></v-img>
        </div>

        <div class="d-flex px-10 py-2 mx-auto my-8" v-else-if="element.imagelocation === 'left'">
            <v-img class="img" :src="require(`../assets/${element.img}`)"></v-img>
            <p>{{ element.text }}</p>
        </div>
    </div>
</template>
   
<script>
export default {
    name: "AboutSection",
    computed: {
        contentArray() {
            return [
                {
                    id: 1,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tortor sit amet purus ultrices elementum eget in nibh. Vivamus quis neque est. Quisque elementum vitae velit ut varius. Morbi nec sem sapien. Sed aliquam sapien vitae diam imperdiet blandit. Maecenas dapibus, quam vel euismod vulputate, risus mi feugiat leo, quis convallis velit quam at ipsum. Aenean id mollis eros, at viverra erat. Donec id pellentesque lectus. Suspendisse malesuada augue a nibh gravida, at aliquam magna sollicitudin. Donec bibendum in leo vel gravida. Duis placerat hendrerit maximus.Nullam interdum eleifend nulla, non suscipit justo ornare eget.",  
                    img: "about-us.png",
                    imagelocation: "right"
                },
                {
                    id: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tortor sit amet purus ultrices elementum eget in nibh. Vivamus quis neque est. Quisque elementum vitae velit ut varius. Morbi nec sem sapien. Sed aliquam sapien vitae diam imperdiet blandit. Maecenas dapibus, quam vel euismod vulputate, risus mi feugiat leo, quis convallis velit quam at ipsum. Aenean id mollis eros, at viverra erat. Donec id pellentesque lectus. Suspendisse malesuada augue a nibh gravida, at aliquam magna sollicitudin. Donec bibendum in leo vel gravida. Duis placerat hendrerit maximus.Nullam interdum eleifend nulla, non suscipit justo ornare eget.",
                    img: "about-us-2.png",
                    imagelocation: "left"
                }
            ]
        }
    }
};
</script>
   
<style>
.div-1 {
    width: 70%
}

h1 {
 text-align: center;   
}
p {
    width: 50%;
}
.img {
    width: 50%;
    height: 300px;
    background-repeat: no-repeat;
    background-size: contain;
}
</style>