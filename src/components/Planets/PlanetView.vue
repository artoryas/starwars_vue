<template>
        <div v-if="Object.keys(planet).length">
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
                            <h2>{{planet.name}}</h2>
                            <p>Период вращения: <span>{{planet.rotation_period}}</span></p>
                            <p>Период вращения вокруг орбиты: <span>{{planet.orbital_period}}</span></p>
                            <p>Диаметр: <span>{{planet.diameter}}</span></p>
                            <p>Климат: <span>{{planet.climate}}</span></p>
                            <p>Поверхность: <span>{{planet.terrain}}</span></p>
                            <p>Популяция: <span>{{planet.population}}</span></p>
                    </div>
                </div>
            </div>  
        </div>
        <h2 v-else>
            Выберите планету
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
        planet: Object
    },
    mounted(){
        if(this.planet.url){
            const number = this.planet.url.match(/(\d+)/);
            this.img = `https://starwars-visualguide.com/assets/img/planets/${number[0]}.jpg`;
        }
       
   }
}
</script>

