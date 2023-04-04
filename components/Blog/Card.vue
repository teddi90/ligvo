<template>
    <div class="col-4">
        <div class="article">
            <div class="article-img-wrapper">
                <img :src="image" class="article-img" />
            </div>
            <div class="article-body">
                <h5 class="article-title">{{ title }}</h5>
                <p class="article-text">
                    {{ content }}
                </p>
                <NuxtLink class="btn btn-primary" :to="`/${slug}`"
                    >Read More</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        image: String,
        content: String,
        slug: String,
    },
};
</script>

<style lang="scss">
.article {
    border-radius: 5px;
    box-shadow: 0px 3px 4px #d4cccc;
    margin-bottom: 20px;
    overflow: hidden;

    &-body {
        padding: 20px;
        p {
            height: 50px;
            overflow: hidden;
        }
    }
    &-img-wrapper {
        height: 300px;
        // width: 100%;
        overflow: hidden;
        position: relative;
    }
    &-img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
    }
}

</style>
