<template>
    <div class="itemlist">
        <div class="collection">
            <a 
                 class="collection-item "
                 v-for="(item, i) of data"
                 v-bind:key="item.id"
                 v-bind:class="{active: selected == i}"
                 v-on:click="$emit('showItem', item, i); selected = i"> 
                 {{item.name}} 
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selected: undefined
        }
    },
    props: {
        data: {
            type: Array,
            required: true
        },
        char: Boolean
    }
}
</script>
<style lang="stylus">
a
    cursor: pointer
.collection
    .collection-item.active
        background-color: #212121
    a.collection-item
        color: #212121
</style>
