(function(){"use strict";var e={8073:function(e,t,n){var o=n(9963),r=n(6252);function i(e,t){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var s=n(3744);const a={},c=(0,s.Z)(a,[["render",i]]);var u=c,l=n(2201),d=n(5522);const p=(0,r._)("div",{class:"home"},[(0,r._)("h1",{class:"home__title"},'Магазин продуктів "Орбіта"'),(0,r._)("p",{class:"home__text"}," Вітаємо у нашому чудовому магазині продуктів – місці, де смак та якість поєднуються для найкращого досвіду шопінгу! У нас ви знайдете свіжі та високоякісні продукти, які не лише насичать ваші смакові рецептори, але й даруватимуть радість вашому столу. "),(0,r._)("p",{class:"home__text"}," Наша команда завжди готова допомогти вам знайти саме те, що вам потрібно. Від свіжих фруктів та овочів до найсмачніших десертів – ми маємо все для забезпечення вашого столу смачною та здоровою їжею. "),(0,r._)("p",{class:"home__text"}," Нехай кожна покупка у нас буде для вас особливою, а наші продукти дарують вам найсмачніші миті. Чекаємо на вас у нашому магазині, де гостинність та якість зустрінуть вас на кожному полиці! "),(0,r._)("p",{class:"home__text"},'З любов\'ю, "Орбіта"!')],-1),m=(0,r._)("div",{class:"home__logo"},[(0,r._)("img",{src:d,alt:"logo"})],-1);function f(e,t,n,o,i,s){const a=(0,r.up)("main-masterpage");return(0,r.wg)(),(0,r.j4)(a,null,{"right-footer":(0,r.w5)((()=>[m])),default:(0,r.w5)((()=>[p])),_:1})}var h=n(8453),g={name:"HomePage",components:{MainMasterpage:h.Z}};const _=(0,s.Z)(g,[["render",f]]);var v=_;const b=[{path:"/",name:"home",component:v},{path:"/products",name:"products",component:()=>n.e(949).then(n.bind(n,1949)),children:[{path:"/selector",name:"selector",components:{filter:()=>n.e(626).then(n.bind(n,9626)),default:()=>n.e(270).then(n.bind(n,4270))}},{path:"/editor",name:"editor",component:()=>n.e(100).then(n.bind(n,3100))}]},{path:"/suppliers",name:"suppliers",component:()=>n.e(906).then(n.bind(n,8906))},{path:"/contacts",name:"contacts",component:()=>n.e(944).then(n.bind(n,4944))},{path:"/rules",name:"rules",component:()=>n.e(966).then(n.bind(n,5966))}],y=(0,l.p7)({history:(0,l.PO)("/vue-home-task-lesson-14/"),routes:b});var k=y,w=n(3907);n(560);function S(e,t){return!t||t.toLowerCase()===e.toLowerCase()}var x={namespaced:!0,state:{productsList:[{id:1,title:"Спагеті",price:52,imgSrc:"https://content2.rozetka.com.ua/goods/images/big/60556987.jpg"},{id:2,title:"Сир Чеддер",price:298,imgSrc:"https://content2.rozetka.com.ua/goods/images/big/180512103.png"},{id:3,title:"Салямі",price:665,imgSrc:"https://content1.rozetka.com.ua/goods/images/big/39212067.png"},{id:4,title:"Хліб",price:32,imgSrc:"https://content1.rozetka.com.ua/goods/images/big/173133475.png"}],searchedText:null},getters:{productsList:e=>e.productsList,filteredProductsList:e=>e.productsList.filter((t=>S(t.title,e.searchedText)))},mutations:{addProduct(e,t){e.productsList.push(t)},setSearchedText(e,t){e.searchedText=t}},actions:{addProduct({commit:e},t){e("addProduct",{id:Date.now(),...t})},setSearchedText({commit:e},t){e("setSearchedText",t)}}},C={namespaced:!0,state:{suppliersList:[{id:1,title:"Політ",imgSrc:"https://pngbuy.com/wp-content/uploads/2023/08/butterfly-png-3-400x400.png",deliveryMethodIcons:[["fas","plane"],["fas","car"]]},{id:2,title:"Надійність",imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1280px-Superman_shield.svg.png",deliveryMethodIcons:[["fas","plane"],["fas","car"],["fas","motorcycle"]]},{id:3,title:"Швидка",imgSrc:"https://upload.wikimedia.org/wikipedia/uk/6/66/Detroit_Red_Wings.png",deliveryMethodIcons:[["fas","car"],["fas","bicycle"],["fas","motorcycle"]]},{id:4,title:"Економ",imgSrc:"https://www.psdstamps.com/wp-content/uploads/2019/11/grunge-best-price-label-png.png",deliveryMethodIcons:[["fas","bicycle"],["fas","motorcycle"]]}]},getters:{suppliersList:e=>e.suppliersList},mutations:{},actions:{}},L=(0,w.MT)({state:{},getters:{},mutations:{},actions:{},modules:{products:x,suppliers:C}}),O=n(3636),T=n(7810),j=n(3024),P=n(9417),E=n(4288),M=n(4411);O.vI.add(j.vnX,P.mRB,E.NCV),(0,M.z2)(),(0,o.ri)(u).use(L).use(k).component("font-awesome-icon",T.GN).mount("#app")},8453:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(6252),r=n(5522);const i=e=>((0,o.dD)("data-v-5aa8c719"),e=e(),(0,o.Cn)(),e),s={class:"page"},a={class:"page__header header"},c=i((()=>(0,o._)("div",{class:"header__logo"},[(0,o._)("img",{src:r})],-1))),u={class:"header__menu menu"},l={class:"menu__body"},d={class:"menu__list"},p={class:"menu__item"},m={class:"menu__item"},f={class:"menu__item"},h={class:"menu__item"},g={class:"menu__item"},_={class:"page__main main"},v={class:"page__footer footer"},b=i((()=>(0,o._)("div",{class:"footer__left-side"},"Рейтинг магазину: 1",-1))),y=i((()=>(0,o._)("div",{class:"footer__right-side"},"Статус: відкрито",-1)));function k(e,t,n,r,i,k){const w=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",a,[c,(0,o._)("div",u,[(0,o._)("nav",l,[(0,o._)("ul",d,[(0,o._)("li",p,[(0,o.Wm)(w,{class:"menu__link",to:{name:"home"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Головна")])),_:1})]),(0,o._)("li",m,[(0,o.Wm)(w,{class:"menu__link",to:{name:"selector"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Товари")])),_:1})]),(0,o._)("li",f,[(0,o.Wm)(w,{class:"menu__link",to:{name:"suppliers"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Постачальники")])),_:1})]),(0,o._)("li",h,[(0,o.Wm)(w,{class:"menu__link",to:{name:"contacts"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Контакти")])),_:1})]),(0,o._)("li",g,[(0,o.Wm)(w,{class:"menu__link",to:{name:"rules"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Правила купівлі")])),_:1})])])])])]),(0,o._)("div",_,[(0,o.WI)(e.$slots,"default",{},void 0,!0)]),(0,o._)("div",v,[(0,o.WI)(e.$slots,"left-footer",{},(()=>[b]),!0),(0,o.WI)(e.$slots,"right-footer",{},(()=>[y]),!0)])])}var w={name:"MainMasterpage"},S=n(3744);const x=(0,S.Z)(w,[["render",k],["__scopeId","data-v-5aa8c719"]]);var C=x},5522:function(e,t,n){e.exports=n.p+"img/logo.f35a8657.svg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{100:"b6072e41",270:"3d83bc52",626:"f6a21906",906:"42be645c",944:"1d773abd",949:"b4674818",966:"fb623cce"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{100:"2a4d6337",270:"66b7096e",626:"1fbd6ea2",906:"cdd3bee5",944:"3585060e",949:"e40f125c",966:"74f828e1"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-home-task-lesson-14:";n.l=function(o,r,i,s){if(e[o])e[o].push(r);else{var a,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var p=function(t,n){a.onerror=a.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue-home-task-lesson-14/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var s=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=a,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=s,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var s=n.miniCssF(o),a=n.p+s;if(t(s,a))return r();e(o,a,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={100:1,270:1,626:1,906:1,944:1,949:1,966:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var s=n.p+n.u(t),a=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],a=o[1],c=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var l=c(n)}for(t&&t(o);u<s.length;u++)i=s[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkvue_home_task_lesson_14"]=self["webpackChunkvue_home_task_lesson_14"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8073)}));o=n.O(o)})();
//# sourceMappingURL=app.e4d3449a.js.map