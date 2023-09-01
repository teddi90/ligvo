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
                    <div
                        v-for="i in 12"
                        :key="i"
                        class="col-6 col-sm-4 col-md-3"
                    >
                        <h4 class="partners__item">Партнер</h4>
                    </div>
                </div>
            </div>
            <p class="partners__text">
                Буль ласка, звяжіться з нами якщо бажаєте стати партнером або
                хочете дізнатись будь-яку іншу інформацію.
            </p>
        </div>
    </section>
    <footer class="partners__footer-mobile">
        <div class="container">
            <div class="partners__footer-callback">
                <Callback>
                    <a class="btn callback-btn" href="tel:+380954314083"
                        >Зателефонувати</a
                    >
                </Callback>
            </div>
            <p class="partners__footer-right">
                &#169; Ligvo_if 2023 Всі права захищені
            </p>
        </div>
    </footer>
    
</template>

<script setup>
</script>
