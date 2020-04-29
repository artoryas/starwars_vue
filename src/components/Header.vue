<template>
    <div>
        <nav class="nav-wrapper grey darken-4">
            <div class="container">
                <router-link to="/" class="brand-logo">
                    STAR WARS
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
</template>
<script>
export default {
    
}
</script>
<style lang="stylus">

</style>