<template>
<no-ssr>
    <header :class="{'-sticky' : isSticky}">
        <Logo class="header__logo"/>
        <div class="header__wrapper">
            <NuxtLink to="/" href="/" :class="'logo__link'" v-smooth-scroll>
                <div class="logo">TOP</div>
            </NuxtLink>
            <NuxtLink :to="localeData[0].to" :href="localeData[0].to" :class="'logo__link'" v-smooth-scroll>
                <div class="logo">NEWS</div>
            </NuxtLink>
            <NuxtLink :to="localeData[1].to" :href="localeData[1].to" :class="'logo__link'" v-smooth-scroll>
                <div class="logo">ABOUT US</div>
            </NuxtLink>
            <NuxtLink :to="localeData[2].to" :href="localeData[2].to" :class="'logo__link'" v-smooth-scroll>
                <div class="logo">MEMBERS</div>
            </NuxtLink>
            <NuxtLink :to="localeData[3].to" :href="localeData[3].to" :class="'logo__link'" v-smooth-scroll>
                <div class="logo">WORKS</div>
            </NuxtLink>
            <NuxtLink :to="localeData[4].to" :href="localeData[4].to" :class="'logo__link'" v-smooth-scroll>
                <div class="logo">CONTACT</div>
            </NuxtLink>
        </div>
    </header>
</no-ssr>
</template>

<script lang="ts">
import Logo from '@/assets/images/DFG-logo.svg';
export default defineComponent ({
    props: {
        localeData: {
            type: Object,
        },
    },
    data() {
        return {
            isSticky: false 
        }
    },
    components: {Logo},
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrollY = window.scrollY;
            if (!this.isSticky) {
              this.isSticky = window.scrollY > 100;
            } else if (window.scrollY < 90) {
              this.isSticky = !this.isSticky;
            }
        }
    },

    setup({localeData}) {
        return {
            localeData,
        }
    }    
})
</script>

<style lang="scss">
header {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 40px;
    z-index: 10;
    &.-sticky {
        background-color: rgba(0, 0, 0, 0.3);
    }
}
.header {
    &__logo {
        width: 150px;
    }
    &__wrapper {
        display: flex;
        align-items: center;
        width: 60%;
        justify-content: space-around;
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
    @media screen and (max-width: 810px) {
        font-size: 14px;
    }
}
</style>