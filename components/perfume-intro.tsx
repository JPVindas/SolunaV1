'use client';
import {useEffect,useState} from 'react';
import {useLanguage} from '@/components/language-provider';
export function PerfumeIntro(){
 const [visible,setVisible]=useState(false);const {t}=useLanguage();
 useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;setVisible(true);const timer=setTimeout(()=>setVisible(false),850);return()=>clearTimeout(timer)},[]);
 if(!visible)return null;
 return <div className="mini-perfume-intro" role="status" aria-label={t('Cargando Soluna','Loading Soluna')}><div className="mini-perfume-mark" aria-hidden="true"><svg className="mini-bottle" viewBox="0 0 100 100" fill="none"><g className="bottle-press"><path d="M44 32V24h17v8M49 24v-6h14v6"/><path d="M43 32h19v8l9 7v36a5 5 0 0 1-5 5H39a5 5 0 0 1-5-5V47l9-7z"/><rect x="42" y="54" width="21" height="22" rx="1"/><path d="M48 63h9m-9 5h9"/></g><g className="mini-mist"><path d="m67 20 10-4m-9 8 13 1m-15-9 6-8"/><circle cx="86" cy="14" r="1.3"/><circle cx="86" cy="28" r="1"/><circle cx="77" cy="6" r="1"/></g></svg><div className="mini-orbit"><span/></div></div></div>;
}
