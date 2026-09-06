'use client';
import {useEffect,useState,type CSSProperties} from 'react';
import {useLanguage} from '@/components/language-provider';
export function PerfumeIntro(){
 const [visible,setVisible]=useState(false);const {t}=useLanguage();
 useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;let disposed=false;let timer:ReturnType<typeof setTimeout>;const photo=new Image();photo.onload=()=>{if(disposed)return;setVisible(true);timer=setTimeout(()=>setVisible(false),1900)};photo.src='/images/hero-gold-splash.png';return()=>{disposed=true;clearTimeout(timer)}},[]);
 if(!visible)return null;
 return <div className="perfume-intro"><div className="intro-art" aria-hidden="true"><img src="/images/hero-gold-splash.png" alt=""/><div className="splash-drops">{Array.from({length:22},(_,i)=><i key={i} style={{'--dx':`${Math.cos(i*2.399)* (100+i*9)}px`,'--dy':`${-60-Math.abs(Math.sin(i*2.399))* (90+i*10)}px`,'--delay':`${i%5*45}ms`} as CSSProperties}/>)}</div><div className="intro-wordmark">SOLUNA<span>FRAGRANCE</span></div></div><button className="intro-skip" onClick={()=>setVisible(false)}>{t('Omitir animación','Skip animation')} ↗</button></div>
}

