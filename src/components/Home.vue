<template>
    <div class="container">
        <h2 class="center">Welcome to StarWars!</h2>
        <p class="flow-text center">Краткая информация по вселенной звездных войн</p>
        <p class="flow-text center">Перейдите по вкладкам чтобы получить информацию</p>
        <div class="row">
            <div class="col s12 m3">
                <div class="card">
                    <div class="card-image">
                        <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg">
                        <span class="card-title">Персонажи</span>
                    </div>
                    <div class="card-content">
                        <p>Список популярных героев «Звёздных войны».</p>
                    </div>
                    <div class="card-action">
                        <router-link to="./characters">
                            Перейти
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col s12 m3">
                <div class="card">
                    <div class="card-image">
                    <img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg">
                    <span class="card-title">Планеты</span>
                    </div>
                    <div class="card-content">
                    <p>Планеты вселенной «Звёздных войн»</p>
                    </div>
                    <div class="card-action">
                        <router-link to="./planets">
                            Перейти
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col s12 m3">
                <div class="card">
                    <div class="card-image">
                    <img src="https://starwars-visualguide.com/assets/img/categories/species.jpg">
                    <span class="card-title">Расы</span>
                    </div>
                    <div class="card-content">
                    <p>Описание представителей целой вселенной</p>
                    </div>
                    <div class="card-action">
                        <router-link to="./species">
                            Перейти
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col s12 m3">
                <div class="card">
                    <div class="card-image">
                    <img src="https://starwars-visualguide.com/assets/img/categories/starships.jpg">
                    <span class="card-title">Звездные корабли</span>
                    </div>
                    <div class="card-content">
                    <p>Узнайте детали быстрых и смертоносных кораблей</p>
                    </div>
                    <div class="card-action">
                        <router-link to="./starships">
                            Перейти
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <p class="flow-text center">Создано с использованием Vue.js, MaterializeCSS, Babel, Stylus</p>
    </div>
</template>
<style lang="stylus">
 h2.center
     margin-top: 20px

</style>