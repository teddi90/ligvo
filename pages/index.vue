<script setup>
// const { data: posts } = await useWpApi().getPosts();
const logoSetColor = () => {
    document.querySelector(".logo svg").classList.remove("styled");
};
const logoChangeColor = () => {
    document.querySelector(".logo svg").classList.add("styled");
};
const menuElemsChangeColor = () => {
    const elems = document.querySelectorAll(".menu__item a");
    elems.forEach((e) => {
        e.classList.add("styled");
    });
};
const menuElemsResetColor = () => {
    const elems = document.querySelectorAll(".menu__item a");
    elems.forEach((e) => {
        e.classList.remove("styled");
    });
};
</script>
<template>
    <div class="hero">
        <div
            @mouseover="logoSetColor(), menuElemsChangeColor()"
            @mouseleave="menuElemsResetColor"
            class="hero__col hero__col-left"
        >
            <div class="bg-transparent"></div>
            <div class="hero__col_wrapper">
                <div>
                    <img
                        class="hero__logo"
                        src="~/assets/img/brand.svg"
                        alt=""
                    />
                </div>
                <h2 class="hero__title">Клуб настільних ігор</h2>
                <p class="hero__text">
                    Бронювання ігор, ігро-тіндер, знайти компанію для гри
                </p>
                <NuxtLink class="btn btn__primary" to="#"
                    >Дізнатися більше</NuxtLink
                >
            </div>
        </div>
        <div
            @mouseover="logoChangeColor(), menuElemsChangeColor()"
            @mouseleave="logoSetColor(), menuElemsResetColor()"
            class="hero__col hero__col-middle"
        >
            <div class="bg-transparent"></div>
            <div class="hero__col_wrapper">
                <div>
                    <img
                        class="hero__logo"
                        src="~/assets/img/brand.svg"
                        alt=""
                    />
                </div>
                <h2 class="hero__title">Наш Магазин настільних ігор</h2>
                <p class="hero__text">
                    Широкий асортимент ігор, ми допоможемо підібрати ігру, що
                    підійте саме тобі
                </p>
                <NuxtLink class="btn" to="#">прейти у магазин</NuxtLink>
            </div>
        </div>
        <div
            @mouseover="logoChangeColor(), menuElemsResetColor()"
            @mouseleave="logoSetColor"
            class="hero__col hero__col-right"
        >
            <div class="bg-transparent"></div>
            <div class="hero__col_wrapper">
                <div>
                    <img
                        class="hero__logo"
                        src="~/assets/img/brand.svg"
                        alt=""
                    />
                </div>
                <h2 class="hero__title">Організація заходів</h2>
                <p class="hero__text">Вигідні пропозиції від наших партнерів</p>
                <NuxtLink class="btn" to="#">Дізнатися більше</NuxtLink>
            </div>
        </div>
    </div>
</template>

