"use strict";(self["webpackChunkdemo_toutiao"]=self["webpackChunkdemo_toutiao"]||[]).push([[358],{7393:function(t,e,a){a.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",[e("van-cell",{on:{click:function(e){return t.toArticleDetail(t.artId)}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"title-box"},[e("span",[t._v(t._s(t.article.title))]),1===t.article.cover.type?e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.article.cover.images[0],expression:"article.cover.images[0]"}],staticClass:"thumb",attrs:{alt:""}}):t._e()]),3===t.article.cover.type?e("div",{staticClass:"thumb-box"},t._l(t.article.cover.images,(function(t,a){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],key:a,staticClass:"thumb",attrs:{alt:""}})})),0):t._e()]},proxy:!0},{key:"label",fn:function(){return[e("div",{staticClass:"label-box"},[e("span",[t._v(t._s(t.article.aut_name)+"   "+t._s(t.article.comm_count)+"评论    "+t._s(t._f("dateFormat")(t.article.pubdate)))]),t.closable?e("van-icon",{attrs:{name:"cross","is-link":"",title:"基础用法"},on:{click:function(e){t.show=!0}}}):t._e()],1)]},proxy:!0}])}),e("van-action-sheet",{attrs:{"cancel-text":"取消",closeable:!1},on:{closed:function(e){t.isFirst=!0}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.isFirst?e("div",t._l(t.actions,(function(a){return e("van-cell",{key:a.name,staticClass:"center-title",attrs:{title:a.name,clickable:"","get-container":"body"},on:{click:function(e){return t.onCellClick(a.name)}}})})),1):e("div",[e("van-cell",{attrs:{title:"返回",clickable:"","title-class":"center-title"},on:{click:function(e){t.isFirst=!0}}}),t._l(t.reports,(function(a){return e("van-cell",{key:a.type,attrs:{title:a.label,clickable:"","title-class":"center-title"},on:{click:function(e){return t.reportArticle(a.type)}}})}))],2)])],1)},s=[],l=a(1596);const n=[{type:0,label:"其它问题"},{type:1,label:"标题夸张"},{type:2,label:"低俗色情"},{type:3,label:"错别字多"},{type:4,label:"旧闻重复"},{type:6,label:"内容不实"},{type:8,label:"侵权"},{type:5,label:"广告软文"},{type:7,label:"涉嫌违法犯罪"}];var r=n,c={name:"ArtItem",data(){return{show:!1,actions:[{name:"不感兴趣"},{name:"反馈垃圾内容"},{name:"拉黑作者"}],isFirst:!0,reports:r}},props:{article:{type:Object,required:!0},closable:{type:Boolean,default:!0}},methods:{async onCellClick(t){if("不感兴趣"===t){const{data:t}=await(0,l.AJ)(this.artId);"OK"===t.message&&this.$emit("remove-article",this.artId),this.show=!1}else"拉黑作者"===t?(console.log("拉黑作者"),this.show=!1):"反馈垃圾内容"===t&&(this.isFirst=!1)},async reportArticle(t){const{data:e}=await(0,l.sk)(this.artId,t);"OK"===e.message&&this.$emit("remove-article",this.artId),this.show=!1},toArticleDetail(t){this.$router.push({name:"article-detail",params:{id:t}})}},computed:{artId(){return this.article.art_id.toString()}}},o=c,u=a(1001),h=(0,u.Z)(o,i,s,!1,null,"449c95ef",null),d=h.exports},3358:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-result-container"},[e("van-nav-bar",{attrs:{title:"搜索结果","left-arrow":"",fixed:""},on:{"click-left":function(e){return t.$router.back()}}}),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多数据了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.searchList,(function(t){return e("art-item",{key:t.art_id.toString(),attrs:{article:t,closable:!1}})})),1)],1)},s=[],l=a(1596),n=a(7393),r={name:"SearchResult",props:{kw:{type:String}},data(){return{page:1,searchList:[],loading:!1,finished:!1}},methods:{async initSearchList(){const{data:t}=await(0,l.Sx)(this.kw,this.page);"OK"===t.message&&(this.searchList=[...this.searchList,...t.data.results],this.loading=!1,0===t.data.results.length&&(this.finished=!0),this.page+=1)},onLoad(){this.initSearchList()}},components:{ArtItem:n.Z},created(){this.initSearchList()},watch:{kw(){this.page=1,this.searchList=[],this.loading=!1,this.finished=!1,this.initSearchList()}},beforeRouteLeave(t,e,a){e.meta.top=window.scrollY,setTimeout((()=>{a()}),0)}},c=r,o=a(1001),u=(0,o.Z)(c,i,s,!1,null,"501a7d7b",null),h=u.exports}}]);
//# sourceMappingURL=358.7eb7be97.js.map