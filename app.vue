<template>
    <div>
        <HeaderNav />
        <NuxtPage />
        <Footer>
            <template v-slot:map>
                <FooterMap />
            </template>
        </Footer>
    </div>
</template>
