// <script setup>
// const { data: posts } = await useFetch(
//     "http://localhost/wp/wp-json/wp/v2/projects"
// );
const { data: posts } = await useWpApi().getPosts();
</script>
<template>
    <main>
        <PageHeader>
            <div class="hero-wrapper">
                <div class="img-wrapper">
                    <img
                        class="main-img"
                        src="~/assets/img/man.jpg"
                        alt="main image"
                    />
                </div>
                <div>
                    <h3>Some title</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione, non!
                    </p>
                    <a href="#" class="btn btn-primary">join</a>
                </div>
            </div>
        </PageHeader>
        <section class="container cards-wrapper">
            <div class="row">
                <BlogCard
                    v-for="post in posts"
                    :key="post.id"
                    :title="post.title.rendered"
                    :content="post.content.rendered"
                    :image="post.better_featured_image.source_url"
                    :slug="post.slug"
                />
            </div>
        </section>
    </main>
</template>
<style lang="scss">
.cards-wrapper {
    padding: 20px 0;
}
</style>
