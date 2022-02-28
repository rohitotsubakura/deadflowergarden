<script lang="ts">
import MainHeader from "../components/molecules/MainHeader.vue";
import Hero from "../components/molecules/Hero.vue";
export default {
    components: { MainHeader, Hero }
}
</script>

<script setup lang="ts">
import News from "~~/components/molecules/News.vue";
const localeData = await $fetch('/api/data').then(
    (response)=> {
        return {
                localeData: response.ja
            }
        }
)
</script>

<style lang="scss">

</style>

<template>
    <MainHeader v-if="localeData" :localeData="localeData.localeData.common.header.list" />
    <Hero v-if="localeData" :localeData="localeData.localeData.top.hero" />
    <News v-if="localeData" :localeData="localeData.localeData.top.news" />
</template>
