<template>
    <div v-if="Object.keys(starship).length">   
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
                        <h2>{{starship.name}}</h2>
                        <p>Модель: <span>{{starship.model}}</span> </p>
                        <p>Классификация корабля: <span>{{starship.starship_class}}</span></p>
                        <p>Производитель: <span>{{starship.manufacturer}}</span></p>
                        <p>Цена в кредитах: <span>{{starship.cost_in_credits}}</span></p>
                        <p>Длина корабля: <span>{{starship.length}}</span></p>
                        <p>Кол-во экипажа: <span>{{starship.crew}}</span></p>
                        <p>Кол-во пассажиров: <span>{{starship.passengers}}</span></p>
                        <p>Вместительность багажа: <span>{{starship.cargo_capacity}}</span></p>
                        <p>Рейтинг гиперскорости: <span>{{starship.hyperdrive_rating}}</span></p>
                </div>
            </div>
        </div>   
    </div>
    <h2 v-else>
        Выберите звездный корабль
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
        starship: Object
    },
    mounted(){
       if(this.starship.url){
        const number = this.starship.url.match(/(\d+)/);
        this.img = `https://starwars-visualguide.com/assets/img/starships/${number[0]}.jpg`;
       }
       
   },
}
</script>
