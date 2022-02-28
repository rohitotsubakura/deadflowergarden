<template>
    <div class="button">
        <span>これはボタンです</span>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.button {
    border: 4px solid #fff;
    border-radius: 50px;
    width: 200px;
    height: 40px;
    padding: 16px;
    color: #fff;
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
</style>