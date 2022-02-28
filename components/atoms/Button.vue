<template>
    <NuxtLink :to="`${to}`">
        <div class="button">
            <span>{{link}}</span>
        </div>
    </NuxtLink>
</template>

<script>
export default defineComponent ({
    props: {
        link: { type: String },
        to: {type: String}
    },
    setup({link, to}) {
        return {
            link,
            to
        }
    }    
})
</script>

<style lang="scss" scoped>
.button {
    border: 4px solid #fff;
    border-radius: 50px;
    width: 200px;
    height: 40px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;

    &:hover {
        transition: all 300ms ease-in-out;
        border-radius: 50px;
        background-color: rgba(255, 255,255,0.4);
    }
}
.router-link-active,
.router-link-exact-active {
    display: inline-block;
    text-decoration: none;
    color: #fff;
}
</style>