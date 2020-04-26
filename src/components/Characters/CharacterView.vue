<template>
        <div v-if="Object.keys(char).length">
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
                            <div slot="error">error message</div>
                    </vue-load-image>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                            <h2>{{char.name}}</h2>
                            <p>Пол: <span>{{char.gender}}</span></p>
                            <p>Дата рождения: <span>{{char.birth_year}}</span></p>
                            <p>Рост: <span>{{char.height}}</span></p>
                            <p>Вес: <span>{{char.mass}}</span></p>
                            <p>Цвет волос: <span>{{char.hair_color}}</span></p>
                            <p>Цвет глаз: <span>{{char.eye_color}}</span></p>
                    </div>
                </div>
            </div>  
        </div>
        <h2 v-else>
            Выберите персонажа
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
        char: Object
    },
    mounted(){
        if(this.char.url){
             const number = this.char.url.match(/(\d+)/);
        this.img = `https://starwars-visualguide.com/assets/img/characters/${number[0]}.jpg`;
        }
   }
}
</script>


