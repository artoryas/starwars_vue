<template>
    <ul class="pagination">
            <li 
                class="waves-effect"
                v-for="(index) of pages" 
                v-bind:key="index"
                v-bind:class="{active: selectedPage == index}"
                v-on:click="$emit('showPage', index); selectedPage = index">
                <a>{{index}}</a>
            </li>
        </ul>
</template>
<script>
export default {
    data(){
        return{
            selectedPage: 1
        }
    },
    props:{
        pages: Number
    }
}
</script>
<style lang="stylus">
.pagination
    li.active
        background-color: #212121
</style>
