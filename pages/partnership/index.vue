<template>
    <section class="partnership__hero partnership">
        <div class="container">
            <h2 class="partnership__title">
                Партнерство
                <img
                    class="partnership__logo"
                    src="~/assets/img/brand.svg"
                    alt="ligvo emblem"
                />
            </h2>
            <p class="partnership__text">
                Партнери Ligvo. Текст про партнерів, що розказує про партнерів і
                їхнє партнерське партнерство. Партнери Ligvo. Текст про
                партнерів, що розказує про партнерів і їхнє партнерське
                партнерство
            </p>
        </div>
    </section>
    <section class="partners">
        <div class="container">
            <h2 class="partners__title">Наші пертнери</h2>
            <div class="partners__wrapper">
                <div class="row">
                    <div v-for="i in 12" :key="i" class="col-md-3">
                        <h4 class="partners__item">Партнер</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer>
        <template v-slot:map>
            <FooterMap />
        </template>
    </Footer>
</template>

<script setup>
</script>
