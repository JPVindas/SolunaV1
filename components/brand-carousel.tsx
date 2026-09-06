'use client';
import {useState} from 'react';
import {Pause,Play} from 'lucide-react';
import {useLanguage} from './language-provider';

const brands=[['chanel','Chanel'],['dior','Dior'],['ysl','Yves Saint Laurent'],['prada','Prada'],['valentino','Valentino']];

export function BrandCarousel(){
 const {t}=useLanguage();const [paused,setPaused]=useState(false);
 return <section className="brand-ribbon" aria-label={t('Marcas de nuestro catálogo','Brands in our catalogue')}>
  <p>{t('Las marcas que definen tu esencia','The brands that define your essence')}</p>
  <button className="brand-motion" aria-label={paused?t('Reanudar logos','Play brand carousel'):t('Pausar logos','Pause brand carousel')} aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?<Play size={12}/>:<Pause size={12}/>}</button>
  <div className="brand-window"><div className={`brand-track ${paused?'is-paused':''}`}>
   {[0,1].map(copy=><div className="brand-group" key={copy} aria-hidden={copy===1?true:undefined}>{brands.map(([slug,name])=><div className={`brand-logo brand-logo-${slug}`} key={slug}><img src={`/brands/${slug}.svg`} alt={copy?'':name} width="160" height="54" loading="lazy"/></div>)}</div>)}
  </div></div>
 </section>;
}
