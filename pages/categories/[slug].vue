<script setup>
const route = useRoute();
const { data: categories } = await useWpApi().get(
    `categories?slug=${route.params.slug}`
);
const { data: posts } = await useWpApi().getPosts(categories.value[0].id);
</script>
<template>
    <PageHeader :title="`Archive: ${categories[0].name}`" />
    <section class="container">
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
</template>
