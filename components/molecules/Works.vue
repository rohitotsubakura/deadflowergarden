<script lang="ts">
import Button from "../atoms/Button.vue"
export default defineComponent ({
    props: {
        localeData: {
            type: Object,
        }
    },
    setup({ localeData }) {
        const getItemImagePath = (body) => {
            return {
                itemImagePath: `../assets/images/${body.image}.png`
            }
        };
        return {
            localeData,
            getItemImagePath
        };
    },
    components: { Button }
})
</script>

<template>
<section class="works" id="works">
    <h2 class="works__heading">{{localeData.heading}}</h2>
    <p class="works__subheading">{{ localeData.subheading }}</p>
    <div class="works__body">
        <div v-for="(info, index) in localeData.body" :key="index" class="works__item">
            <div class="works__itemImage"
                 :style="[
                    {
                      'background-image':
                        'url(' + getItemImagePath(info).itemImagePath + ')',
                    },
                ]"
            ></div>
            <div class="works__itemText">
                <span class="works__itemTitle">{{info.name}}</span>
                <span class="works__itemDescription">{{info.description}}</span>
            </div>
        </div>
    </div>
    <a :href="localeData.to" class="works__link" target="_blank" rel="noopener noreferrer"><span>{{localeData.link}}</span></a>
</section>
</template>

<style lang="scss">
.works {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: rgb(44, 39, 46);

    &__body {
        display: flex;
        flex-direction: row-reverse;
    }
    &__heading {
        color: #fff;
    }
    &__subheading {
        color: #fff;
        margin-bottom: 32px;
    }
    &__item {
        display:flex;
        flex-direction: column;
        margin-bottom: 16px;

        &Image {
            width: 300px;
            height: 300px;
            margin-bottom: 24px;
            background-size: cover;
            background-position: center;
        }
        &Text {
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
        }
        &Title {
            color: #fff;
            font-weight: 700;
            margin-bottom: 8px;
        }
        &Description {
            color: #fff;
            margin-bottom: 16px;
        }
    }
    &__link {
        border: 4px solid #fff;
        border-radius: 50px;
        height: 40px;
        padding: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        text-decoration: none;

        &:hover {
            transition: all 300ms ease-in-out;
            border-radius: 50px;
            background-color: rgba(255, 255,255,0.4);
        }
        span {
            display: inline-block;
            color: #fff;
        }
    }
}

</style>