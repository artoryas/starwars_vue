<template>
    <nav class="nav-wrapper grey darken-4">
        <div class="container">
            <router-link to="/" class="brand-logo">
                STAR WARS
            </router-link>
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
</template>
<script>
export default {
    
}
</script>
