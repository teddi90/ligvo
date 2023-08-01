<template>
    <div class="callback">
        <h3 class="callback-title">Зв’язатися з нами</h3>
        <p v-if="props.text" class="callback-text">{{ props.text }}</p>
        <div class="callback-btns">
            <slot></slot>
            <a
                href="https://t.me/+380954314083"
                target="_blank"
                class="btn callback-btn"
                >Telegram chat</a
            >
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String,
});
</script>

