'use client';
import type {CSSProperties} from 'react';
import {useLanguage} from '@/components/language-provider';
import type {Product} from '@/lib/catalog';
import productImages from '@/lib/product-images.json';

export function ProductPhoto({product,eager=false}:{product:Product;eager?:boolean}){
 const {t}=useLanguage();
 const image=(productImages as Record<string,{src:string}>)[product.id];
 if(image)return <div className="product-image"><img src={image.src} alt={product.name} loading={eager?'eager':'lazy'} decoding="async"/></div>;
 if(product.x===undefined)return <div className="perfume-identity"><span>SOLUNA</span><i aria-hidden="true"/><strong>{product.name}</strong><small>{t('FOTO POR CONFIRMAR','PHOTO TO BE CONFIRMED')}</small></div>;
 const y=product.y??883;const h=product.y?183:164;
 return <div className="photo" role="img" aria-label={product.name} style={{aspectRatio:`164/${h}`,'--photo-ratio':`164/${h}`} as CSSProperties}><img src="/soluna-reference.png" alt="" draggable={false} style={{width:`${1222/164*100}%`,maxWidth:'none',left:`${-product.x/164*100}%`,top:`${-y/h*100}%`}}/></div>;
}
