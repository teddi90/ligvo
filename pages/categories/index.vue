<script setup>
const { data: categories } = await useWpApi().getCategories();
</script>
<template>
    <PageHeader title="Title on categories page" />
    <section class="container">
        <div class="links">
            <NuxtLink
                v-for="category in categories"
                :key="category.id"
                :to="`/categories/${category.slug}`"
                >#{{ category.name }}</NuxtLink
            >
        </div>
    </section>
</template>
<style lang="scss">
.links {
    padding: 20px;
    a {
        display: inline-block;
        background-color: #38eb7c;
        margin-right: 10px;
        padding: 5px 8px;
        border-radius: 5px;
        margin-bottom: 10px;
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        &:hover {
            background-color: #2ebd65;
        }
    }
}
</style>
