<script lang="ts">
import AtomsButton from '../../components/atoms/Button.vue';
export default defineComponent ({
    props: {
        localeData: {
            type: Object,
        }
    },
    components: {AtomsButton},

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
            <AtomsButton v-if="localeData" :link="localeData.link" :to="localeData.to" />
        </div>
    </section>
</template>

<style lang="scss">
.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90vh;
    position:relative;
    z-index: 0;
    overflow: hidden;
    background-image: url('../../assets/images/hero.png');
    background-size: cover;

    &::after {
	background-image: linear-gradient(45deg, #666 25%, transparent 25%), 
        linear-gradient(-45deg, #666 25%, transparent 25%), 
        linear-gradient(45deg, transparent 75%, #666 75%), 
        linear-gradient(-45deg, transparent 75%, #666 75%);
	background-size: 2px 2px;
	background-position: 0 0, 1px 0, 1px -1px, 0px 1px;
	display: block;
	content: '';
    position: absolute;
    width: 100%;
    height: 90vh;
}
    &__copy {
        color: #fff;
        font-size: 32px;
        text-shadow: 0 0 15px #666;
        margin-bottom: 4px;
    }
    &__description {
        color: #fff;
        text-shadow: 0 0 15px #666;
        margin-bottom: 20px;
    }
    &__contents {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;
    }
}
</style>