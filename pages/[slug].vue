<script setup>
const { params } = useRoute();
const { data: posts } = await useWpApi().getPost(params.slug);
const post = posts.value[0];
</script>
<template>
    <main>
        <section class="container post">
            <div class="post-title">
                <h1>{{ post.title.rendered }}</h1>
            </div>
            <div class="post-meta">
                <span>Written by Misha</span>
                <span>Published on by {{ post.date }}</span>
            </div>
            <div class="post-image">
                <img
                    :src="post._embedded['wp:featuredmedia'][0]?.source_url"
                    alt="post thumbnail"
                />
            </div>
            <div class="post-content">
                <div v-html="post.content.rendered"></div>
            </div>
        </section>
    </main>
</template>
<style lang="scss">
.post {
    padding: 30px 0;
    &-title {
        text-align: center;
        h1 {
            font-size: 46px;
        }
    }
    &-meta {
        text-align: center;
        margin-bottom: 40px;
        span:not(last-child) {
            margin-right: 30px;
        }
    }
    &-image {
        position: relative;
        height: 400px;
        // width: 100%;
        overflow: hidden;
        border-radius: 5px;
        margin-bottom: 20px;
        img {
            position: absolute;
            max-width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            object-fit: cover;
        }
    }
}
</style>
