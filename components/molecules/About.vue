<script lang="ts">
    export default defineComponent ({
        props: {
            localeData: {
                type: Object,
            }
        },
        setup({localeData}) {
            return {
                localeData
            }
        }    
    })
</script>

<template>
    <div class="about">
        <h2 class="about__heading">{{localeData.heading}}</h2>
        <h3 class="about__subheading">{{localeData.subheading}}</h3>
        <p v-for="(body, index) in localeData.body" :key="index" class="about__description">
            {{body}}
        </p>
    </div>
</template>

<style lang="scss">
.about {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px;
    background: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);

    &__heading,
    &__subheading,
    &__description {
        color: #fff;
    }

    &__heading {
        font-size: 24px;
        margin-bottom: 16px;
    }

    &__subheading {
        font-size: 20px;
        margin-bottom: 16px;
    }

    &__description {
        margin-bottom: 4px;
    }
}
</style>