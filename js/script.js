document.documentElement.classList.add((()=>(/Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)?'mobile':'desktop'))());var A=document.querySelector('.network'),c=document.querySelector('.theme-toggle'),d=()=>{const D=!c.matches('[aria-pressed=true]');c.setAttribute('aria-pressed',D);_.dataset.theme=D?'light':'dark'},f=()=>{B=new Lenis({lerp:0.1,smoothWheel:!0,smoothTouch:!0,duration:1.2,wheelMultiplier:0.8,touchMultiplier:2,autoResize:!0});const E=aA=>{B.raf(aA);requestAnimationFrame(E)};requestAnimationFrame(E)},j=(n,aG=0)=>+`${Math.round(`${n}e${aG}`)}e-${aG}`,o=(function(bC){let bD;function bE(e){bD=e.target;let bG=N(bD.value);!bG?document.querySelector('.input-wrapper').classList.add('user-invalid'):document.querySelector('.input-wrapper').classList.remove('user-invalid');bC.forEach.call(document.getElementsByClassName(bD.getAttribute('data-table')),function(bH){bC.forEach.call(bH.tBodies,function(bI){bC.forEach.call(bI.rows,bF)})})}function bF(bJ){let bK=bJ.textContent.toLowerCase();bJ.style.display=bK.indexOf(bD.value.toLowerCase())===-1?'none':'table-row'}return{init:function(){bC.forEach.call(document.getElementsByClassName('light-table-filter'),function(bL){bL.oninput=bE})}}})(Array.prototype);window.addEventListener('offline',()=>A.classList.add('offline'));window.addEventListener('online',()=>A.classList.remove('offline'));var _=document.documentElement;(C=>{if(!window.matchMedia)return;var _b=window.matchMedia('(prefers-color-scheme: dark)');C(_b.matches)})(_a=>_a?_.setAttribute('data-theme','dark'):_.setAttribute('data-theme','light'));c.addEventListener('click',(()=>{!document.startViewTransition&&d();document.startViewTransition(d)}));window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',_A=>_.dataset.theme=_A.matches?'dark':'light');let B;document.addEventListener('DOMContentLoaded',()=>f());g().then(aB=>k(aB));async function g(){var aC=await fetch('https://recreatorus.github.io/countryinfo/data/countries.json',{priority:'high'});var _B=await aC.json();var _c=_B.map(({country:aD,pop2023:aE,area:_C,density:_d,gdp2023:_e,gdppc2023:F,gdpppppc2023:G,growthgdp2023:H})=>({country:aD,pop2023:aE,area:_C,density:_d,gdp2023:_e,gdppc2023:F,gdpppppc2023:G,growthgdp2023:H}));return _c}var h=document.querySelector('tbody');function i(aF){return new Intl.NumberFormat('ru-RU').format(aF)}function k(aH){for(const entry of aH){var aI=document.createElement('tr');aI.innerHTML=`
      <td>${entry.country}</td>
      <td>${i(entry.pop2023)}</td>
      <td>${i(entry.area)}</td>
      <td>${i(j(entry.density,1))}</td>
      <td>${i(j(entry.gdp2023,1))}</td>
      <td>${i(j(entry.gdppc2023,1))}</td>
      <td>${i(j(entry.gdpppppc2023,1))}</td>
      <td>${i(j(entry.growthgdp2023,1))}</td>
    `;h.append(aI)}l()}function l(){const aJ=document.getElementById('sortMe'),aK=aJ.querySelectorAll('th'),aL=aJ.querySelector('tbody'),_D=aL.querySelectorAll('tr');var _E=[...aK].map(header=>''),_f=function(aM,aN){const aO=aK[aM].getAttribute('data-type');switch(aO) {case 'number':return parseFloat(aN);case 'string':default:return aN}},_g=function(aP){const aQ=_E[aP]||'asc',aR=aQ==='asc'?1:-1,aS=[..._D];aS.sort((aT,aU)=>{const a=_f(aP,aT.querySelectorAll('td')[aP].innerHTML.replaceAll('\&nbsp;','')),b=_f(aP,aU.querySelectorAll('td')[aP].innerHTML.replaceAll('\&nbsp;',''));switch(!0) {case a>b:return 1*aR;case a<b:return -1*aR;case a===b:return 0}});[].forEach.call(_D,function(aV){aL.removeChild(aV)});_E[aP]=aQ==='asc'?'desc':'asc';for(const aW of aS)aL.appendChild(aW)};[].forEach.call(aK,function(aX,aY){aX.addEventListener('click',function(){_g(aY)})})}var m=document.querySelectorAll('#sortMe th');[].forEach.call(m,function(el){el.addEventListener('click',function(){[].forEach.call(m,function(aZ){aZ.classList.remove('active')});el.classList.add('active')})});function N(bA){for(const bB of bA)if(!(bB>='a'&&bB<='z')&&!(bB>='A'&&bB<='Z'))return!1;return!0}document.addEventListener('readystatechange',function(){document.readyState==='complete'&&o.init()});document.getElementById('year').innerHTML=new Date().getFullYear();
