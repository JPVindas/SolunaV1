'use client';
import {useEffect,useState} from 'react';
import {useLanguage} from '@/components/language-provider';

export function PerfumeIntro(){
 const [visible,setVisible]=useState(false);const {t}=useLanguage();
 useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;setVisible(true);const timer=setTimeout(()=>setVisible(false),2700);return()=>clearTimeout(timer)},[]);
 if(!visible)return null;
 return <div className="soluna-intro" role="status" aria-label={t('Cargando Soluna Fragrance','Loading Soluna Fragrance')}>
  <div className="intro-glow" aria-hidden="true"/>
  <div className="intro-scene" aria-hidden="true">
   <svg className="intro-bottle" viewBox="0 0 240 310" fill="none">
    <defs><linearGradient id="introGold" x1="45" y1="28" x2="193" y2="285" gradientUnits="userSpaceOnUse"><stop stopColor="#f6dfb3"/><stop offset=".52" stopColor="#c99654"/><stop offset="1" stopColor="#74502f"/></linearGradient></defs>
    <g className="intro-atomizer"><path d="M102 62V38h45v24M112 38V24h48v14"/><path d="M149 28h28"/><circle cx="190" cy="27" r="2"/></g>
    <g className="intro-mist"><path d="M177 30c22-8 38-7 53-3M176 37c24 1 41 7 55 17M177 22c15-14 27-18 43-20"/><circle cx="228" cy="76" r="3"/><circle cx="214" cy="61" r="2"/><circle cx="232" cy="12" r="2"/></g>
    <path className="intro-glass" d="M85 70h78l26 31v151c0 17-13 30-30 30H79c-17 0-30-13-30-30V101l36-31Z"/>
    <path className="intro-liquid" d="M58 190c26-16 48 16 78 0 22-12 35-4 44 5v57c0 12-9 21-21 21H79c-12 0-21-9-21-21v-62Z"/>
    <rect className="intro-label" x="78" y="121" width="83" height="69" rx="2"/><path className="intro-sun" d="M119 139v-11m-14 16-8-8m36 8 8-8m-22 15c-9 0-16 7-16 16h32c0-9-7-16-16-16Z"/>
   </svg>
   <div className="intro-ripple"/><i className="intro-drop drop-one"/><i className="intro-drop drop-two"/><i className="intro-drop drop-three"/>
  </div>
  <div className="intro-brand"><strong>SOLUNA</strong><span>FRAGRANCE</span><p>{t('Fragancias que dejan huella','Fragrances that leave an impression')}</p></div>
  <div className="intro-progress" aria-hidden="true"><span/></div>
 </div>;
}
