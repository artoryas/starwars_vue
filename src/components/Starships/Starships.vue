<template>
    <div>
        <SearchBar 
            @searchValue="searchStarships"/>
        <div class="row">
            <div class="col s4">
                <img src="@/assets/loader.gif" alt="" v-if="isLoading">
                <ItemList 
                    v-else
                    v-bind:data="data"
                    @showItem="showStarship"/>
                <Pagination 
                    v-bind:pages="pages"
                    @showPage="showPage"/>
            </div>
            <div class="col s6">
                <img src="@/assets/loader.gif" alt="" v-if="isLoadingItem">
                <StarshipsView
                    v-bind:starship="starship"
                    v-else/>
            </div>
        </div>     
    </div>
</template>

<script>
import ItemList from '@/views/ItemList';
import StarshipsView from './StarshipsView';
import SearchBar from '@/views/SearchBar';
import Pagination from '@/views/Pagination';

export default {
    data(){
        return{
            pages: 4,
            data: [],
            isLoading: true,
            starship: {},
            isLoadingItem: false
        }
    },
    mounted(){
        fetch('https://swapi.dev/api/starships/')
            .then((res) => res.json())
            .then((body) => {
                this.data = body.results;
                this.isLoading = false;
            });
    },
    components:{
        ItemList,
        StarshipsView,
        SearchBar,
        Pagination
    },
    methods:{
        showStarship(item){
            this.isLoadingItem = true;
            if(item.url.charAt(4) === ':'){
                item.url = item.url.slice(0,4) + 's' + item.url.slice(4);
            }
            fetch(item.url)
                .then(res => res.json())
                .then(body => {
                    this.starship = body;
                    this.isLoadingItem = false;
            });
        },
        searchStarships(value){
            this.isLoading = true;
            fetch(`https://swapi.dev/api/starships/?search=${value}`)
                .then((res) => res.json())
                .then((body) => {
                    this.data = body.results;
                    this.isLoading = false;
            });
        },
        showPage(page){
            this.isLoading = true;
            fetch(`https://swapi.dev/api/starships/?page=${page}`)
                .then((res) => res.json())
                .then((body) => {
                    this.data = body.results;
                    this.isLoading = false;
            });
        }
    }
}
</script>
