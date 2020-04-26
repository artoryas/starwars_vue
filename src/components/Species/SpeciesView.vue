<template>
    <div v-if="Object.keys(species).length">
        
        <div class="card horizontal">
            <div class="card-image">
                <vue-load-image>
                    <img 
                        :src="img" 
                        slot="image"
                        alt="" />
                    <img 
                    slot="preloader"
                        src="../../assets/loader.gif" />
                    <img slot="error" src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg">
                </vue-load-image>
            </div>
            <div class="card-stacked">
                <div class="card-content">
                        <h2>{{species.name}}</h2>
                        <p>Классификация: <span>{{species.classification}}</span></p>
                        <p>Средний рост: <span>{{species.average_height}}</span></p>
                        <p>Цвет кожи: <span>{{species.skin_colors}}</span></p>
                        <p>Цвет волос: <span>{{species.hair_colors}}</span></p>
                        <p>Цвет глаз: <span>{{species.eye_colors}}</span></p>
                        <p>Средняя продолжительность жизни : <span>{{species.average_lifespan}}</span></p>
                        <p>Язык общения: <span>{{species.language}}</span></p>
                </div>
            </div>
        </div>
    </div>
    <h2 v-else>
        Выберите расу
    </h2>
</template>
<script>
import VueLoadImage from 'vue-load-image';

export default {
    components:{
        'vue-load-image': VueLoadImage
    },
    data(){
        return{
            img: ''
        }
    },
    props: {
        species: Object
    },
    mounted(){
       if(this.species.url){
        const number = this.species.url.match(/(\d+)/);
        this.img = `https://starwars-visualguide.com/assets/img/species/${number[0]}.jpg`;
       }
   }
}
</script>