'use client';
import Link from 'next/link';
import {ArrowDown,ArrowUpRight,MoveUpRight} from 'lucide-react';
import {useLanguage} from '@/components/language-provider';
import {ProductPhoto} from '@/components/product-photo';
import type {Product} from '@/lib/catalog';

export const collectionThemes:Record<string,string>={Hombre:'him',Mujer:'her',Unisex:'shared','Más vendidos':'favourites',Nuevos:'arrivals',Todos:'catalogue'};

export function CollectionHero({category,items,onProduct}:{category:string;items:Product[];onProduct:(product:Product)=>void}){
 const {t}=useLanguage();
 const theme=collectionThemes[category];
 const copy={
  Hombre:{label:t('Hombre','Men'),intro:t('Perfumes de','Fragrances for'),title:t('hombre.','him.'),kicker:t('El arte de dejar huella','The art of leaving an impression'),description:t('Fragancias que dejan presencia. Encuentra el aroma que acompaña tu carácter.','Fragrances with presence. Find the scent that complements your character.'),note:t('Carácter · Presencia · Estilo','Character · Presence · Style')},
  Mujer:{label:t('Mujer','Women'),intro:t('Perfumes de','Fragrances for'),title:t('mujer.','her.'),kicker:t('Una esencia. Toda tú.','One essence. Entirely you.'),description:t('Encuentra la fragancia que habla por ti. Sutil, inolvidable y tan tuya como tu forma de ser.','Find the fragrance that speaks for you. Subtle, unforgettable and entirely your own.'),note:t('El detalle que te hace única','The detail that makes you unique')},
  Unisex:{label:'Unisex',intro:t('Tu esencia,','Your essence,'),title:t('sin etiquetas.','no labels.'),kicker:t('Perfumes unisex','Unisex fragrances'),description:t('Elige por lo que sientes. Fragancias para expresarte con total libertad.','Choose what moves you. Fragrances for the freedom to be yourself.'),note:t('Sin reglas. Sin límites.','No rules. No limits.')},
  'Más vendidos':{label:t('Más vendidos','Bestsellers'),intro:t('Fragancias','Your next'),title:t('favoritas.','favourite.'),kicker:t('Más vendidos · Selección Soluna','Bestsellers · The Soluna selection'),description:t('Los favoritos de nuestros clientes. Descubre tu próximo imprescindible.','Our customers’ favourites. Discover your next signature scent.'),note:t('Favoritos para volver a elegir','Favourites worth returning to')},
  Todos:{label:t('Catálogo completo','Full catalogue'),intro:t('Un mundo de','A world of'),title:t('fragancias.','fragrances.'),kicker:t('Catálogo completo · Soluna','Full catalogue · Soluna'),description:t('Encuentra una esencia que se sienta tuya. Explora todas nuestras marcas y colecciones.','Find an essence that feels like you. Explore all our brands and collections.'),note:t('Tu esencia, a tu manera','Your essence, your way')},
  Nuevos:{label:t('Nuevos','New arrivals'),intro:t('Algo nuevo.','Something new.'),title:t('Muy tú.','Entirely you.'),kicker:t('Nuevos · Descubrimientos Soluna','New arrivals · Soluna discoveries'),description:t('Lo nuevo acaba de llegar. Deja espacio para una fragancia que aún no conoces.','New discoveries have arrived. Make room for a fragrance you have yet to meet.'),note:t('Tu próxima historia empieza aquí','Your next story starts here')},
 }[category];
 if(!copy||!theme)return null;
 const ids=category==='Hombre'?['men-jean-paul-gaultier-le-male-elixir','bleu']:category==='Mujer'?['good-girl-blush','my-way']:category==='Más vendidos'?['sauvage','good-girl']:category==='Todos'?['paradoxe','gypsy']:category==='Nuevos'?items.map(p=>p.id):['gypsy'];
 const featured=ids.map(id=>items.find(p=>p.id===id)).filter((p):p is Product=>!!p);
 function discover(){const target=document.getElementById('coleccion');target?.focus({preventScroll:true});target?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'})}
 return <section className={`collection-hero collection-${theme}`} aria-labelledby="collection-title">
  <div className="collection-geometry" aria-hidden="true"><i/><i/><i/></div>
  <div className="content collection-stage">
   <div className="collection-breadcrumb"><Link href="/">{t('Inicio','Home')}</Link><span>/</span><span>{copy.label}</span></div>
   <div className="collection-composition">
    <div className="collection-story" data-reveal>
     <p className="collection-kicker"><span/>{copy.kicker}</p>
     <h1 id="collection-title"><span>{copy.intro}</span>{' '}<em>{copy.title}</em></h1>
     <p className="collection-story-description">{copy.description}</p>
     <button className="gold-button collection-discover" onClick={discover}>{t('Descubrir fragancias','Discover fragrances')}<ArrowDown size={16}/></button>
    </div>
    <div className="collection-gallery" aria-label={t('Descubre la selección','Discover the selection')}>
     {featured.map((p,i)=><button className={`editorial-fragrance editorial-fragrance-${i+1}`} key={p.id} onClick={()=>onProduct(p)} aria-label={`${t('Descubrir','Discover')} ${p.name}`} data-reveal>
      <span className="editorial-fragrance-caption">{theme==='favourites'?t('Favorito','Favourite'):theme==='arrivals'?t('Nuevo','New'):p.brand??(p.id==='bleu'?'Chanel':'Byredo')}<ArrowUpRight size={14}/></span>
      <ProductPhoto product={p} eager/>
      <span className="editorial-fragrance-name">{theme==='her'&&p.brand?p.name.replace(`${p.brand} `,''):p.name}</span>
     </button>)}
    </div>
   </div>
   <div className="collection-colophon"><span>{copy.note}</span><span>SOLUNA FRAGRANCE <MoveUpRight size={13}/></span></div>
  </div>
 </section>;
}
