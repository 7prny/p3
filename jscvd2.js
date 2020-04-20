(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[0],{118:function(e,a,t){e.exports=t(148)},124:function(e,a,t){},148:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(82),i=t.n(r),c=t(7),l=t(20),o=t(10),m=(t(124),t(12)),d=t.n(m),p=t(19),g=t(1),u=t(83),h=t.n(u);var v=function(e){var a=Object(n.useState)(e.state),t=Object(g.a)(a,2),r=t[0],i=t[1];return Object(n.useEffect)((function(){i(e.state)}),[e.state]),s.a.createElement(s.a.Fragment,null,s.a.createElement("tr",{className:e.total?"state is-total":"state",style:{background:e.index%2===0?"#f8f9fa":""}},s.a.createElement("td",{style:{fontWeight:600}},r.state_name),s.a.createElement("td",null,0===parseInt(r.totalConfirmed)?"-":r.totalConfirmed),s.a.createElement("td",{style:{color:0===parseInt(r.active)?"#B5B5B5":"inherit"}},parseInt(r.totalConfirmed)-parseInt(r.totalDeaths)-parseInt(r.totalRecovered)===0?"-":parseInt(r.totalConfirmed)-parseInt(r.totalDeaths)-parseInt(r.totalRecovered)),s.a.createElement("td",{style:{color:0===parseInt(r.totalRecovered)?"#B5B5B5":"inherit"}},0===parseInt(r.totalRecovered)?"-":r.totalRecovered),s.a.createElement("td",{style:{color:0===parseInt(r.totalDeaths)?"#B5B5B5":"inherit"}},0===parseInt(r.totalDeaths)?"-":r.totalDeaths)),s.a.createElement("tr",{className:"spacer",style:{display:e.reveal&&!e.total?"":"none"}},s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null)))};var b=function(e){var a=Object(n.useState)(e.states),t=Object(g.a)(a,2),r=t[0],i=t[1],c=Object(n.useState)({sortColumn:localStorage.getItem("state.sortColumn")?localStorage.getItem("state.sortColumn"):"totalConfirmed",isAscending:!!localStorage.getItem("state.isAscending")&&"true"===localStorage.getItem("state.isAscending")}),l=Object(g.a)(c,2),o=l[0],m=l[1];Object(n.useEffect)((function(){!0===e.summary?i(e.states.slice(0,9)):i(e.states)}),[e.states,e.summary]);var d=function(e,a){var t=e.currentTarget.querySelector("abbr").getAttribute("title").toLowerCase(),n=o.sortColumn===t?!o.isAscending:"state_name"===o.sortColumn;m({sortColumn:t,isAscending:n}),localStorage.setItem("state.sortColumn",t),localStorage.setItem("state.isAscending",n)};return console.log(o),r.sort((function(e,a){var t=o.sortColumn,n=e[t],s=a[t];return"state_name"!==t&&(n=parseInt(e[t]),s=parseInt(a[t])),o.isAscending?n>s||n===s&&e.state_name>a.state_name?1:-1:n<s||n===s&&e.state_name>a.state_name?1:-1})),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"MapExplorer"},s.a.createElement("div",{className:"header"},s.a.createElement("h1",{className:"padding-table"},"Statewise Distribution Covid-19"),s.a.createElement("h6",null,"COMPILED FROM STATE GOVT. NUMBERS KNOW MORE"))),s.a.createElement("table",{className:"table fadeInUp",style:{animationDelay:"1s"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"sticky state-heading",onClick:function(e){return d(e)}},s.a.createElement("div",{className:"heading-content"},s.a.createElement("abbr",{title:"State"},"State/UT"),s.a.createElement("div",{style:{display:"state_name"===o.sortColumn?"initial":"none"}},o.isAscending?s.a.createElement("div",{className:"arrow-up"}):s.a.createElement("div",{className:"arrow-down"})))),s.a.createElement("th",{className:"sticky",onClick:function(e){return d(e)}},s.a.createElement("div",{className:"heading-content"},s.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-cherry":""),title:"Confirmed"},window.innerWidth<=769?window.innerWidth<=375?"C":"Cnfmd":"Confirmed"),s.a.createElement("div",{style:{display:"totalConfirmed"===o.sortColumn?"initial":"none"}},o.isAscending?s.a.createElement("div",{className:"arrow-up"}):s.a.createElement("div",{className:"arrow-down"})))),s.a.createElement("th",{className:"sticky",onClick:function(e){return d(e)}},s.a.createElement("div",{className:"heading-content"},s.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-blue":""),title:"Active"},window.innerWidth<=769?window.innerWidth<=375?"A":"Actv":"Active"),s.a.createElement("div",{style:{display:"active"===o.sortColumn?"initial":"none"}},o.isAscending?s.a.createElement("div",{className:"arrow-up"}):s.a.createElement("div",{className:"arrow-down"})))),s.a.createElement("th",{className:"sticky",onClick:function(e){return d(e)}},s.a.createElement("div",{className:"heading-content"},s.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-green":""),title:"Recovered"},window.innerWidth<=769?window.innerWidth<=375?"R":"Rcvrd":"Recovered"),s.a.createElement("div",{className:"totalRecovered"===o.sortColumn?"sort-black":""}),s.a.createElement("div",{style:{display:"totalRecovered"===o.sortColumn?"initial":"none"}},o.isAscending?s.a.createElement("div",{className:"arrow-up"}):s.a.createElement("div",{className:"arrow-down"})))),s.a.createElement("th",{className:"sticky",onClick:function(e){return d(e)}},s.a.createElement("div",{className:"heading-content"},s.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-gray":""),title:"Deaths"},window.innerWidth<=769?window.innerWidth<=375?"D":"Dcsd":"Deceased"),s.a.createElement("div",{style:{display:"totalDeaths"===o.sortColumn?"initial":"none"}},o.isAscending?s.a.createElement("div",{className:"arrow-up"}):s.a.createElement("div",{className:"arrow-down"})))))),s.a.createElement("tbody",null,r&&r.length>1&&r.map((function(e,a){return e.totalConfirmed>0?s.a.createElement(v,{key:a,index:a,state:e,total:!1}):null}))),s.a.createElement("tbody",null,r.length>1&&!1===e.summary&&s.a.createElement(v,{key:0,state:r[0],total:!0}))))};var f=function(e){var a=Object(n.useState)(e.data),t=Object(g.a)(a,2),r=t[0],i=t[1],c=Object(n.useState)(0),l=Object(g.a)(c,2),o=l[0],m=l[1],d=Object(n.useState)(0),p=Object(g.a)(d,2),u=p[0],h=p[1],v=Object(n.useState)(0),b=Object(g.a)(v,2),f=b[0],E=b[1],y=Object(n.useState)(0),j=Object(g.a)(y,2),N=j[0],O=j[1];return Object(n.useEffect)((function(){i(e.data)}),[e.data]),Object(n.useEffect)((function(){!function(){var e,a=0,t=0,n=0;r.forEach((function(e,s){a+=parseInt(e.totalConfirmed),t+=parseInt(e.totalRecovered),n+=parseInt(e.totalDeaths)})),e=a-t-n,m(a),h(e),E(t),O(n)}()}),[r]),s.a.createElement("div",{className:"Level fadeInUp",style:{animationDelay:"0.8s"}},s.a.createElement("div",{className:"level-item is-cherry"},s.a.createElement("h5",null,"Confirmed"),s.a.createElement("h1",null,o," ")),s.a.createElement("div",{className:"level-item is-blue"},s.a.createElement("h5",{className:"heading"},"Active"),s.a.createElement("h1",{className:"title has-text-info"},u)),s.a.createElement("div",{className:"level-item is-green"},s.a.createElement("h5",{className:"heading"},"Recovered"),s.a.createElement("h1",{className:"title has-text-success"},f," ")),s.a.createElement("div",{className:"level-item is-gray"},s.a.createElement("h5",{className:"heading"},"Deceased"),s.a.createElement("h1",{className:"title has-text-grey"},N)))},E=t(29),y=t(6),j=t(86),N="country",O="state",w={country:"st_nm",state:"district"};var k=function(e){var a=e.statistic,t=e.mapData,r=e.setHoveredRegion,i=e.mapMeta,c=(e.changeMap,e.selectedRegion),l=Object(n.useRef)(null),o=Object(n.useState)(0),m=Object(g.a)(o,2),u=m[0],h=m[1],v=Object(n.useCallback)((function(e){y.g("svg#chart > *").remove();var n=w[i.mapType],s=y.f(l.current),c=+s.attr("width"),o=+s.attr("height"),m=j.a(e,e.objects[i.graphObjectName]),d=y.b();i.mapType===N?d.fitSize([c,o],m):d.fitExtent([[90,20],[c,o]],m);var p=y.c(d),g=null;s.append("g").attr("class","states").selectAll("path").data(m.features).enter().append("path").attr("class","path-region").attr("fill",(function(e){var s=parseInt(t[e.properties[n]])||0;return 0===s?"#ffffff":y.d(.8*s/(a.maxConfirmed||.001))})).attr("d",p).attr("pointer-events","all").on("mouseover",(function(e){!function(e){try{console.log(e,"adaasdsa"),r(e,i)}catch(a){console.log("err",a)}}(e.properties[n]);var a=y.a.target;y.f(a.parentNode.appendChild(a)).attr("class","map-hover")})).on("mouseleave",(function(e){var a=y.a.target;y.f(a).attr("class","path-region map-default"),g===e&&(g=null)})).on("touchstart",(function(e){g=g===e?null:e})).on("click",(function(e){g||i.mapType})).style("cursor","pointer").append("title").text((function(e){var s=t[e.properties[n]]||0;return parseFloat(s/(a.total||.001)*100).toFixed(2)+"% from "+b(e.properties[n])}))}),[t,i,a.total,a.maxConfirmed,r]),b=function(e){e=e.toLowerCase().split(" ");for(var a=0;a<e.length;a++)e[a]=e[a].charAt(0).toUpperCase()+e[a].slice(1);return e.join(" ")};return Object(n.useEffect)((function(){Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.e(i.geoDataFile);case 2:t=e.sent,a&&l.current&&(v(t),h((function(e){return e+1})));case 4:case"end":return e.stop()}}),e)})))()}),[i.geoDataFile,a,v]),Object(n.useEffect)((function(){!function(e,a){var t=w[a];y.g(".path-region").classed("map-hover",(function(a,n,s){return e===a.properties[t]&&(s[n].parentNode.appendChild(s[n]),!0)}))}(c,i.mapType)}),[i.mapType,u,c]),s.a.createElement("div",{className:"svg-parent"},s.a.createElement("svg",{id:"chart",width:"480",height:"450",viewBox:"0 0 480 450",preserveAspectRatio:"xMidYMid meet",ref:l}))},D={India:{name:"India",geoDataFile:"".concat("/maps","/india.json"),mapType:N,graphObjectName:"india"},"Andaman and Nicobar Islands":{name:"Andaman and Nicobar Islands",geoDataFile:"".concat("/maps","/andamannicobarislands.json"),mapType:O,graphObjectName:"andamannicobarislands_district"},"Arunachal Pradesh":{name:"Arunachal Pradesh",geoDataFile:"".concat("/maps","/arunachalpradesh.json"),mapType:O,graphObjectName:"arunachalpradesh_district"},"Andhra Pradesh":{name:"Andhra Pradesh",geoDataFile:"".concat("/maps","/andhrapradesh.json"),mapType:O,graphObjectName:"andhrapradesh_district"},Assam:{name:"Assam",geoDataFile:"".concat("/maps","/assam.json"),mapType:O,graphObjectName:"assam_district"},Bihar:{name:"Bihar",geoDataFile:"".concat("/maps","/bihar.json"),mapType:O,graphObjectName:"bihar_district"},Chhattisgarh:{name:"Chhattisgarh",geoDataFile:"".concat("/maps","/chhattisgarh.json"),mapType:O,graphObjectName:"chhattisgarh_district"},Delhi:{name:"Delhi",geoDataFile:"".concat("/maps","/delhi.json"),mapType:O,graphObjectName:"delhi_1997-2012_district"},Karnataka:{name:"Karnataka",geoDataFile:"".concat("/maps","/karnataka.json"),mapType:O,graphObjectName:"karnataka_district"},Kerala:{name:"Kerala",geoDataFile:"".concat("/maps","/kerala.json"),mapType:O,graphObjectName:"kerala_district"},Goa:{name:"Goa",geoDataFile:"".concat("/maps","/goa.json"),mapType:O,graphObjectName:"goa_district"},Gujarat:{name:"Gujarat",geoDataFile:"".concat("/maps","/gujarat.json"),mapType:O,graphObjectName:"gujarat_district_2011"},Haryana:{name:"Haryana",geoDataFile:"".concat("/maps","/haryana.json"),mapType:O,graphObjectName:"haryana_district"},"Himachal Pradesh":{name:"Himachal Pradesh",geoDataFile:"".concat("/maps","/himachalpradesh.json"),mapType:O,graphObjectName:"himachalpradesh_district"},"Jammu and Kashmir":{name:"Jammu and Kashmir",geoDataFile:"".concat("/maps","/jammukashmir.json"),mapType:O,graphObjectName:"jammukashmir_district"},Jharkhand:{name:"Jharkhand",geoDataFile:"".concat("/maps","/jharkhand.json"),mapType:O,graphObjectName:"jharkhand_district"},Ladakh:{name:"Ladakh",geoDataFile:"".concat("/maps","/ladakh.json"),mapType:O,graphObjectName:"ladakh_district"},"Madhya Pradesh":{name:"Madhya Pradesh",geoDataFile:"".concat("/maps","/madhyapradesh.json"),mapType:O,graphObjectName:"madhyapradesh_district"},Maharashtra:{name:"Maharashtra",geoDataFile:"".concat("/maps","/maharashtra.json"),mapType:O,graphObjectName:"maharashtra_district"},Manipur:{name:"Manipur",geoDataFile:"".concat("/maps","/manipur.json"),mapType:O,graphObjectName:"manipur_pre2016_districts"},Meghalaya:{name:"Meghalaya",geoDataFile:"".concat("/maps","/meghalaya.json"),mapType:O,graphObjectName:"meghalaya_district"},Mizoram:{name:"Mizoram",geoDataFile:"".concat("/maps","/mizoram.json"),mapType:O,graphObjectName:"mizoram_district"},Nagaland:{name:"Nagaland",geoDataFile:"".concat("/maps","/nagaland.json"),mapType:O,graphObjectName:"nagaland_district"},Odisha:{name:"Odisha",geoDataFile:"".concat("/maps","/odisha.json"),mapType:O,graphObjectName:"odisha_district"},Punjab:{name:"Punjab",geoDataFile:"".concat("/maps","/punjab.json"),mapType:O,graphObjectName:"punjab_district"},Rajasthan:{name:"Rajasthan",geoDataFile:"".concat("/maps","/rajasthan.json"),mapType:O,graphObjectName:"rajasthan_district"},Sikkim:{name:"Sikkim",geoDataFile:"".concat("/maps","/sikkim.json"),mapType:O,graphObjectName:"sikkim_district"},"Tamil Nadu":{name:"Tamil Nadu",geoDataFile:"".concat("/maps","/tamil-nadu.json"),mapType:O,graphObjectName:"tamilnadu_district"},Telangana:{name:"Telangana",geoDataFile:"".concat("/maps","/telugana.json"),mapType:O,graphObjectName:"telugana"},Tripura:{name:"Tripura",geoDataFile:"".concat("/maps","/tripura.json"),mapType:O,graphObjectName:"tripura_district"},Uttarakhand:{name:"Uttarakhand",geoDataFile:"".concat("/maps","/uttarakhand.json"),mapType:O,graphObjectName:"uttarakhand_district"},"Uttar Pradesh":{name:"Uttar Pradesh",geoDataFile:"".concat("/maps","/uttarpradesh.json"),mapType:O,graphObjectName:"uttarpradesh_district"},"West Bengal":{name:"West Bengal",geoDataFile:"".concat("/maps","/westbengal.json"),mapType:O,graphObjectName:"westbengal_district"}},C=function(e){var a=e.states,t=(e.regionHighlighted,Object(n.useState)({})),r=Object(g.a)(t,2),i=r[0],c=r[1],l=Object(n.useState)(D.India),o=Object(g.a)(l,2),m=o[0],d=o[1];if(Object(n.useEffect)((function(){var e=f(a[1]);c(e)}),[a]),!i)return null;var p=Object(n.useMemo)((function(){var e={total:0,maxConfirmed:0},t={};return m.mapType===N&&(t=a.reduce((function(a,t){if("Total"===t.state_name)return a;var n=parseInt(t.totalConfirmed);return e.total+=n,n>e.maxConfirmed&&(e.maxConfirmed=n),a[t.state_name]=t.totalConfirmed,a}),{})),[e,t]}),[m,a]),u=Object(g.a)(p,2),h=u[0],v=u[1],b=Object(n.useCallback)((function(e,t){var n=a.filter((function(a){return e===a.state_name}))[0];n&&t.mapType===N&&c(f(n))}),[a]),f=function(e){if(e){var a=Object(E.a)({},e);return a.name||(a.name=a.state_name),a}},y=Object(n.useCallback)((function(e){var t=D[e];t&&(d(t),t.mapType===N&&b(a[1].state_name,t))}),[b,a]),j=i.state_name;i.lastupdatedtime;return s.a.createElement("div",{className:"MapExplorer fadeInUp",style:{animationDelay:"1.2s"}},s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,m.name," Map"),s.a.createElement("h6",null,window.innerWidth<=769?"Tap":"Hover"," over a"," ",m.mapType===N?"state":"district"," for more details")),s.a.createElement("div",{className:"map-stats"},s.a.createElement("div",{className:"stats"},s.a.createElement("h5",null,"Confirmed"),s.a.createElement("div",{className:"stats-bottom"},s.a.createElement("h1",null,i.totalConfirmed),s.a.createElement("h6",null))),s.a.createElement("div",{className:"stats is-blue"},s.a.createElement("h5",null,"Active"),s.a.createElement("div",{className:"stats-bottom"},s.a.createElement("h1",null,i.totalConfirmed-i.totalRecovered-i.totalDeaths||""),s.a.createElement("h6",null))),s.a.createElement("div",{className:"stats is-green"},s.a.createElement("h5",null,"Recovered"),s.a.createElement("div",{className:"stats-bottom"},s.a.createElement("h1",null,i.totalRecovered||""),s.a.createElement("h6",null))),s.a.createElement("div",{className:"stats is-gray"},s.a.createElement("h5",null,"Deceased"),s.a.createElement("div",{className:"stats-bottom"},s.a.createElement("h1",null,i.totalDeaths||""),s.a.createElement("h6",null)))),s.a.createElement("div",{className:"meta"},s.a.createElement("h2",null,j)),s.a.createElement(k,{statistic:h,mapMeta:m,mapData:v,setHoveredRegion:b,changeMap:y}))};var _=function(e){var a=Object(n.useState)([]),t=Object(g.a)(a,2),r=t[0],i=t[1],l=Object(n.useState)(!1),o=Object(g.a)(l,2),m=o[0],u=o[1],v=Object(n.useState)(void 0),E=Object(g.a)(v,2),y=E[0];E[1],Object(n.useEffect)((function(){!1===m&&j()}),[m]),Object(n.useEffect)((function(){var e=document.createElement("script");return e.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js",e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),c.isMobile?(googletag.cmd.push((function(){googletag.display("div-gpt-ad-1586383002993-0")})),googletag.cmd.push((function(){googletag.display("div-gpt-ad-1586189488116-0")}))):(googletag.cmd.push((function(){googletag.display("div-gpt-ad-1586189401047-0")})),googletag.cmd.push((function(){googletag.display("div-gpt-ad-1586189683314-0")})));var j=function(){var e=Object(p.a)(d.a.mark((function e(){var a,t,n,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([h.a.get("https://api.warw.in/coronaWidget1/get_state_stat")]);case 3:a=e.sent,t=Object(g.a)(a,1),n=t[0],s=[],r=n.data.data,console.log(r),Object.keys(r).forEach((function(e){s.push(r[e])})),i(s),u(!0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return s.a.createElement("div",{className:"Home"},s.a.createElement("div",{className:"Home"},s.a.createElement("div",{id:"div-gpt-ad-1586189537672-0",className:"flex-display1",style:{display:c.isMobile?"none":"block"}}),s.a.createElement("div",{id:"div-gpt-ad-1586189488116-0",className:"flex-display-mobile",style:{display:c.isMobile?"block":"none"}}),s.a.createElement(f,{data:r})),s.a.createElement("div",{className:"Home"},s.a.createElement("div",{id:"div-gpt-ad-1586189401047-0",className:"flex-display2",style:{display:c.isMobile?"none":"block"}}),s.a.createElement("div",{className:"home-left"},s.a.createElement(b,{states:r})),s.a.createElement("div",{className:"home-right"},m&&s.a.createElement(s.a.Fragment,null,s.a.createElement(C,{states:r,regionHighlighted:y})),s.a.createElement("div",{id:"div-gpt-ad-1586189461864-0",className:"flex-display-3",style:{display:c.isMobile?"none":"block"}})),s.a.createElement("div",{id:"div-gpt-ad-1586189253126-0",className:"flex-display-2",style:{display:c.isMobile?"none":"block"}})),s.a.createElement("div",{id:"div-gpt-ad-1586189683314-0",className:"flex-display1",style:{display:c.isMobile?"none":"block"}}),s.a.createElement("div",{id:"div-gpt-ad-1586383002993-0",className:"flex-display-mobile",style:{display:c.isMobile?"block":"none"}}))};var T=function(e){return"/summary"!==window.location.pathname?s.a.createElement("div",{className:"Navbar",style:{animationDelay:"0.5s",height:"/clusters"===window.location.pathname?"2.5rem":"",transition:"all 0.3s ease-in-out"}},s.a.createElement("img",{className:"fadeInUp logo",alt:"Unibots COVID-19 Tracker",src:"https://unibots.in/wp-content/uploads/2019/09/unibot.png",style:{animationDelay:"0.0s",width:"4.5em",height:"4em",transition:"all 0.3s ease-in-out"}}),s.a.createElement("div",{className:"navbar-left"},e.pages.map((function(e,a){return s.a.createElement(l.b,{to:e.pageLink,key:a},s.a.createElement("span",(t=e.pageLink,n=e.animationDelayForNavbar,{className:"fadeInUp ".concat(window.location.pathname===t?"focused":""),style:{animationDelay:"".concat(n,"s")}}),e.displayName));var t,n}))),s.a.createElement("div",{className:"navbar-right"})):s.a.createElement("div",null)},F=t(5).createBrowserHistory;var S=function(){var e=[{pageLink:"/",view:_,displayName:"Home",animationDelayForNavbar:.2}];return c.isMobile?(window.googletag=window.googletag||{cmd:[]},googletag.cmd.push((function(){googletag.defineSlot("/21928950349/covin19-unibots_300x250_Mobile2",[300,250],"div-gpt-ad-1586383002993-0").addService(googletag.pubads()),googletag.defineSlot("/21928950349/covin19-unibots_300x250_mobile",[300,250],"div-gpt-ad-1586189488116-0").addService(googletag.pubads()),googletag.pubads().enableSingleRequest(),googletag.enableServices()}))):(window.googletag=window.googletag||{cmd:[]},googletag.cmd.push((function(){googletag.defineSlot("/21928950349/covin19-unibots_160x600_Left",[160,600],"div-gpt-ad-1586189401047-0").addService(googletag.pubads()),googletag.defineSlot("/21928950349/covin19-unibots_728x90_bottom",[728,90],"div-gpt-ad-1586189683314-0").addService(googletag.pubads()),googletag.pubads().enableSingleRequest(),googletag.enableServices()}))),s.a.createElement("div",{className:"App"},s.a.createElement(l.a,{history:F},s.a.createElement(o.b,{render:function(a){var t=a.location;return s.a.createElement("div",{className:"Almighty-Router"},s.a.createElement(T,{pages:e}),s.a.createElement(o.b,{exact:!0,path:"/",render:function(){return s.a.createElement(o.a,{to:"/"})}}),s.a.createElement(o.d,{location:t},e.map((function(e,a){return s.a.createElement(o.b,{exact:!0,path:e.pageLink,component:e.view,key:a})}))))}})),s.a.createElement("footer",{className:"fadeInUp",style:{animationDelay:"2s"}},s.a.createElement("img",{className:"img-logo",src:"https://pbs.twimg.com/profile_images/1191106856782983169/r6d4Blqp_400x400.jpg"}),s.a.createElement("div",{className:"link"},s.a.createElement("a",{href:"https://www.dipfunz.com/"},"Dipfunz Covid Counter"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.013d6b42.chunk.js.map
