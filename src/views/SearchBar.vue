<template>
    <form @submit.prevent="onSubmit">
        <div class="valign-wrapper row">
            <div class="input-field col s4">
                <input type="text" v-model="value" id="search" class="grey-text text-darken-4">
                <label for="search" class="grey-text text-darken-4">Поиск</label>
            </div>
            <button type="submit" class="btn waves-effect waves-light grey darken-4">
                Поиск
            </button>
            <div class="col s8"></div>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return {
            value: ''
        }
    },
    methods:{
        onSubmit(){
            this.$emit('searchValue', this.value);
        }
    }
}
</script>
<style>
    .row .input-field input:focus {
    border-bottom: 1px solid rgb(68, 68, 68) !important;
    box-shadow: 0 1px 0 0 rgb(85, 85, 85) !important
    }
</style>