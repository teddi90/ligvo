<template>
    <section class="contacts">
        <div class="container">
            <h2 class="contacts__title">Контакти</h2>
            <ul class="contacts-list">
                <li class="contacts-list__item">
                    <a
                        class="contacts-list__link"
                        href="mailto:ligvoclub@email.com"
                        >ligvoclub@email.com</a
                    >
                </li>
                <li class="contacts-list__item">
                    <a class="contacts-list__link" href="tel:+380954314083"
                        >095 431 4083</a
                    >
                </li>
                <li class="contacts-list__item">76000 Івано-Франківськ</li>
                <li class="contacts-list__item">Бельведерська, 27а</li>
            </ul>
            <div class="contacts-socil">
                <a href="#" class="contacts-socil__link">
                    <img src="~/assets/img/facebook.svg" alt="Ligvo facebook" />
                </a>
                <a href="#" class="contacts-socil__link">
                    <img
                        src="~/assets/img/instagram.svg"
                        alt="Ligvo instagram"
                    />
                </a>
                <a href="#" class="contacts-socil__link">
                    <img src="~/assets/img/youtube.svg" alt="Ligvo youtube" />
                </a>
            </div>
            <Callback>
                <a class="btn callback-btn" href="tel:+380954314083"
                    >Зателефонувати</a
                >
            </Callback>
            <p class="contacts__rights">
                &#169; Ligvo_if 2023 Всі права захищені
            </p>
        </div>
    </section>
</template>

<script setup>
</script>
