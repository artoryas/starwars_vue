(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1039378d"],{"1dde":function(t,s,a){var r=a("d039"),i=a("b622"),n=a("2d00"),e=i("species");t.exports=function(t){return n>=51||!r((function(){var s=[],a=s.constructor={};return a[e]=function(){return{foo:1}},1!==s[t](Boolean).foo}))}},"79a3":function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",[r("SearchBar",{on:{searchValue:t.searchStarships}}),r("div",{staticClass:"row"},[r("div",{staticClass:"col s4"},[t.isLoading?r("img",{attrs:{src:a("fa5e"),alt:""}}):r("ItemList",{attrs:{data:t.data},on:{showItem:t.showStarship}}),r("Pagination",{attrs:{pages:t.pages},on:{showPage:t.showPage}})],1),r("div",{staticClass:"col s6"},[t.isLoadingItem?r("img",{attrs:{src:a("fa5e"),alt:""}}):r("StarshipsView",{attrs:{starship:t.starship}})],1)])],1)},i=[],n=(a("fb6a"),a("d3b7"),a("7773")),e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return Object.keys(t.starship).length?r("div",[r("div",{staticClass:"card horizontal"},[r("div",{staticClass:"card-image"},[r("vue-load-image",[r("img",{attrs:{slot:"image",src:t.img,alt:""},slot:"image"}),r("img",{attrs:{slot:"preloader",src:a("fa5e")},slot:"preloader"}),r("img",{attrs:{slot:"error",src:"https://starwars-visualguide.com/assets/img/big-placeholder.jpg"},slot:"error"})])],1),r("div",{staticClass:"card-stacked"},[r("div",{staticClass:"card-content"},[r("h2",[t._v(t._s(t.starship.name))]),r("p",[t._v("Модель: "),r("span",[t._v(t._s(t.starship.model))])]),r("p",[t._v("Классификация корабля: "),r("span",[t._v(t._s(t.starship.starship_class))])]),r("p",[t._v("Производитель: "),r("span",[t._v(t._s(t.starship.manufacturer))])]),r("p",[t._v("Цена в кредитах: "),r("span",[t._v(t._s(t.starship.cost_in_credits))])]),r("p",[t._v("Длина корабля: "),r("span",[t._v(t._s(t.starship.length))])]),r("p",[t._v("Кол-во экипажа: "),r("span",[t._v(t._s(t.starship.crew))])]),r("p",[t._v("Кол-во пассажиров: "),r("span",[t._v(t._s(t.starship.passengers))])]),r("p",[t._v("Вместительность багажа: "),r("span",[t._v(t._s(t.starship.cargo_capacity))])]),r("p",[t._v("Рейтинг гиперскорости: "),r("span",[t._v(t._s(t.starship.hyperdrive_rating))])])])])])]):r("h2",[t._v(" Выберите звездный корабль ")])},o=[],c=(a("ac1f"),a("466d"),a("118d")),p=a.n(c),h={components:{"vue-load-image":p.a},data:function(){return{img:""}},props:{starship:Object},mounted:function(){if(this.starship.url){var t=this.starship.url.match(/(\d+)/);this.img="https://starwars-visualguide.com/assets/img/starships/".concat(t[0],".jpg")}}},u=h,l=a("2877"),d=Object(l["a"])(u,e,o,!1,null,null,null),v=d.exports,f=a("70a2"),g=a("e20e"),_={data:function(){return{pages:4,data:[],isLoading:!0,starship:{},isLoadingItem:!1}},mounted:function(){var t=this;fetch("https://swapi.dev/api/starships/").then((function(t){return t.json()})).then((function(s){t.data=s.results,t.isLoading=!1}))},components:{ItemList:n["a"],StarshipsView:v,SearchBar:f["a"],Pagination:g["a"]},methods:{showStarship:function(t){var s=this;this.isLoadingItem=!0,t.url=t.url.slice(0,4)+"s"+t.url.slice(4),fetch(t.url).then((function(t){return t.json()})).then((function(t){s.starship=t,s.isLoadingItem=!1}))},searchStarships:function(t){var s=this;this.isLoading=!0,fetch("https://swapi.dev/api/starships/?search=".concat(t)).then((function(t){return t.json()})).then((function(t){s.data=t.results,s.isLoading=!1}))},showPage:function(t){var s=this;this.isLoading=!0,fetch("https://swapi.dev/api/starships/?page=".concat(t)).then((function(t){return t.json()})).then((function(t){s.data=t.results,s.isLoading=!1}))}}},m=_,w=Object(l["a"])(m,r,i,!1,null,null,null);s["default"]=w.exports},8418:function(t,s,a){"use strict";var r=a("c04e"),i=a("9bf2"),n=a("5c6c");t.exports=function(t,s,a){var e=r(s);e in t?i.f(t,e,n(0,a)):t[e]=a}},ae40:function(t,s,a){var r=a("83ab"),i=a("d039"),n=a("5135"),e=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,s){if(n(o,t))return o[t];s||(s={});var a=[][t],p=!!n(s,"ACCESSORS")&&s.ACCESSORS,h=n(s,0)?s[0]:c,u=n(s,1)?s[1]:void 0;return o[t]=!!a&&!i((function(){if(p&&!r)return!0;var t={length:-1};p?e(t,1,{enumerable:!0,get:c}):t[1]=1,a.call(t,h,u)}))}},e8b5:function(t,s,a){var r=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fb6a:function(t,s,a){"use strict";var r=a("23e7"),i=a("861d"),n=a("e8b5"),e=a("23cb"),o=a("50c4"),c=a("fc6a"),p=a("8418"),h=a("b622"),u=a("1dde"),l=a("ae40"),d=u("slice"),v=l("slice",{ACCESSORS:!0,0:0,1:2}),f=h("species"),g=[].slice,_=Math.max;r({target:"Array",proto:!0,forced:!d||!v},{slice:function(t,s){var a,r,h,u=c(this),l=o(u.length),d=e(t,l),v=e(void 0===s?l:s,l);if(n(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?i(a)&&(a=a[f],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return g.call(u,d,v);for(r=new(void 0===a?Array:a)(_(v-d,0)),h=0;d<v;d++,h++)d in u&&p(r,h,u[d]);return r.length=h,r}})}}]);
//# sourceMappingURL=chunk-1039378d.a1b2ed7b.js.map