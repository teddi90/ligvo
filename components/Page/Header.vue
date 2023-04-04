<template>
    <section class="hero">
        <div class="container">
            <h2 v-if="title">{{ title }}</h2>
            <slot />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: String,
        content: String,
    },
};
</script>

<style lang="scss">
.hero {
    padding: 30px 0;
    background-color: #cac6c6;
    &-wrapper {
        display: flex;
        align-items: center;
    }
    .btn {
        padding: 5px 20px;
    }
}
.img-wrapper {
    height: 200px;
    width: 200px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 20px;
}
.main-img {
    width: 100%;
    position: absolute;
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>

