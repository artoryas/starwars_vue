<template>
    <div>
        <SearchBar 
            @searchValue="searchSpecies"/>  
        <div class="row">
            <div class="col s4">
                <img src="@/assets/loader.gif" alt="" v-if="isLoading">
                <ItemList 
                    v-else
                    v-bind:data="data"
                    @showItem="showSpecies"/>
                <Pagination 
                    v-bind:pages="pages"
                    @showPage="showPage"/>
            </div>
            <div class="col s6">
                <img src="@/assets/loader.gif" alt="" v-if="isLoadingItem">
                <SpeciesView
                    v-else
                    v-bind:species="species"/>
            </div>
        </div>
    </div>
</template>

<script>
import ItemList from '@/views/ItemList';
import SpeciesView from './SpeciesView';
import SearchBar from '@/views/SearchBar';
import Pagination from '@/views/Pagination';

export default {
    data(){
        return{
            pages: 4,
            data: [],
            isLoading: true,
            species: {},
            isLoadingItem: false
        }
    },
    mounted(){
        fetch('https://swapi.dev/api/species/')
            .then((res) => res.json())
            .then((body) => {
                this.data = body.results;
                this.isLoading = false;
            });
    },
    components:{
        ItemList,
        SpeciesView,
        SearchBar,
        Pagination
    },
    methods:{
        showSpecies(item){
            this.isLoadingItem = true;
            item.url = item.url.slice(0,4) + 's' + item.url.slice(4);
            fetch(item.url)
                .then(res => res.json())
                .then(body => {
                    this.species = body;
                    this.isLoadingItem = false;
            });
        },
        searchSpecies(value){
            this.isLoading = true;
            fetch(`https://swapi.dev/api/species/?search=${value}`)
                .then((res) => res.json())
                .then((body) => {
                    this.data = body.results;
                    this.isLoading = false;
            });
        },
        showPage(page){
            this.isLoading = true;
            fetch(`https://swapi.dev/api/species/?page=${page}`)
                .then((res) => res.json())
                .then((body) => {
                    this.data = body.results;
                    this.isLoading = false;
            });
        }
    }
}
</script>