<script setup>
// const { data: posts } = await useWpApi().getPosts();
// console.log(posts.value);

const isModalVisible = ref(false);
const hideModal = () => {
    isModalVisible.value = false;
};
const showModal = () => {
    isModalVisible.value = true;
};
const logoSetColor = () => {
    document.querySelector(".nav__logo svg").classList.remove("styled");
};
const logoChangeColor = () => {
    document.querySelector(".nav__logo svg").classList.add("styled");
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

let sectionWith = null;
let sectionHeight = null;
onMounted(() => {
    sectionWith = window.innerWidth / 3;
    sectionHeight = window.innerHeight / 2;
    window.addEventListener("resize", (e) => {
        sectionWith = window.innerWidth / 3;
    });
    window.addEventListener("resize", (e) => {
        sectionHeight = window.innerHeight / 2;
    });
});

const currentSection = ref(0);
const detectCursor = (e) => {
    currentSection.value = getCurrentSection(e.pageX, e.pageY);
};
const getCurrentSection = (cursorPositionX, cursorPositionY) => {
    if (cursorPositionX > 0 && cursorPositionX < sectionWith) {
        return 1;
    } else if (
        cursorPositionX > sectionWith &&
        cursorPositionX < sectionWith * 2
    ) {
        return 2;
    } else if (
        cursorPositionX > sectionWith * 2 &&
        cursorPositionX < window.innerWidth &&
        cursorPositionY > 0 &&
        cursorPositionY < sectionHeight
    ) {
        return 3;
    } else if (
        cursorPositionX > sectionWith * 2 &&
        cursorPositionX < window.innerWidth &&
        cursorPositionY > sectionHeight &&
        cursorPositionY < sectionHeight * 2
    ) {
        return 4;
    }
};
</script>
<template>
    <div
        @mousemove="detectCursor"
        @mouseleave="currentSection = 0"
        class="hero"
    >
        <div :class="{ active: currentSection === 1 }" class="hero-section">
            <div class="hero-section__row">
                <div
                    @mouseover="logoSetColor(), menuElemsChangeColor()"
                    @mouseleave="menuElemsResetColor"
                    :class="{ active: currentSection === 0 }"
                    class="col-1-3"
                >
                    <div class="hero-col hero-col__left">
                        <div class="hero-col__wrapper">
                            <div>
                                <img
                                    class="hero__logo"
                                    src="~/assets/img/brand.svg"
                                    alt="ligvo emblem"
                                />
                            </div>
                            <h2 class="hero__title">Клуб настільних ігор</h2>
                            <p class="hero__text">
                                Бронювання ігор, ігро-тіндер, знайти компанію
                                для гри
                            </p>
                            <div class="hero__btn-wrapper">
                                <a
                                    class="btn btn__primary hero__btn"
                                    href="https://ligvo-club.grt-team.com/"
                                    >Дізнатися більше</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2-3">
                    <div class="hero-background__wrapper">
                        <div
                            :class="{
                                'animation-background': currentSection === 1,
                            }"
                            class="hero-background__left"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="{ active: currentSection === 2 }" class="hero-section">
            <div class="hero-section__row">
                <div class="col-1-3">
                    <div class="hero-background__wrapper">
                        <div
                            :class="{
                                'animation-background': currentSection === 2,
                            }"
                            class="hero-background__middle-1"
                        ></div>
                        <div
                            :class="{
                                'animation-background': currentSection === 2,
                            }"
                            class="hero-background__middle-2"
                        ></div>
                    </div>
                </div>
                <div
                    @mouseover="logoChangeColor(), menuElemsChangeColor()"
                    @mouseleave="logoSetColor(), menuElemsResetColor()"
                    :class="{ active: currentSection === 0 }"
                    class="col-1-3"
                >
                    <div class="hero-col hero-col__middle">
                        <div class="hero-col__wrapper">
                            <div>
                                <img
                                    class="hero__logo"
                                    src="~/assets/img/brand.svg"
                                    alt="ligvo emblem"
                                />
                            </div>
                            <h2 class="hero__title">
                                Наш Магазин настільних ігор
                            </h2>
                            <p class="hero__text">
                                Широкий асортимент ігор, ми допоможемо підібрати
                                гру, що підійте саме тобі
                            </p>
                            <div class="hero__btn-wrapper">
                                <NuxtLink
                                    class="btn btn__primary hero__btn"
                                    to="#"
                                    >перейти у магазин</NuxtLink
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1-3">
                    <div class="hero-background__wrapper">
                        <div
                            :class="{
                                'animation-background': currentSection === 2,
                            }"
                            class="hero-background__middle-3"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-section">
            <div class="hero-section__row">
                <div class="col-2-3">
                    <div class="hero-background__wrapper">
                        <div
                            :class="{
                                'animation-background': currentSection === 3,
                            }"
                            class="hero-background__right-1"
                        ></div>
                        <div
                            :class="{
                                'animation-background': currentSection === 4,
                            }"
                            class="hero-background__right-2"
                        ></div>
                    </div>
                </div>
                <div
                    @mouseover="logoChangeColor(), menuElemsResetColor()"
                    @mouseleave="logoSetColor"
                    :class="{ active: currentSection === 0 }"
                    class="col-1-3"
                >
                    <div class="hero-col hero-col__right">
                        <div class="hero-col__wrapper">
                            <div>
                                <img
                                    class="hero__logo"
                                    src="~/assets/img/brand.svg"
                                    alt="ligvo emblem"
                                />
                            </div>
                            <h2 class="hero__title">Організація заходів</h2>
                            <p class="hero__text">
                                Вигідні пропозиції від наших партнерів
                            </p>
                        </div>
                        <div class="hero-col__hover">
                            <div class="hero-col__content content_up">
                                <div>
                                    <div>
                                        <img
                                            class="hero__logo"
                                            src="~/assets/img/brand.svg"
                                            alt="ligvo emblem"
                                        />
                                    </div>
                                    <h2 class="hero__title">
                                        Корпоративи та групові заходи
                                    </h2>
                                    <NuxtLink
                                        class="btn btn__primary hero__content_btn"
                                        to="#"
                                        >Дізнатися більше</NuxtLink
                                    >
                                </div>
                            </div>
                            <div class="hero-col__content content_down">
                                <div>
                                    <div>
                                        <img
                                            class="hero__logo"
                                            src="~/assets/img/brand.svg"
                                            alt="ligvo emblem"
                                        />
                                    </div>
                                    <h2 class="hero__title">Дитячі заходи</h2>
                                    <NuxtLink
                                        class="btn btn__primary hero__content_btn"
                                        to="#"
                                        >Дізнатися більше</NuxtLink
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-mobile hero-mobile__top">
            <div class="hero-mobile__wrapper">
                <h2 class="hero__title">Клуб настільних ігор</h2>
                <a
                    class="btn btn__primary hero__btn"
                    href="https://ligvo-club.grt-team.com/"
                    >Дізнатися більше</a
                >
            </div>
        </div>
        <div class="hero-mobile hero-mobile__middle">
            <div class="hero-mobile__wrapper">
                <h2 class="hero__title">Наш Магазин настільних ігор</h2>
                <NuxtLink class="btn hero__btn" to="#"
                    >перейти у магазин</NuxtLink
                >
            </div>
        </div>
        <div class="hero-mobile hero-mobile__down">
            <div class="hero-mobile__wrapper">
                <h2 class="hero__title">Організація заходів</h2>
                <a href="#" @click="showModal" class="btn hero__btn" to="#"
                    >Дізнатися більше</a
                >
            </div>
        </div>
        <LigvoModal :isModalVisible="isModalVisible" @hideModal="hideModal">
            <ul class="hero-modal__list">
                <li class="hero-modal__item">
                    <a class="hero-modal__link" href="#"
                        >Корпоративи та групові заходи</a
                    >
                </li>
                <li class="hero-modal__item">
                    <a class="hero-modal__link" href="#">Дитячі заходи</a>
                </li>
            </ul>
        </LigvoModal>
        <div
            class="hero__indicators"
            :class="{
                hero__indicators_white:
                    currentSection == 2 || currentSection == 0,
            }"
        >
            <div
                class="hero__indicators-item"
                :class="{ active: currentSection == 1 }"
            ></div>
            <div
                class="hero__indicators-item"
                :class="{ active: currentSection == 0 || currentSection == 2 }"
            ></div>
            <div
                class="hero__indicators-item"
                :class="{ active: currentSection > 2 }"
            ></div>
        </div>
    </div>

    <Footer>
        <template v-slot:map>
            <FooterMap />
        </template>
    </Footer>
</template>
