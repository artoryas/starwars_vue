<template>
    <div>
        <SearchBar 
            @searchValue="searchChar"/>
        <div class="row">
            <div class="col s4">
                <img src="@/assets/loader.gif" alt="" v-if="isLoading" class="loader">
                <ItemList 
                    v-else
                    v-bind:data="data"
                    @showItem="showChar"/>
                <Pagination 
                    v-bind:pages="pages"
                    @showPage="showPage"/>
            </div>
            <div class="col s6">
                <img src="@/assets/loader.gif" alt="" v-if="isLoadingItem">
                <CharacterView
                    v-else
                    v-bind:char="char"/>
            </div>
        </div>
    </div>
</template>

<script>
import ItemList from '@/views/ItemList';
import CharacterView from './CharacterView';
import SearchBar from '@/views/SearchBar';
import Pagination from '@/views/Pagination';

export default {
    data(){
        return {
            data: [],
            char: {},
            isLoading: true,
            pages: 9,
            isLoadingItem: false
        }
    },
    mounted(){
        fetch('https://swapi.dev/api/people/')
            .then((res) => res.json())
            .then((body) => {
                this.data = body.results;
                this.isLoading = false;
            });
    },
    components:{
        ItemList,
        CharacterView,
        SearchBar,
        Pagination
    },
    methods:{
        showChar(item){
            this.isLoadingItem = true;
            fetch(item.url)
                .then(res => res.json())
                .then(body => {
                    this.char = body;
                    this.isLoadingItem = false;
            });
        },
        searchChar(value){
            this.isLoading = true;
            fetch(`https://swapi.dev/api/people/?search=${value}`)
                .then((res) => res.json())
                .then((body) => {
                    this.data = body.results;
                    this.isLoading = false;
            });
        },
        showPage(page){
            this.isLoading = true;
            fetch(`https://swapi.dev/api/people/?page=${page}`)
                .then((res) => res.json())
                .then((body) => {
                    this.data = body.results;
                    this.isLoading = false;
            });
        }
    }
}
</script>
