import{O as e,_ as r}from"./vendor-c3f4fdf7.js";import{G as t}from"./stores-98bc500e.js";function o(o,l,n,f,s,c){let d;n.subscribe((e=>{d=e}));const p=e(l),h=e(f),i=e(s),a=e(c);return o&&n.update((e=>[...e,p])),function(e,o,l,n){const f=10,s=o.length,c=l.length,d=c;let p;n.filter((e=>!e.present)).map((e=>e.personId)),p=e.length<f?0:e.length-f;let h=[],i=[],a=new Array(c),g=[];for(let m=p;m<e.length;m++){a=new Array(c);let f=new Array(s);for(let e=0;e<c;e++){f=new Array(s);for(let e=0;e<s;e++)7==o[e].id?f[e]=!1:f[e]=!0;a[e]=f}for(let r=m;r<e.length;r++)for(let t=0;t<e[r].length;t++)if(e[r][t].completed){const o=e[r][t].personId,l=e[r][t].choreId;a[o][l]=!1}for(let e=0;e<s;e++){if(o[e].gender==t.Female)for(let r=0;r<c;r++)l[r].gender==t.Male&&(a[r][e]=!1);if(o[e].gender==t.Male)for(let r=0;r<c;r++)l[r].gender==t.Female&&(a[r][e]=!1)}for(let r=0;r<c;r++)if(0!=e.length&&!e.slice(-1)[0][r].completed){const t=e.slice(-1)[0][r].personId,o=e.slice(-1)[0][r].choreId;for(let e=0;e<s;e++)a[t][e]=!1;a[t][o]=!0}for(let e=0;e<c;e++)if(!n[e].present){for(let r=0;r<s;r++)a[e][r]=!1;a[e][7]=!0}g=[];for(let e=0;e<s;e++)for(let r=1;r<o[e].amount;r++){let r=-1;a.forEach((t=>{r=t.push(t[e])})),g.push([e,r-1])}h=[];for(let e=0;e<c;e++)for(let r=0;r<d+1;r++)a[e][r]&&h.push([e,r]);if(i=r(c,d+1,h),i.length>=d)break}const u=[];for(let r=0;r<i.length;r++){let[e,t]=i[r];if(t<s)u.push({personId:e,choreId:t,completed:!0});else{let[r,o]=g.find((([e,r])=>r==t));u.push({personId:e,choreId:r,completed:!0})}}return u.sort((function(e,r){return e.personId-r.personId||e.choreId-r.choreId})),console.log(u),u}(d,h,i,a)}export{o as m};
