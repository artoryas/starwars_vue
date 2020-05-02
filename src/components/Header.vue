<template>
    <div>
        <nav class="nav-wrapper grey darken-4">
            <div class="container">
                <router-link to="/" class="brand-logo">
                    <img class="logo" src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png" alt="">
                </router-link>
                <a href="javascript:;" class="sidenav-trigger" data-target="mobile-links">
                    <i class="material-icons">menu</i>
                </a>
                <ul class="right hide-on-med-and-down"> 
                    <li>
                        <router-link to="./characters">
                            Персонажи
                        </router-link>
                    </li>
                    <li>
                        <router-link to="./planets">
                            Планеты
                        </router-link>
                    </li>
                    <li>
                        <router-link to="./species">
                            Расы
                        </router-link>
                    </li>
                    <li>
                        <router-link to="./starships">
                            Звездные корабли
                        </router-link>
                    </li>
                </ul>
            </div> 
        </nav>
        <ul class="sidenav" id="mobile-links">
            <li v-on:click="closeNav()">
                <router-link to="./characters">
                    Персонажи
                </router-link>
            </li>
            <li v-on:click="closeNav()">
                <router-link to="./planets">
                    Планеты
                </router-link>
            </li>
            <li v-on:click="closeNav()">
                <router-link to="./species">
                    Расы
                </router-link>
            </li>
            <li v-on:click="closeNav()">
                <router-link to="./starships">
                    Звездные корабли
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import M from 'materialize-css';
export default {
    methods:{
        closeNav(){
            let sidenav = document.querySelector('.sidenav');
            M.Sidenav.init(sidenav).close()
        }
    },
    mounted(){
    }
}
</script>
