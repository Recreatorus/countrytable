document.documentElement.classList.add((()=>(/Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)?'mobile':'desktop'))());var A=document.querySelector('.network'),c=document.querySelector('.theme-toggle'),d=()=>{const _A=!c.matches('[aria-pressed=true]');c.setAttribute('aria-pressed',_A);document.documentElement.dataset.theme=_A?'light':'dark'},f=()=>{B=new Lenis({lerp:0.1,smoothWheel:!0,smoothTouch:!0,duration:1.2,wheelMultiplier:0.8,touchMultiplier:2,autoResize:!0});const E=aA=>{B.raf(aA);requestAnimationFrame(E)};requestAnimationFrame(E)},l=document.querySelectorAll('#sortMe th');window.addEventListener('offline',()=>A.classList.add('offline'));window.addEventListener('online',()=>A.classList.remove('offline'));var _=document.documentElement;(C=>{if(!window.matchMedia)return;var _b=window.matchMedia('(prefers-color-scheme: dark)');C(_b.matches);_b.addEventListener('change',_a=>C(_a.matches))})(D=>{D?_.setAttribute('data-theme','dark'):_.setAttribute('data-theme','light')});document.documentElement.dataset.theme='dark';c.addEventListener('click',(()=>{!document.startViewTransition&&d();document.startViewTransition(d)}));let B;document.addEventListener('DOMContentLoaded',()=>f());g().then(aB=>j(aB));async function g(){var aC=await fetch('https://recreatorus.github.io/countryinfo/data/countries.json',{priority:'high'});return await aC.json()}var h=document.querySelector('tbody');function i(aD){if(Number.isInteger(aD))return new Intl.NumberFormat('ru-RU').format(aD);return new Intl.NumberFormat('ru-RU', {maximumSignificantDigits:2}).format(aD)}function j(aE){for(const entry of aE){var _B=document.createElement('tr');_B.innerHTML=`
      <td>${entry.country}</td>
      <td>${entry.pop2023}</td>
      <td>${entry.area}</td>
      <td>${entry.density}</td>
      <td>${entry.gdp2023}</td>
      <td>${entry.gdppc2023}</td>
      <td>${entry.gdpppppc2023}</td>
      <td>${entry.growthgdp2023}</td>
    `;h.append(_B)}k()}function k(){const aF=document.getElementById('sortMe'),aG=aF.querySelectorAll('th'),_c=aF.querySelector('tbody'),_d=_c.querySelectorAll('tr');var _e=[...aG].map(header=>''),F=function(aH,aI){const _C=aG[aH].getAttribute('data-type');switch(_C) {case 'number':return parseFloat(aI);case 'string':default:return aI}},G=function(aJ){const aK=_e[aJ]||'asc',aL=aK==='asc'?1:-1,_D=[..._d];_D.sort((aM,aN)=>{const a=F(aJ,aM.querySelectorAll('td')[aJ].innerHTML),b=F(aJ,aN.querySelectorAll('td')[aJ].innerHTML);switch(!0) {case a>b:return 1*aL;case a<b:return -1*aL;case a===b:return 0}});[].forEach.call(_d,function(aO){_c.removeChild(aO)});_e[aJ]=aK==='asc'?'desc':'asc';for(const aP of _D)_c.appendChild(aP)};[].forEach.call(aG,function(aQ,aR){aQ.addEventListener('click',function(){G(aR)})})}[].forEach.call(l,function(el){el.addEventListener('click',function(){[].forEach.call(l,function(aS){aS.classList.remove('active')});el.classList.add('active')})});var m=(function(aT){let aU;function aV(e){aU=e.target;aT.forEach.call(document.getElementsByClassName(aU.getAttribute('data-table')),function(aX){aT.forEach.call(aX.tBodies,function(aY){aT.forEach.call(aY.rows,aW)})})}function aW(aZ){let bA=aZ.textContent.toLowerCase();aZ.style.display=bA.indexOf(aU.value.toLowerCase())===-1?'none':'table-row'}return{init:function(){aT.forEach.call(document.getElementsByClassName('light-table-filter'),function(bB){bB.oninput=aV})}}})(Array.prototype);document.addEventListener('readystatechange',function(){document.readyState==='complete'&&m.init()});const n=document.querySelector('#sharebutton'),o=window.location.href,p=document.title,q=document.querySelector('meta[name="description"]').getAttribute('content');n.addEventListener('click',()=>{navigator.share?navigator.share({title:`${p}`,text:`${q}`,url:`${o}`}).then(()=>console.log('Shared successfully')).catch(bC=>console.error('Error:',bC)):console.log('Web Share API не поддерживается в данном браузере')});document.getElementById('year').innerHTML=new Date().getFullYear();
