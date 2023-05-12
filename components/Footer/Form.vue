<template>
    <Form @submit="onSubmit" class="footer-form">
        <h3>Зв’яжіться з нами</h3>
        <p>Ми відповімо Вам протягом 24 годин</p>
        <div class="footer-input-wrapper">
            <Field
                v-model="userName"
                class="footer-form__input"
                name="name"
                type="text"
                placeholder="Ваше ім'я"
            />
            <ErrorMessage class="footer-form__error" name="name" />
        </div>
        <div class="footer-input-wrapper">
            <Field
                :rules="validateEmail"
                v-model="userMail"
                class="footer-form__input"
                type="email"
                name="email"
                placeholder="Email"
            />
            <ErrorMessage class="footer-form__error" name="email" />
        </div>
        <div class="footer-input-wrapper">
            <Field
                :rules="validatePhone"
                v-model="userPhone"
                class="footer-form__input"
                type="tel"
                name="phone"
                placeholder="+380"
            />
            <ErrorMessage class="footer-form__error" name="phone" />
        </div>
        <div class="footer-input-wrapper">
            <Field
                v-model="userMessage"
                class="footer-form__textarea"
                placeholder="Текст"
                type="text"
                name="message"
            />
            <ErrorMessage class="footer-form__error" name="message" />
        </div>
        <button type="submit" class="btn btn__primary">Відправити</button>
    </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
const userName = ref("");
const userMail = ref("");
const userPhone = ref("");
const userMessage = ref("");

const onSubmit = (value) => {
    console.log(value);
};
const validatePhone = (value) => {
    const regex = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm;
    if (!regex.test(value) && value) {
        return "Введіть правельний номер телефону";
    }
    // All is good
    return true;
};
const validateEmail = (value) => {
    // if the field is empty
    if (!value) {
        return "Це поле обов'язкове";
    }
    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
        return "Введіть правельну поштову адресу";
    }
    // All is good
    return true;
};
</script>

