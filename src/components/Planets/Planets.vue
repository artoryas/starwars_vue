<template>
    <div>
        <SearchBar 
            @searchValue="searchPlanet"/>
        <div class="row">
            <div class="col s4">
                <img src="@/assets/loader.gif" alt="" v-if="isLoading">
                <ItemList 
                    v-else
                    v-bind:data="data"
                    @showItem="showPlanet"/>
                <Pagination 
                    v-bind:pages="pages"
                    @showPage="showPage"/>
            </div>
            <div class="cols6">
                <img src="@/assets/loader.gif" alt="" v-if="isLoadingItem">
                <PlanetView
                    v-else
                    v-bind:planet="planet"/>
            </div>
        </div>
    </div>
</template>
<script>
import ItemList from '@/views/ItemList';
import PlanetView from './PlanetView';
import SearchBar from '@/views/SearchBar';
import Pagination from '@/views/Pagination';

export default {
    data(){
        return{
            pages: 6,
            data: [],
            isLoading: true,
            planet: {},
            isLoadingItem: false
        }
    },
    mounted(){
        fetch('https://swapi.dev/api/planets/')
            .then((res) => res.json())
            .then((body) => {
                this.data = body.results;
                this.isLoading = false;
            });
    },
    components:{
        ItemList,
        PlanetView,
        SearchBar,
        Pagination
    },
    methods:{
        showPlanet(item){
            this.isLoadingItem = true;
            item.url = item.url.slice(0,4) + 's' + item.url.slice(4);
            fetch(item.url)
                .then(res => res.json())
                .then(body => {
                    this.planet = body;
                    this.isLoadingItem = false;
            });
        },
        searchPlanet(value){
            this.isLoading = true;
            fetch(`https://swapi.dev/api/planets/?search=${value}`)
                .then((res) => res.json())
                .then((body) => {
                    this.data = body.results;
                    this.isLoading = false;
            });
        },
        showPage(page){
            this.isLoading = true;
            fetch(`https://swapi.dev/api/planets/?page=${page}`)
                .then((res) => res.json())
                .then((body) => {
                    this.data = body.results;
                    this.isLoading = false;
            });
        }
    }
}
</script>
<style>

</style>