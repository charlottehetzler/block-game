(this["webpackJsonpblock-game"]=this["webpackJsonpblock-game"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var i,o,d,r=n(0),c=n.n(r),a=n(8),h=n.n(a),s=n(3),p=n(9),w=n(6),l=n.n(w),u=n(2),x=[],j=!1;function v(e){var t=e.x,n=e.z,i=e.width,d=e.depth,r=e.direction,c=function(e){var t=e.x,n=e.y,i=e.z,d=e.width,r=e.depth,c=new u.b(d,1,r),a=new u.c("hsl(".concat(30+4*x.length,", 100%, 50%)")),h=new u.f({color:a}),s=new u.e(c,h);return s.position.set(t,n,i),o.add(s),{threejs:s,width:d,depth:r,direction:"x"}}({x:t,y:1*x.length,z:n,width:i,depth:d});c.direction=r,x.push(c)}function b(){var e=x[x.length-1];e.threejs.position[e.direction]+=.15,i.position.y<1*(x.length-2)+4&&(i.position.y+=.15),d.render(o,i)}var f=function(){o=new u.h,v({x:0,z:0,width:3,depth:3,direction:"x"}),v({x:-10,z:0,width:3,depth:3,direction:"z"});var e=new u.a(16777215,.6);o.add(e);var t=new u.d(16777215,.6);t.position.set(10,20,0),o.add(t),(i=function(){var e=10+window.innerHeight/window.innerWidth;return new u.g(-5,5,e/2,e/-2,1,100)}()).position.set(4,4,4),i.lookAt(0,0,0),(d=new u.i({antialias:!0})).setSize(window.innerWidth,window.innerHeight),d.render(o,i);var n=document.getElementById("root");n&&n.appendChild(d.domElement),window.addEventListener("click",(function(){if(j){var e=x[x.length-1].direction;v({x:"x"==e?0:-10,z:"z"==e?0:-10,width:3,depth:3,direction:"x"==e?"z":"x"})}else d.setAnimationLoop(b),j=!0}))},g=n(1),z=function(){var e=Object(r.useState)(!0),t=Object(s.a)(e,2),n=t[0];t[1];return Object(r.useEffect)((function(){f()}),[]),Object(g.jsxs)(g.Fragment,{children:[n?Object(g.jsx)("div",{id:l.a.dev,children:Object(g.jsx)(p.a,{})}):null,Object(g.jsx)("div",{id:l.a.app})]})};h.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(z,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={root:"App_root__2CSG3",app:"App_app__2ziFi"}}},[[16,1,2]]]);
//# sourceMappingURL=main.cf3ef510.chunk.js.map