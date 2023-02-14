<template>
  <div v-for="(item, index) in navlist" :key="index">
    <nav-list-item :itemContent="item"/>
  </div>
</template>

<script>
import NavListItem from './NavListItem.vue';
export default {
    props:['navlist'],
    components:{
        NavListItem
    }
};
</script>

<style>

</style>