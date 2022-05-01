<template>
<section class="news" id="news">
    <h2 class="news__heading">{{localeData.heading}}</h2>
    <div class="news__body">
        <div v-for="info in localeData.body" class="news__item">
            <span class="news__itemDate">{{info.date}}</span>
            <span class="news__itemTitle">{{info.title}}</span>
        </div>
    </div>
</section>
</template>

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

<style lang="scss">
.news {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 40px;
    @media screen and (max-width: 810px) {
        padding-top: 100px;
    }

    &__body {
        display: flex;
        flex-direction: column-reverse;
    }
    &__heading {
        color: #fff;
        margin-bottom: 16px;
    }
    &__item {
        display: flex;
        flex-direction: row;
        @media screen and (max-width:480px) {
            flex-direction:column;
            margin-bottom: 16px;
        }

        &Date {
            color: #fff;
            font-weight: 700;
            margin-right: 16px;
        }
        &Title {
            color: #fff;
        }
    }
}
</style>