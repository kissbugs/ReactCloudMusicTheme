(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{483:function(e,t,a){"use strict";a.r(t),function(e){a(150),a(151),a(152),a(233),a(69),a(146),a(234),a(147),a(145),a(86),a(106),a(236),a(107),a(235),a(153);var o,r=a(0),n=a.n(r),i=a(148),s=a(155),c=a(487),l=a(512);function d(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],o=!0,r=!1,n=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(e){r=!0,n=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw n}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var p,h,f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=Object(r.memo)(f((function(e){var t=Object.assign({},e);console.log("Search_props: ",t);var a=t.hotKeyWordsList,o=(t.searchSuggestList,t.searchResultSongsList),i=t.getHotKeyWordsListDispatch,s=t.getSearchSuggestListDispatch,c=t.getSearchResultSongsListDispatch,d=u(Object(r.useState)(""),2),p=d[0],h=d[1],f=u(Object(r.useState)(""),2),g=f[0],v=f[1];Object(r.useEffect)((function(){a.length||p||i()}),[!p]);var y=Object(r.useCallback)((function(){t.history.goBack()}),[]),x=Object(r.useCallback)((function(e){var t=e.currentTarget.getAttribute("data-name");console.log("name_name: ",t),v(t),t&&""!=t&&(s(t),c(t))}),[]);return n.a.createElement(l.b,{className:"animated ".concat("/search"==window.location.pathname?"rollIn":"rollOut")},n.a.createElement(m,{inputValue:p,handleBack:y,handleInputChange:function(e){var t=e.target.value;v(""),h(t),t&&""!=t&&(s(t),c(t))},searchSuggestName:g}),a.length>0&&n.a.createElement(b,{hotKeyWordsList:a,handleSearchSuggest:x,show:p||g}),n.a.createElement("div",{className:"search_input_container clear_scroll_bar"},o&&o.length?(console.log("searchResultSongsList----liwei : ",o),n.a.createElement("div",{className:"render_search_songs"},o.map((function(e,t){return"name"in e?n.a.createElement("div",{className:"search_songs",key:t},n.a.createElement("div",null,n.a.createElement("div",{className:"song_name"},e.name),n.a.createElement("div",{className:"song_description"},n.a.createElement("span",null,"".concat(e.artists[0].name))," - ".concat(e.album.name||"".concat(e.name)))),n.a.createElement("i",{className:"iconfont lef_menu"},"")):""})))):""))}),'useState{[inputValue, setInputValue]("")}\nuseState{[searchSuggestName, setSearchSuggestName]("")}\nuseEffect{}\nuseCallback{handleBack}\nuseCallback{handleSearchSuggest}')),m=Object(r.memo)(f((function(e){var t=Object.assign({},e),a=t.inputValue,o=t.handleBack,i=t.handleInputChange,s=t.searchSuggestName,c=Object(r.useRef)();return Object(r.useEffect)((function(){c.current.focus()}),[]),n.a.createElement(l.c,null,n.a.createElement("input",{type:"text",ref:c,placeholder:"输入歌曲、歌手",value:a||s,onChange:i}),n.a.createElement(l.a,{className:"icon_back",onClick:o},"取消"))}),"useRef{queryRef}\nuseEffect{}")),b=Object(r.memo)((function(e){var t=Object.assign({},e),a=t.hotKeyWordsList,o=t.handleSearchSuggest,r=t.show,i=a.map((function(e){return Object.assign({},e)}));i&&i.length>0&&i.map((function(e,t){return e.originIndex=t}));for(var s=d(i),c=[];s.length;){var u=s.splice(0,2);c.push({value:u})}return n.a.createElement(l.d,{className:"clear_scroll_bar",show:r},n.a.createElement("div",{className:"title"},"热门搜索"),n.a.createElement("div",{className:"popular_search_list"},c.map((function(e,t){return n.a.createElement("ul",{className:"single_search_list",key:t},e.value.map((function(e,t){return n.a.createElement(v,{key:t,songList:e,handleSearchSuggest:o})})))}))))})),v=Object(r.memo)((function(e){var t=e.songList,a=e.handleSearchSuggest;return n.a.createElement("li",{"data-name":t.searchWord,onClick:a},n.a.createElement("div",{className:"list_index ".concat(t.originIndex<4?"hot_song":"")},t.originIndex+1),n.a.createElement("div",{className:"search_content"},n.a.createElement("div",{className:"song_name_box"},n.a.createElement("div",{className:"song_name"},t.searchWord),n.a.createElement("img",{src:t.iconUrl,alt:""})),n.a.createElement("div",{className:"song_description"},t.content)))})),y=function(e){return console.log("---liwei---state: ",e),{hotKeyWordsList:e.search.hotKeyWordsList,searchSuggestList:e.search.searchSuggestList,searchResultSongsList:e.search.searchResultSongsList}},x=function(e){return{getHotKeyWordsListDispatch:function(){Object(c.a)(e(s.a()))},getSearchSuggestListDispatch:function(t){Object(c.a)(e(s.c(t)))},getSearchResultSongsListDispatch:function(t){Object(c.a)(e(s.b(t)))}}},w=Object(i.b)(y,x)(g);t.default=w,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var a=void 0!==t?t:exports;if(a)if("function"!=typeof a){for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){var r=void 0;try{r=a[o]}catch(e){continue}e.register(r,o,"/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/index.jsx")}}else e.register(a,"module.exports","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/index.jsx")}}(),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(g,"Search","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/index.jsx"),p.register(m,"SearchSongInput","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/index.jsx"),p.register(b,"PopularSearch","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/index.jsx"),p.register(v,"LiSection","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/index.jsx"),p.register(y,"mapStateToProps","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/index.jsx"),p.register(x,"mapDispatchToProps","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/index.jsx"),p.register(w,"default","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/index.jsx")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}.call(this,a(12)(e))},487:function(e,t,a){"use strict";(function(e){var o;a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s})),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,n,i=function(e){return"".concat(Math.floor(e/1e4),"万")},s=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){for(var o=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];t&&clearTimeout(t),t=setTimeout((function(){e.apply(o,n),clearTimeout(t)}),a)}};!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var a=void 0!==t?t:exports;if(a)if("function"!=typeof a){for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){var r=void 0;try{r=a[o]}catch(e){continue}e.register(r,o,"/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/api/helper.js")}}else e.register(a,"module.exports","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/api/helper.js")}}(),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(i,"playCount","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/api/helper.js"),r.register(s,"debounce","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/api/helper.js")),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,a(12)(e))},512:function(e,t,a){"use strict";(function(e){a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return d}));var o,r=a(26);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n,i,s=r.b.div.withConfig({displayName:"style__SearchContainer"})(["color:#fff;position:fixed;top:0px;left:0px;right:0px;bottom:0px;width:100%;z-index:100;transform-origin:right bottom;overflow:hidden;background:#151618;@media screen and (min-width:1024px){max-width:500px;margin:0 auto;}.search_input_container{margin:0 15px;height:calc(95vh - 60px);overflow-x:hidden;overflow-y:scroll;.render_search_songs{.search_songs{padding:12px 0;border-bottom:1px solid #333;font-weight:300;display:flex;justify-content:space-between;align-items:center;&:last-child{border-bottom:none;}.song_name{padding-bottom:7px;}.song_description{font-size:12px;span{color:blue;font-size:12px;color:#2288e4;}}}}}"]),c=r.b.div.withConfig({displayName:"style__SearchSongInputContainer"})(["display:flex;align-items:center;padding:15px;height:60px;input{padding:10px 0 10px 10px;border:none;outline:none;font-size:13px;border-radius:50px;width:80%;background:#212121;color:#5d5d5d;}input::-webkit-input-placeholder{color:#5d5d5d;}input::-moz-placeholder{color:#5d5d5d;}input::-moz-placeholder{color:#5d5d5d;}input:-ms-input-placeholder{color:#5d5d5d;}"]),l=r.b.div.withConfig({displayName:"style__IconBack"})(["padding:0 10px;"]),d=r.b.div.withConfig({displayName:"style__SopularSearchBox"})(["margin:0 15px;height:calc(95vh - 60px);overflow-x:hidden;overflow-y:scroll;display:",";.title{padding-bottom:20px;}.popular_search_list{ul.single_search_list{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;li{display:flex;align-items:center;.list_index{padding-right:15px;}.hot_song{color:#cc3333;font-size:17px;font-weight:700;}.search_content{.song_name_box{display:flex;.song_name{max-width:100px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:14px;padding-bottom:10px;}img{height:14px;display:block;margin-left:10px;}}.song_description{font-size:12px;color:#5d5d5d;width:150px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}}}}}"],(function(e){return e.show?"none":null}));!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var a=void 0!==t?t:exports;if(a)if("function"!=typeof a){for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){var r=void 0;try{r=a[o]}catch(e){continue}e.register(r,o,"/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/style.js")}}else e.register(a,"module.exports","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/style.js")}}(),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(n.register(s,"SearchContainer","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/style.js"),n.register(c,"SearchSongInputContainer","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/style.js"),n.register(l,"IconBack","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/style.js"),n.register(d,"SopularSearchBox","/Users/liwei/Desktop/CODE/ReactCloudMusicTheme/src/application/Search/style.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a(12)(e))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU2VhcmNoL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU2VhcmNoL3N0eWxlLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImhvdEtleVdvcmRzTGlzdCIsImxlbmd0aCIsImlucHV0VmFsdWUiLCJnZXRIb3RLZXlXb3Jkc0xpc3REaXNwYXRjaCIsImhpc3RvcnkiLCJnb0JhY2siLCJuYW1lIiwic2V0U2VhcmNoU3VnZ2VzdE5hbWUiLCJnZXRTZWFyY2hTdWdnZXN0TGlzdERpc3BhdGNoIiwiZ2V0U2VhcmNoUmVzdWx0U29uZ3NMaXN0RGlzcGF0Y2giLCJjbGFzc05hbWUiLCJzZXRJbnB1dFZhbHVlIiwidmFsdWUiLCJzZWFyY2hSZXN1bHRTb25nc0xpc3QiLCJxdWVyeVJlZiIsImN1cnJlbnQiLCJmb2N1cyIsIm5ld0hvdEtleVdvcmRzTGlzdCIsIm1hcCIsImNvcHkiLCJzcGxpdGVkSG90S2V5V29yZHNMaXN0IiwicHVzaCIsInNsaWNlZCIsInN0YXRlIiwic2VhcmNoIiwic2VhcmNoU3VnZ2VzdExpc3QiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJmdW5jIiwiYXBwbHkiXSwibWFwcGluZ3MiOiJveUNBTUEsMERBQ0VBLFFBQVFDLElBQUksaUJBQWtCQyxHQURoQyxJQUVBLG9FQUVBLEVBR0EsRUFIQSwyQkFDQSxFQUVBLEVBRkEsNkJBQ0EsRUFDQSxFQURBLGlDQU5BLElBU0EsdUJBVEEsR0FTQSxFQVRBLEtBU0EsRUFUQSxTQVVBLHVCQVZBLEdBVUEsRUFWQSxLQVVBLEVBVkEsS0FxQkUsT0FBRixZQUFFLEVBQUYsV0FDU0MsRUFBZ0JDLFFBQVdDLEdBQzlCQyxNQUlOLE1BRUUsSUFBRixvQ0FDSUosRUFBTUssUUFBUUMsV0FDbEIsSUFFQSxxQ0FDSSxJQUFKLDRD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ImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi9zdG9yZS9hY3Rpb25DcmVhdG9ycy5qc1wiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vLi4vYXBpL2hlbHBlclwiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZS5qc1wiO1xuXG5jb25zdCBTZWFyY2ggPSBtZW1vKCh7IC4uLnByb3BzIH0pID0+IHtcbiAgY29uc29sZS5sb2coXCJTZWFyY2hfcHJvcHM6IFwiLCBwcm9wcyk7XG4gIGNvbnN0IHsgaG90S2V5V29yZHNMaXN0LCBzZWFyY2hTdWdnZXN0TGlzdCwgc2VhcmNoUmVzdWx0U29uZ3NMaXN0IH0gPSBwcm9wcztcbiAgY29uc3Qge1xuICAgIGdldEhvdEtleVdvcmRzTGlzdERpc3BhdGNoLFxuICAgIGdldFNlYXJjaFN1Z2dlc3RMaXN0RGlzcGF0Y2gsXG4gICAgZ2V0U2VhcmNoUmVzdWx0U29uZ3NMaXN0RGlzcGF0Y2hcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VhcmNoU3VnZ2VzdE5hbWUsIHNldFNlYXJjaFN1Z2dlc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gZSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRTZWFyY2hTdWdnZXN0TmFtZShcIlwiKTtcbiAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgIT0gXCJcIikge1xuICAgICAgZ2V0U2VhcmNoU3VnZ2VzdExpc3REaXNwYXRjaCh2YWx1ZSk7XG4gICAgICBnZXRTZWFyY2hSZXN1bHRTb25nc0xpc3REaXNwYXRjaCh2YWx1ZSk7XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaG90S2V5V29yZHNMaXN0Lmxlbmd0aCAmJiAhaW5wdXRWYWx1ZSkge1xuICAgICAgZ2V0SG90S2V5V29yZHNMaXN0RGlzcGF0Y2goKTtcbiAgICB9XG4gICAgLy8gZ2V0U2VhcmNoU3VnZ2VzdExpc3REaXNwYXRjaCgpO1xuICAgIC8vIGdldFNlYXJjaFJlc3VsdFNvbmdzTGlzdERpc3BhdGNoKCk7XG4gIH0sIFshaW5wdXRWYWx1ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcHJvcHMuaGlzdG9yeS5nb0JhY2soKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaFN1Z2dlc3QgPSB1c2VDYWxsYmFjayhlID0+IHtcbiAgICBsZXQgbmFtZSA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XG4gICAgY29uc29sZS5sb2coXCJuYW1lX25hbWU6IFwiLCBuYW1lKTtcbiAgICBzZXRTZWFyY2hTdWdnZXN0TmFtZShuYW1lKTtcbiAgICBpZiAobmFtZSAmJiBuYW1lICE9IFwiXCIpIHtcbiAgICAgIGdldFNlYXJjaFN1Z2dlc3RMaXN0RGlzcGF0Y2gobmFtZSk7XG4gICAgICBnZXRTZWFyY2hSZXN1bHRTb25nc0xpc3REaXNwYXRjaChuYW1lKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBjb25zdCByZW5kZXJTZWFyY2hTaW5nZXJzID0gKCkgPT4ge1xuICAvLyAgIC8vIOebuOWFs+atjOaJi1xuICAvLyAgIGNvbnN0IHNlYXJjaFN1Z2dlc3RMaXN0ID0gc2VhcmNoU3VnZ2VzdExpc3QuYXJ0aXN0cztcbiAgLy8gICBpZiAoIXNlYXJjaFN1Z2dlc3RMaXN0IHx8ICFzZWFyY2hTdWdnZXN0TGlzdC5sZW5ndGgpIHJldHVybiBcIlwiO1xuICAvLyAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJlbmRlcl9zZWFyY2hfc2luZ2Vyc1wiPua4suafk+atjOWNlTwvZGl2PjtcbiAgLy8gfTtcbiAgLy8gY29uc3QgcmVuZGVyU2VhcmNoQWxidW0gPSAoKSA9PiB7XG4gIC8vICAgLy8g55u45YWz5q2M5Y2VXG4gIC8vICAgY29uc3Qgc2VhcmNoU3VnZ2VzdExpc3QgPSBzZWFyY2hTdWdnZXN0TGlzdC5wbGF5bGlzdHM7XG4gIC8vICAgaWYgKCFzZWFyY2hTdWdnZXN0TGlzdCB8fCAhc2VhcmNoU3VnZ2VzdExpc3QubGVuZ3RoKSByZXR1cm4gXCJcIjtcbiAgLy8gICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyZW5kZXJfc2VhcmNoX3NpbmdlcnNcIj7muLLmn5PmrYzljZU8L2Rpdj47XG4gIC8vIH07XG4gIGNvbnN0IHJlbmRlclNlYXJjaFNvbmdzID0gKCkgPT4ge1xuICAgIC8vIOebuOWFs+atjOabslxuICAgIGlmICghc2VhcmNoUmVzdWx0U29uZ3NMaXN0IHx8ICFzZWFyY2hSZXN1bHRTb25nc0xpc3QubGVuZ3RoKSByZXR1cm4gXCJcIjtcbiAgICBjb25zb2xlLmxvZyhcInNlYXJjaFJlc3VsdFNvbmdzTGlzdC0tLS1saXdlaSA6IFwiLCBzZWFyY2hSZXN1bHRTb25nc0xpc3QpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbmRlcl9zZWFyY2hfc29uZ3NcIj5cbiAgICAgICAge3NlYXJjaFJlc3VsdFNvbmdzTGlzdC5tYXAoKHNvbmcsIGluZGV4KSA9PlxuICAgICAgICAgICEoXCJuYW1lXCIgaW4gc29uZykgPyAoXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX3NvbmdzXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb25nX25hbWVcIj57c29uZy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29uZ19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2Ake3NvbmcuYXJ0aXN0c1swXS5uYW1lfWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAge2AgLSAke3NvbmcuYWxidW0ubmFtZSB8fCBgJHtzb25nLm5hbWV9YH1gfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbmZvbnQgbGVmX21lbnVcIj4mI3hlNjA5OzwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICAvLyBib3VuY2VJbkRvd25cbiAgICA8Uy5TZWFyY2hDb250YWluZXJcbiAgICAgIGNsYXNzTmFtZT17YGFuaW1hdGVkICR7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9zZWFyY2hcIiA/IFwicm9sbEluXCIgOiBcInJvbGxPdXRcIlxuICAgICAgfWB9XG4gICAgPlxuICAgICAgPFNlYXJjaFNvbmdJbnB1dFxuICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICBoYW5kbGVCYWNrPXtoYW5kbGVCYWNrfVxuICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIHNlYXJjaFN1Z2dlc3ROYW1lPXtzZWFyY2hTdWdnZXN0TmFtZX1cbiAgICAgIC8+XG4gICAgICB7aG90S2V5V29yZHNMaXN0Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8UG9wdWxhclNlYXJjaFxuICAgICAgICAgIGhvdEtleVdvcmRzTGlzdD17aG90S2V5V29yZHNMaXN0fVxuICAgICAgICAgIGhhbmRsZVNlYXJjaFN1Z2dlc3Q9e2hhbmRsZVNlYXJjaFN1Z2dlc3R9XG4gICAgICAgICAgc2hvdz17aW5wdXRWYWx1ZSB8fCBzZWFyY2hTdWdnZXN0TmFtZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaF9pbnB1dF9jb250YWluZXIgY2xlYXJfc2Nyb2xsX2JhclwiPlxuICAgICAgICB7Lyoge3JlbmRlclNlYXJjaFNpbmdlcnMoKX0gKi99XG4gICAgICAgIHsvKiB7cmVuZGVyU2VhcmNoQWxidW0oKX0gKi99XG4gICAgICAgIHtyZW5kZXJTZWFyY2hTb25ncygpfVxuICAgICAgPC9kaXY+XG4gICAgPC9TLlNlYXJjaENvbnRhaW5lcj5cbiAgKTtcbn0pO1xuXG5jb25zdCBTZWFyY2hTb25nSW5wdXQgPSBtZW1vKCh7IC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlucHV0VmFsdWUsXG4gICAgaGFuZGxlQmFjayxcbiAgICBoYW5kbGVJbnB1dENoYW5nZSxcbiAgICBzZWFyY2hTdWdnZXN0TmFtZVxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHF1ZXJ5UmVmID0gdXNlUmVmKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcXVlcnlSZWYuY3VycmVudC5mb2N1cygpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPFMuU2VhcmNoU29uZ0lucHV0Q29udGFpbmVyPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcmVmPXtxdWVyeVJlZn1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCLovpPlhaXmrYzmm7LjgIHmrYzmiYtcIlxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZSB8fCBzZWFyY2hTdWdnZXN0TmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgLz5cbiAgICAgIDxTLkljb25CYWNrIGNsYXNzTmFtZT1cImljb25fYmFja1wiIG9uQ2xpY2s9e2hhbmRsZUJhY2t9PlxuICAgICAgICDlj5bmtohcbiAgICAgIDwvUy5JY29uQmFjaz5cbiAgICA8L1MuU2VhcmNoU29uZ0lucHV0Q29udGFpbmVyPlxuICApO1xufSk7XG5cbmNvbnN0IFBvcHVsYXJTZWFyY2ggPSBtZW1vKCh7IC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBob3RLZXlXb3Jkc0xpc3QsIGhhbmRsZVNlYXJjaFN1Z2dlc3QsIHNob3cgfSA9IHByb3BzO1xuXG4gIC8vIOWkhOeQhuWvueixoeWPr+S7peiiq+aLk+WxlVxuICBsZXQgbmV3SG90S2V5V29yZHNMaXN0ID0gaG90S2V5V29yZHNMaXN0Lm1hcChpdGVtID0+IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pKTtcbiAgaWYgKG5ld0hvdEtleVdvcmRzTGlzdCAmJiBuZXdIb3RLZXlXb3Jkc0xpc3QubGVuZ3RoID4gMCkge1xuICAgIG5ld0hvdEtleVdvcmRzTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoaXRlbS5vcmlnaW5JbmRleCA9IGluZGV4KSk7XG4gIH1cblxuICBjb25zdCBjb3B5ID0gWy4uLm5ld0hvdEtleVdvcmRzTGlzdF07XG4gIGNvbnN0IHNwbGl0ZWRIb3RLZXlXb3Jkc0xpc3QgPSBbXTtcbiAgd2hpbGUgKGNvcHkubGVuZ3RoKSB7XG4gICAgY29uc3Qgc2xpY2VkID0gY29weS5zcGxpY2UoMCwgMik7XG4gICAgc3BsaXRlZEhvdEtleVdvcmRzTGlzdC5wdXNoKHtcbiAgICAgIHZhbHVlOiBzbGljZWRcbiAgICB9KTtcbiAgfVxuICAvLyBjb25zb2xlLmxvZyhcIuWkhOeQhuWQjueahOaVsOaNrnNwbGl0ZWRIb3RLZXlXb3Jkc0xpc3Q6IFwiLCBzcGxpdGVkSG90S2V5V29yZHNMaXN0KTtcbiAgcmV0dXJuIChcbiAgICA8Uy5Tb3B1bGFyU2VhcmNoQm94IGNsYXNzTmFtZT1cImNsZWFyX3Njcm9sbF9iYXJcIiBzaG93PXtzaG93fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj7ng63pl6jmkJzntKI8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdWxhcl9zZWFyY2hfbGlzdFwiPlxuICAgICAgICB7c3BsaXRlZEhvdEtleVdvcmRzTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpbmdsZV9zZWFyY2hfbGlzdFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAge2l0ZW0udmFsdWUubWFwKChlbGUsIGluZCkgPT4gKFxuICAgICAgICAgICAgICA8TGlTZWN0aW9uXG4gICAgICAgICAgICAgICAga2V5PXtpbmR9XG4gICAgICAgICAgICAgICAgc29uZ0xpc3Q9e2VsZX1cbiAgICAgICAgICAgICAgICBoYW5kbGVTZWFyY2hTdWdnZXN0PXtoYW5kbGVTZWFyY2hTdWdnZXN0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1MuU29wdWxhclNlYXJjaEJveD5cbiAgKTtcbn0pO1xuXG5jb25zdCBMaVNlY3Rpb24gPSBtZW1vKCh7IHNvbmdMaXN0LCBoYW5kbGVTZWFyY2hTdWdnZXN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGkgZGF0YS1uYW1lPXtzb25nTGlzdC5zZWFyY2hXb3JkfSBvbkNsaWNrPXtoYW5kbGVTZWFyY2hTdWdnZXN0fT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgbGlzdF9pbmRleCAke3NvbmdMaXN0Lm9yaWdpbkluZGV4IDwgNCA/IFwiaG90X3NvbmdcIiA6IFwiXCJ9YH1cbiAgICAgID5cbiAgICAgICAge3NvbmdMaXN0Lm9yaWdpbkluZGV4ICsgMX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdfbmFtZV9ib3hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdfbmFtZVwiPntzb25nTGlzdC5zZWFyY2hXb3JkfTwvZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtzb25nTGlzdC5pY29uVXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb25nX2Rlc2NyaXB0aW9uXCI+e3NvbmdMaXN0LmNvbnRlbnR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICApO1xufSk7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgY29uc29sZS5sb2coXCItLS1saXdlaS0tLXN0YXRlOiBcIiwgc3RhdGUpO1xuICByZXR1cm4ge1xuICAgIGhvdEtleVdvcmRzTGlzdDogc3RhdGUuc2VhcmNoLmhvdEtleVdvcmRzTGlzdCxcbiAgICBzZWFyY2hTdWdnZXN0TGlzdDogc3RhdGUuc2VhcmNoLnNlYXJjaFN1Z2dlc3RMaXN0LFxuICAgIHNlYXJjaFJlc3VsdFNvbmdzTGlzdDogc3RhdGUuc2VhcmNoLnNlYXJjaFJlc3VsdFNvbmdzTGlzdFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIGdldEhvdEtleVdvcmRzTGlzdERpc3BhdGNoKCkge1xuICAgICAgZGVib3VuY2UoZGlzcGF0Y2goYWN0aW9uVHlwZXMuZ2V0SG90S2V5V29yZHMoKSkpO1xuICAgIH0sXG4gICAgZ2V0U2VhcmNoU3VnZ2VzdExpc3REaXNwYXRjaChkYXRhKSB7XG4gICAgICBkZWJvdW5jZShkaXNwYXRjaChhY3Rpb25UeXBlcy5nZXRTZWFyY2hTdWdnZXN0TGlzdChkYXRhKSkpO1xuICAgIH0sXG4gICAgZ2V0U2VhcmNoUmVzdWx0U29uZ3NMaXN0RGlzcGF0Y2goZGF0YSkge1xuICAgICAgZGVib3VuY2UoZGlzcGF0Y2goYWN0aW9uVHlwZXMuZ2V0U2VhcmNoUmVzdWx0U29uZ0xpc3QoZGF0YSkpKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWFyY2gpO1xuIiwiZXhwb3J0IGNvbnN0IHBsYXlDb3VudCA9IGNvdW50ID0+IHtcbiAgcmV0dXJuIGAke01hdGguZmxvb3IoY291bnQgLyAxMDAwMCl95LiHYFxufTtcblxuXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgZGVsYXkgPSA1MDApID0+IHtcbiAgbGV0IHRpbWVyO1xuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfVxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5leHBvcnQgY29uc3QgU2VhcmNoQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzE1MTYxODtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuc2VhcmNoX2lucHV0X2NvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgaGVpZ2h0OiBjYWxjKDk1dmggLSA2MHB4KTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIC5yZW5kZXJfc2VhcmNoX3NvbmdzIHtcbiAgICAgIC5zZWFyY2hfc29uZ3Mge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuc29uZ19uYW1lIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgICAgICB9XG4gICAgICAgIC5zb25nX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjI4OGU0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU2VhcmNoU29uZ0lucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBpbnB1dCB7XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIGJhY2tncm91bmQ6ICMyMTIxMjE7XG4gICAgY29sb3I6ICM1ZDVkNWQ7XG4gIH1cbiAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNWQ1ZDVkO1xuICB9XG4gIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzVkNWQ1ZDtcbiAgfVxuICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM1ZDVkNWQ7XG4gIH1cbiAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzVkNWQ1ZDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IEljb25CYWNrID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMCAxMHB4O1xuYFxuZXhwb3J0IGNvbnN0IFNvcHVsYXJTZWFyY2hCb3ggPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgMTVweDtcbiAgaGVpZ2h0OiBjYWxjKDk1dmggLSA2MHB4KTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGRpc3BsYXk6ICR7cHJvcHMgPT4gcHJvcHMuc2hvdyA/IFwibm9uZVwiIDogbnVsbH07XG4gIC50aXRsZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnBvcHVsYXJfc2VhcmNoX2xpc3Qge1xuICAgIHVsLnNpbmdsZV9zZWFyY2hfbGlzdCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5saXN0X2luZGV4IHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5ob3Rfc29uZyB7XG4gICAgICAgICAgY29sb3I6ICNjYzMzMzM7XG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaF9jb250ZW50IHtcbiAgICAgICAgICAuc29uZ19uYW1lX2JveCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLnNvbmdfbmFtZSB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zb25nX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNWQ1ZDVkO1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==