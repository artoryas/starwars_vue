(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a47a0"],{"0736":function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("SearchBar",{on:{searchValue:a.searchChar}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col s4"},[a.isLoading?e("img",{staticClass:"loader",attrs:{src:s("fa5e"),alt:""}}):e("ItemList",{attrs:{data:a.data},on:{showItem:a.showChar}}),e("Pagination",{attrs:{pages:a.pages},on:{showPage:a.showPage}})],1),e("div",{staticClass:"col s6"},[a.isLoadingItem?e("img",{attrs:{src:s("fa5e"),alt:""}}):e("CharacterView",{attrs:{char:a.char}})],1)])],1)},r=[],n=(s("d3b7"),s("7773")),i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return Object.keys(a.char).length?e("div",[e("div",{staticClass:"card horizontal"},[e("div",{staticClass:"card-image"},[e("vue-load-image",[e("img",{attrs:{slot:"image",src:a.img,alt:""},slot:"image"}),e("img",{attrs:{slot:"preloader",src:s("fa5e")},slot:"preloader"}),e("div",{attrs:{slot:"error"},slot:"error"},[a._v("error message")])])],1),e("div",{staticClass:"card-stacked"},[e("div",{staticClass:"card-content"},[e("h2",[a._v(a._s(a.char.name))]),e("p",[a._v("Пол: "),e("span",[a._v(a._s(a.char.gender))])]),e("p",[a._v("Дата рождения: "),e("span",[a._v(a._s(a.char.birth_year))])]),e("p",[a._v("Рост: "),e("span",[a._v(a._s(a.char.height))])]),e("p",[a._v("Вес: "),e("span",[a._v(a._s(a.char.mass))])]),e("p",[a._v("Цвет волос: "),e("span",[a._v(a._s(a.char.hair_color))])]),e("p",[a._v("Цвет глаз: "),e("span",[a._v(a._s(a.char.eye_color))])])])])])]):e("h2",[a._v(" Выберите персонажа ")])},c=[],o=(s("ac1f"),s("466d"),s("118d")),h=s.n(o),l={components:{"vue-load-image":h.a},data:function(){return{img:""}},props:{char:Object},mounted:function(){if(this.char.url){var a=this.char.url.match(/(\d+)/);this.img="https://starwars-visualguide.com/assets/img/characters/".concat(a[0],".jpg")}}},d=l,u=s("2877"),p=Object(u["a"])(d,i,c,!1,null,null,null),g=p.exports,v=s("70a2"),m=s("e20e"),f={data:function(){return{data:[],char:{},isLoading:!0,pages:9,isLoadingItem:!1}},mounted:function(){var a=this;fetch("https://swapi.dev/api/people/").then((function(a){return a.json()})).then((function(t){a.data=t.results,a.isLoading=!1}))},components:{ItemList:n["a"],CharacterView:g,SearchBar:v["a"],Pagination:m["a"]},methods:{showChar:function(a){var t=this;this.isLoadingItem=!0,fetch(a.url).then((function(a){return a.json()})).then((function(a){t.char=a,t.isLoadingItem=!1}))},searchChar:function(a){var t=this;this.isLoading=!0,fetch("https://swapi.dev/api/people/?search=".concat(a)).then((function(a){return a.json()})).then((function(a){t.data=a.results,t.isLoading=!1}))},showPage:function(a){var t=this;this.isLoading=!0,fetch("https://swapi.dev/api/people/?page=".concat(a)).then((function(a){return a.json()})).then((function(a){t.data=a.results,t.isLoading=!1}))}}},_=f,w=Object(u["a"])(_,e,r,!1,null,null,null);t["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d0a47a0.9a396e96.js.map