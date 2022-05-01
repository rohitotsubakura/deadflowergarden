<script lang="ts">
import Logo from '@/assets/images/DFG-logo.svg';
export default defineComponent ({
    props: {
        localeData: {
            type: Object,
        }
    },
    components: {Logo},

    setup({localeData}) {
        return {
            localeData
        }
    }    
})
</script>

<template>
    <section class="hero">
        <div class="hero__contents">
            <h2 v-if="localeData.heading" class="hero__copy">{{localeData.heading}}</h2>
            <p v-if="localeData.subheading" class="hero__description">{{localeData.subheading}}</p>
            <Logo class="hero__logo"/>
        </div>
    </section>
</template>

<style lang="scss">
.hero {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    height: 90vh;
    position:relative;
    z-index: 0;
    background-image: url('@/assets/images/hero.png');
    background-size: cover;
    background-position: center;
    border-radius: 40px;
    @media screen and (max-width:810px) {
        background-position: 40%;
        height: 70vh;
    }

    &::after {
	    background-image: linear-gradient(45deg, #333 25%, transparent 25%), 
           linear-gradient(-45deg, #333 25%, transparent 25%), 
           linear-gradient(45deg, transparent 75%, #333 75%), 
           linear-gradient(-45deg, transparent 75%, #333 75%);
	    background-size: 2px 2px;
	    background-position: 0 0, 1px 0, 1px -1px, 0px 1px;
	    display: block;
	    content: '';
       position: absolute;
       width: 100%;
       height: 90vh;
       border-radius: 40px;
        @media screen and (max-width:810px) {
            background-position: 40%;
            height: 70vh;
        }
    }
    &__copy {
        color: #fff;
        font-size: 32px;
        text-shadow: 0 0 15px #666;
        margin-bottom: 4px;
        margin-top: 16px;
        text-align: center;
        @media screen and (max-width:810px) {
            font-size: 20px;
        }
    }
    &__description {
        color: #fff;
        text-shadow: 0 0 15px #666;
        margin-bottom: 16px;
        text-align: center;
        @media screen and (max-width:810px) {
            font-size: 16px;
        }
        @media screen and (max-width:480px) {
            font-size: 12px;
        }
    }
    &__contents {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;
    }
    &__logo {
        position: absolute;
        top: 55vh;
        max-width: 50rem;
        z-index: 2;
    }
}
</style>