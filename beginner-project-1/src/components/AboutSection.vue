<template>
    <h1 class="my-10 px-12">ABOUT US</h1>
    <div class="d-flex justify-space-evenly px-10 py-2 mx-auto my-8">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor semper enim quis dignissim. Ut at orci
            venenatis, ultricies turpis quis, lacinia lorem. Morbi sodales pharetra posuere. Curabitur leo nulla,
            iaculis eu eros vel, dignissim fermentum dui. Aliquam massa ipsum, rutrum at lorem accumsan, faucibus
            bibendum leo. Suspendisse nec tellus sed libero mollis finibus nec et ipsum. Quisque varius ex ac quam
            fermentum, vel consectetur est porttitor.
        </p>
        <div class="pic1 img"></div>
    </div>
    <div class="d-flex justify-space-evenly px-10 py-2 mx-auto my-8">
        <div class="pic2 img"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor semper enim quis dignissim. Ut at orci
            venenatis, ultricies turpis quis, lacinia lorem. Morbi sodales pharetra posuere. Curabitur leo nulla,
            iaculis eu eros vel, dignissim fermentum dui. Aliquam massa ipsum, rutrum at lorem accumsan, faucibus
            bibendum leo. Suspendisse nec tellus sed libero mollis finibus nec et ipsum. Quisque varius ex ac quam
            fermentum, vel consectetur est porttitor.
        </p>
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
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta unde doloremque quos illo, ipsam reprehenderit nobis! Minima vitae magni magnam recusandae unde repellendus neque. Quibusdam accusamus voluptate sapiente debitis reiciendis",
                    img: ["../assets/about-us.png"]
                },
                {
                    id: 2,
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta unde doloremque quos illo, ipsam reprehenderit nobis! Minima vitae magni magnam recusandae unde repellendus neque. Quibusdam accusamus voluptate sapiente debitis reiciendis",
                    img: ["../assets/about-us-2.pn"]
                }
            ]
        }
    }
};
</script>
   
<style>
h1{
    text-align: center;
}
p {
    width: 30%;
}
.img {
    width: 30%;
    height: 250px;
    background-repeat: no-repeat;
    background-size: contain;
}

.pic1 {
    background-image: url("../assets/about-us.png");
}
.pic2 {
    background-image: url("../assets/about-us-2.png");
}
</style>