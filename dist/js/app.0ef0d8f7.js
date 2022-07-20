(function(){"use strict";var e={1596:function(e,t,n){n.d(t,{kt:function(){return A},IF:function(){return B},Xz:function(){return J},XP:function(){return H},HL:function(){return K},AJ:function(){return L},Ul:function(){return Y},QM:function(){return $},r4:function(){return U},Qv:function(){return D},TW:function(){return M},Sx:function(){return q},Yy:function(){return R},U5:function(){return C},Zf:function(){return Q},TY:function(){return X},ry:function(){return V},sk:function(){return N},Fo:function(){return z},fo:function(){return G},YY:function(){return F},r0:function(){return W}});n(4920);var r=n(8848),o=axios,u=n.n(o),a=n(4239),i=n(2686);const s=u().create({baseURL:"http://www.liulongbin.top:8000"});s.interceptors.request.use((e=>(r.Z.loading({message:"加载中...",duration:0}),e)),(e=>Promise.reject(e))),s.interceptors.request.use((e=>{const t=a.Z.state.tokenInfo.token;return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((e=>(r.Z.clear(),e)),(e=>(r.Z.clear(),e.response&&401===e.response.status&&(console.log("token 过期啦"),a.Z.commit("cleanState"),i.Z.replace(`/login?pre=${i.Z.currentRoute.fullPath}`)),Promise.reject(e))));var c=s;const f=e=>c({method:"POST",url:"/v1_0/authorizations",data:e}),l=()=>c({url:"/v1_0/user"}),d=()=>c({url:"/v1_0/user/profile"}),p=e=>c({url:"/v1_0/user/profile",method:"PATCH",data:e}),m=e=>c({url:"/v1_0/user/photo",method:"PATCH",data:e}),h=()=>c({url:"/v1_0/user/channels"}),v=(e,t)=>c({url:"/v1_0/articles",params:{channel_id:e,timestamp:t}}),g=e=>c({url:"/v1_0/article/dislikes",method:"POST",data:{target:e}}),b=(e,t)=>c({method:"POST",url:"/v1_0/article/reports",data:{target:e,type:t}}),y=()=>c({url:"/v1_0/channels"}),Z=e=>c({url:"/v1_0/user/channels",method:"PUT",data:{channels:e}}),S=e=>c({url:`/v1_0/articles/${e}`}),T=e=>c({url:"/v1_0/user/followings",method:"POST",data:{target:e}}),_=e=>c({method:"DELETE",url:`/v1_0/user/followings/${e}`}),k=e=>c({method:"POST",url:"/v1_0/article/likings",data:{target:e}}),w=e=>c({method:"DELETE",url:`/v1_0/article/likings/${e}`}),P=(e,t)=>c({url:"/v1_0/comments",params:{type:"a",source:e,offset:t}}),O=e=>c({url:"/v1_0/comment/likings",method:"POST",data:{target:e}}),E=e=>c({method:"DELETE",url:`/v1_0/comment/likings/${e}`}),j=(e,t)=>c({method:"POST",url:"/v1_0/comments",data:{target:e,content:t}}),x=e=>c({url:"/v1_0/suggestion",params:{q:e}}),I=(e,t)=>c.get("/v1_0/search",{params:{q:e,page:t}}),A=f,C=h,U=v,L=g,N=b,$=y,F=Z,R=x,q=I,D=S,Y=T,z=_,B=k,H=w,M=P,J=O,K=E,V=j,Q=l,X=d,W=p,G=m},5673:function(e,t,n){n(8873);var r=n(8709),o=(n(6758),n(4639)),u=(n(8618),n(5705)),a=(n(2864),n(4814)),i=(n(2186),n(8889)),s=(n(9649),n(1765)),c=(n(7057),n(6812)),f=(n(1424),n(6450)),l=(n(4285),n(6790)),d=(n(1287),n(5947)),p=(n(3891),n(6811)),m=(n(7234),n(5650)),h=(n(7582),n(1878)),v=(n(7037),n(4319)),g=(n(7983),n(4269)),b=(n(2406),n(9864)),y=(n(9578),n(6631)),Z=(n(2680),n(4995)),S=(n(6530),n(5094)),T=(n(4809),n(9858)),_=(n(3096),n(2628)),k=(n(4072),n(3481)),w=(n(4391),n(4398)),P=(n(1611),n(7061)),O=(n(3970),n(140)),E=(n(3255),n(797)),j=n(311),x=n.n(j),I=function(){var e=this,t=e._self._c;return t("div",[t("keep-alive",[t("router-view")],1)],1)},A=[],C={name:"App",data(){return{}}},U=C,L=n(1001),N=(0,L.Z)(U,I,A,!1,null,"7678a97e",null),$=N.exports,F=n(2686),R=n(4239),q=(n(3434),n(9212)),D=n.n(q),Y=n(893),z=n.n(Y),B=n(8212),H=n.n(B);x().use(E.Z),x().use(O.Z),x().use(P.Z),x().use(w.Z),x().use(k.Z),x().use(_.Z),x().use(T.Z),x().use(S.Z),x().use(Z.Z),x().use(y.Z),x().use(b.Z),x().use(g.Z),x().use(v.Z),x().use(h.Z),x().use(m.Z),x().use(p.Z),x().use(d.Z),x().use(l.Z),x().use(f.Z),x().use(c.Z),x().use(s.Z),x().use(i.Z),x().use(a.Z),x().use(u.Z),x().use(o.Z),x().use(r.Z),x().config.productionTip=!1,D().extend(z()),D().locale(H()),x().filter("dateFormat",(e=>D()().to(e))),new(x())({router:F.Z,store:R.Z,render:e=>e($)}).$mount("#app")},2686:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(311),o=n.n(r),u=VueRouter,a=n.n(u),i=n(4239);const s=()=>n.e(809).then(n.bind(n,6809)),c=()=>n.e(318).then(n.bind(n,2318)),f=()=>n.e(180).then(n.bind(n,8180)),l=()=>n.e(856).then(n.bind(n,7856)),d=()=>n.e(910).then(n.bind(n,8910)),p=()=>n.e(358).then(n.bind(n,3358)),m=()=>n.e(823).then(n.bind(n,5823)),h=()=>n.e(403).then(n.bind(n,2403)),v=()=>n.e(57).then(n.bind(n,9057));o().use(a());const g=a().prototype.push;a().prototype.push=function(e,t,n){return t||n?g.call(this,e,t,n):g.call(this,e).catch((e=>e))};const b=[{path:"/login",component:s,name:"login"},{path:"/",component:c,children:[{path:"",component:f,name:"home",meta:{isRecord:!0,top:0}},{path:"user",component:l,name:"user"}]},{path:"/search",component:d,name:"search"},{path:"/search/:kw",component:p,name:"search-result",props:!0,meta:{isRecord:!0,top:0}},{path:"/article/:id",component:m,name:"article-detail",props:!0,meta:{isRecord:!0,top:0}},{path:"/user/edit",component:h,name:"user-edit"},{path:"/chat",component:v,name:"chat"}],y=new(a())({routes:b}),Z=["/user","/user/edit"];y.beforeEach(((e,t,n)=>{if(-1!==Z.indexOf(e.path)){const t=i.Z.state.tokenInfo.token;t?n():n(`/login?pre=${e.fullPath}`)}else n()})),y.afterEach(((e,t)=>{e.meta.isRecord&&setTimeout((()=>{window.scrollTo(0,e.meta.top)}),0)}));var S=y},4239:function(e,t,n){var r=n(311),o=n.n(r),u=n(6294),a=n.n(u),i=n(1596);o().use(a());let s={tokenInfo:{},userInfo:{},userProfile:{}};const c=localStorage.getItem("state");c&&(s=JSON.parse(c)),t["Z"]=new(a().Store)({state:s,mutations:{updateTokenInfo(e,t){e.tokenInfo=t,this.commit("saveStateToStorage")},updateUserInfo(e,t){e.userInfo=t,this.commit("saveStateToStorage")},updataUserProfile(e,t){e.userProfile=t,this.commit("saveStateToStorage")},cleanState(e){e.tokenInfo={},e.userInfo={},e.userProfile={},this.commit("saveStateToStorage")},saveStateToStorage(e){localStorage.setItem("state",JSON.stringify(e))}},actions:{async initUserInfo(e){const{data:t}=await(0,i.Zf)();"OK"===t.message&&e.commit("updateUserInfo",t.data)},async initUserProfile(e){const{data:t}=await(0,i.TY)();"OK"===t.message&&e.commit("updataUserProfile",t.data)}},modules:{},getters:{userAvatar(e){let t="https://img.yzcdn.cn/vant/cat.jpeg";return e.userInfo.photo&&(t=e.userInfo.photo),t}}})},311:function(e){e.exports=Vue},6294:function(e){e.exports=Vuex},9212:function(e){e.exports=dayjs},5253:function(e){e.exports=hljs},2924:function(e){e.exports=io},4094:function(e){e.exports=popmotion}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r].call(u.exports,u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,u){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],u=e[f][2];for(var i=!0,s=0;s<r.length;s++)(!1&u||a>=u)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(i=!1,u<a&&(a=u));if(i){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[r,o,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{57:"dd4d3937",180:"f03c0156",318:"479c7365",358:"7eb7be97",403:"d1b61bf6",809:"701f4602",823:"98dedef9",856:"8b8ad6f6",910:"a263d7b0"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{57:"79181637",180:"2a601ff7",358:"a7e7f62e",403:"b3d4e6e6",809:"47135447",823:"652b4fd5",856:"3fac4e28",910:"3d2b0de5"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="demo-toutiao:";n.l=function(r,o,u,a){if(e[r])e[r].push(o);else{var i,s;if(void 0!==u)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+u){i=l;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+u),i.src=r),e[r]=[o];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(u){if(o.onerror=o.onload=null,"load"===u.type)n();else{var a=u&&("load"===u.type?"missing":u.type),i=u&&u.target&&u.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=i,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=u,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],u=o.getAttribute("data-href");if(u===e||u===t)return o}},r=function(r){return new Promise((function(o,u){var a=n.miniCssF(r),i=n.p+a;if(t(a,i))return o();e(r,i,o,u)}))},o={143:0};n.f.miniCss=function(e,t){var n={57:1,180:1,358:1,403:1,809:1,823:1,856:1,910:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=u);var a=n.p+n.u(t),i=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,o[1](i)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,u,a=r[0],i=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var f=s(n)}for(t&&t(r);c<a.length;c++)u=a[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(f)},r=self["webpackChunkdemo_toutiao"]=self["webpackChunkdemo_toutiao"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5673)}));r=n.O(r)})();
//# sourceMappingURL=app.0ef0d8f7.js.map