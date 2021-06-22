<template>
    <div class="error">
        {{ error }}
    </div>
</template>

<script>
export default {
    name: 'ErrorOutput',
    props: ['error'],
};
</script>

<style>
</style>