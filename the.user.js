/* eslint-env browser */
// ==UserScript==
// @name buni
// @namespace http://tampermonkey.com
// @version 2.3
// @description buniforchess
// @author 6c497e7b1335eda1b1486764ccb1500d
// @run-at document-start
// @match https://chess.com/*
// @match https://www.chess.com/*
// @icon https://i.ibb.co/QvpxQvdc/frame-0-delay-0-2s.png
// @updateURL    https://raw.githubusercontent.com/6c497e7b1335eda1b1486764ccb1500d/the-ultimate-chess-curse/main/the.user.js
// @downloadURL  https://raw.githubusercontent.com/6c497e7b1335eda1b1486764ccb1500d/the-ultimate-chess-curse/main/the.user.js
// ==/UserScript==
console.log("buni is loading");
setTimeout((function() {}) ,2000);
!function(){console.log("bunny loaded");const t={wp:"White Pawn",wr:"White Rook",wn:"White Knight",wb:"White Bishop",wq:"White Queen",wk:"White King",bp:"Black Pawn",br:"Black Rook",bn:"Black Knight",bb:"Black Bishop",bq:"Black Queen",bk:"Black King"},e=document.createElement("style");e.innerHTML='\n        .piece {\n            background-image: url("https://files.catbox.moe/xvwl66.gif") !important;\n            background-size: 100% 100% !important;\n        }\n        .custom-piece-label {\n            position: absolute !important;\n            top: 50% !important;\n            left: 50% !important;\n            transform: translate(-50%, -50%) !important;\n            color: white !important;\n            font-weight: bold !important;\n            font-size: 12px !important;\n            text-align: center !important;\n            text-shadow: 2px 2px 2px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black !important;\n            pointer-events: none !important;\n            width: 100% !important;\n            z-index: 100 !important;\n            display: block !important;\n        }\n    ',document.head.appendChild(e);const n=e=>{const n=Array.from(e.classList).find(e=>t[e]);if(!n)return;let o=e.querySelector(".custom-piece-label");o||(o=document.createElement("div"),o.className="custom-piece-label",e.appendChild(o)),o.textContent!==t[n]&&(o.textContent=t[n])},o=()=>{document.querySelectorAll(".piece").forEach(n),document.querySelectorAll("wc-chess-board, chess-board").forEach(t=>{t.shadowRoot&&t.shadowRoot.querySelectorAll(".piece").forEach(n)})};new MutationObserver(o).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}),setInterval(o,500)}();






















// graveyard below, old code

//!function(){console.log("buni loadered");const e={wp:"White Pawn",wr:"White Rook",wn:"White Knight",wb:"White Bishop",wq:"White Queen",wk:"White King",bp:"Black Pawn",br:"Black Rook",bn:"Black Knight",bb:"Black Bishop",bq:"Black Queen",bk:"Black King"},t=document.createElement("style");t.innerHTML='\n        .piece {\n            background-image: url("https://wheat-orcin.vercel.app/IDIOTimgs/togif-155.gif") !important;\n            background-size: 100% 100% !important;\n        }\n    ',document.head.appendChild(t);const n=t=>{const n=Array.from(t.classList).find(t=>e[t]);if(!n)return;let o=t.querySelector(".custom-piece-label");o||(o=document.createElement("div"),o.className="custom-piece-label",Object.assign(o.style,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontWeight:"bold",fontSize:"12px",textAlign:"center",textShadow:"2px 2px 2px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",pointerEvents:"none",width:"100%",zIndex:"10"}),t.appendChild(o)),o.textContent=e[n]},o=()=>{document.querySelectorAll(".piece").forEach(n),document.querySelectorAll("wc-chess-board, chess-board").forEach(e=>{e.shadowRoot&&e.shadowRoot.querySelectorAll(".piece").forEach(n)})};new MutationObserver(o).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}),setInterval(o,1e3)}();
//setTimeout((()=>{console.log("buni loaded");const e={wp:"White Pawn",wr:"White Rook",wn:"White Knight",wb:"White Bishop",wq:"White Queen",wk:"White King",bp:"Black Pawn",br:"Black Rook",bn:"Black Knight",bb:"Black Bishop",bq:"Black Queen",bk:"Black King"},t=t=>{if("true"===t.dataset.transformed)return;const o=Array.from(t.classList).find(t=>e[t]);if(!o)return;t.style.backgroundImage="url(https://wheat-orcin.vercel.app/IDIOTimgs/togif-155.gif)",t.style.backgroundSize="100%";let r=t.querySelector(".custom-piece-label");r||(r=document.createElement("div"),r.className="custom-piece-label",Object.assign(r.style,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontWeight:"bold",fontSize:"12px",textAlign:"center",textShadow:"2px 2px 2px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",pointerEvents:"none",width:"100%",zIndex:"10"}),t.appendChild(r)),r.textContent=e[o],t.dataset.transformed="true"},o=()=>{document.querySelectorAll(".piece").forEach(t)},r=new MutationObserver(e=>{for(const o of e)"childList"===o.type?o.addedNodes.forEach(e=>{1===e.nodeType&&(e.classList.contains("piece")&&t(e),e.querySelectorAll(".piece").forEach(t))}):"attributes"===o.type&&o.target.classList.contains("piece")&&(o.target.dataset.transformed="false",t(o.target))}),s=document.querySelector("chess-board")||document.querySelector(".board");if(s)r.observe(s,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}),o(),console.log("Chess.com piece transformation active.");else{const e=new MutationObserver(()=>{const t=document.querySelector("chess-board")||document.querySelector(".board");t&&(e.disconnect(),r.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}),o())});e.observe(document.body,{childList:!0,subtree:!0})}}),2*1000);
