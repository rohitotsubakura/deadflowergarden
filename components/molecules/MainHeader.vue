<template>
    <header>
        <div class="header__wrapper">
            <nuxt-link to="/" class="logo__link">
                <div class="logo">TOP</div>
            </nuxt-link>
            <nuxt-link to="/" class="logo__link">
                <div class="logo">NEWS</div>
            </nuxt-link>
            <nuxt-link to="/" class="logo__link">
                <div class="logo">ABOUT US</div>
            </nuxt-link>
            <nuxt-link to="/" class="logo__link">
                <div class="logo">MEMBERS</div>
            </nuxt-link>
            <nuxt-link to="/" class="logo__link">
                <div class="logo">WORKS</div>
            </nuxt-link>
        </div>
    </header>
</template>

<script lang="ts">
export default {
}
</script>

<style lang="scss">
.header {
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 40px;
    }
}

a.logo__link {
    text-decoration: none;
    margin-right: 8px;
}
.logo {
    font-family:sans-serif;
    font-weight: 900;
    font-size: 20px;
    color: #fff;
}
</style>