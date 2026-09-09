'use client';
import Link from 'next/link';
import {useLanguage} from './language-provider';

const brands=[['chanel','Chanel'],['dior','Dior'],['ysl','Yves Saint Laurent'],['prada','Prada'],['valentino','Valentino'],['word','Carolina Herrera'],['word','Lancôme'],['word','Giorgio Armani'],['word','Gucci'],['word','Versace'],['word','Jean Paul Gaultier'],['word','Dolce & Gabbana'],['word','Armaf'],['word','Paco Rabanne'],['word','Afnan'],['word','Lattafa'],['word','Maison Alhambra'],['word','Azzaro'],['word','Montblanc'],['word','Byredo']];

export function BrandCarousel(){
 const {t}=useLanguage();
 return <section className="brand-ribbon" aria-label={t('Marcas de nuestro catálogo','Brands in our catalogue')}>
  <p>{t('Las marcas que definen tu esencia','The brands that define your essence')}</p>
  <div className="brand-window"><div className="brand-track">
   {[0,1].map(copy=><div className="brand-group" key={copy} aria-hidden={copy===1?true:undefined}>{brands.map(([slug,name])=><Link tabIndex={copy? -1:0} href={`/perfumes?q=${encodeURIComponent(name)}`} className={`brand-logo brand-logo-${slug}`} aria-label={`${t('Ver perfumes de','View fragrances by')} ${name}`} key={name}>{slug==='word'?<span>{name}</span>:<img src={`/brands/${slug}.svg`} alt={copy?'':name} width="160" height="54" loading="lazy"/>}</Link>)}</div>)}
  </div></div>
 </section>;
}
