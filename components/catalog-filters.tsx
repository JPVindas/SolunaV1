'use client';
import {useState} from 'react';
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from '@/components/ui/accordion';
import {Checkbox} from '@/components/ui/checkbox';
import {Slider} from '@/components/ui/slider';
import {Search,SlidersHorizontal} from 'lucide-react';
import {useLanguage} from '@/components/language-provider';
import {brandOf,filterCount,emptyFilters,type Filters} from '@/lib/catalog-filters';
import {products,type Product} from '@/lib/catalog';
export function CatalogFilters({filters,onChange,items=products}:{filters:Filters;onChange:(f:Filters)=>void;items?:Product[]}){
 const {t}=useLanguage();const [brandQuery,setBrandQuery]=useState('');
 const brands=Array.from(new Set(items.map(brandOf))).sort((a,b)=>a.localeCompare(b));
 const count=(test:(p:Product)=>boolean)=>items.filter(test).length;
 const brandCounts=Object.fromEntries(brands.map(brand=>[brand,count(p=>brandOf(p)===brand)]));
 const sizeValues=Array.from(new Set(items.map(p=>p.size.match(/^(\d+)\s*ml$/i)?.[1]).filter(Boolean) as string[])).sort((a,b)=>Number(a)-Number(b));
 const matches=brands.filter(b=>b.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').includes(brandQuery.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')));
 function toggle(key:'brands'|'genders'|'sizes'|'concentrations'|'occasions'|'families',value:string){onChange({...filters,[key]:filters[key].includes(value)?filters[key].filter(v=>v!==value):[...filters[key],value]})}
 const options=(key:'brands'|'genders'|'sizes'|'concentrations'|'occasions'|'families',values:[string,string,number][])=>values.map(([value,label,total])=><label className="filter-choice" key={value}><Checkbox checked={filters[key].includes(value)} onCheckedChange={()=>toggle(key,value)}/><span>{label}</span><small>{total}</small></label>);
 function clear(){const reset=emptyFilters();onChange(reset);setBrandQuery('')}
 return <div className="catalog-filters"><div className="filters-heading"><h2><SlidersHorizontal size={17}/>{t('Filtros','Filters')} <span>({filterCount(filters)})</span></h2></div><p className="filter-catalog-label">{t('Fragancias y perfumes','Fragrances & perfumes')}</p><Accordion defaultValue={['price','brands','gender']} multiple>
 <AccordionItem value="price"><AccordionTrigger>{t('Rango de precio','Price range')}</AccordionTrigger><AccordionContent><div className="price-values"><span>₡{filters.priceRange[0]}</span><span>₡{filters.priceRange[1]}</span></div><Slider min={0} max={235000} step={5000} value={filters.priceRange} onValueChange={value=>{if(Array.isArray(value))onChange({...filters,priceRange:[Number(value[0]),Number(value[1])]})}}/></AccordionContent></AccordionItem>
 <AccordionItem value="brands"><AccordionTrigger>{t('Marcas','Brands')}</AccordionTrigger><AccordionContent><div className="brand-search"><Search size={15}/><input aria-label={t('Buscar una marca','Find a brand')} placeholder={t('Buscar una marca','Find a brand')} value={brandQuery} onChange={e=>setBrandQuery(e.target.value)}/></div><div className="filter-scroll">{options('brands',matches.map(b=>[b,b.toUpperCase(),brandCounts[b]]))}</div>{matches.length===0&&<p>{t('No encontramos esa marca.','No matching brands.')}</p>}</AccordionContent></AccordionItem>
 <AccordionItem value="occasion"><AccordionTrigger>{t('Filtrar por ocasión','Filter by occasion')}</AccordionTrigger><AccordionContent>{options('occasions',[['unknown',t('Por confirmar','To be confirmed'),items.length]])}</AccordionContent></AccordionItem>
 <AccordionItem value="sizes"><AccordionTrigger>{t('Filtrar por tamaño','Filter by size')}</AccordionTrigger><AccordionContent><div className="filter-scroll">{options('sizes',[...sizeValues.map(v=>[v,`${v}ML`,count(p=>p.size.toLowerCase()===`${v} ml`)] as [string,string,number]),['unknown',t('POR CONFIRMAR','TO BE CONFIRMED'),count(p=>!/^\d+\s*ml$/i.test(p.size))]])}</div></AccordionContent></AccordionItem>
 <AccordionItem value="gender"><AccordionTrigger>{t('Filtrar por género','Filter by gender')}</AccordionTrigger><AccordionContent>{options('genders',[['Unisex','UNISEX',count(p=>p.category==='Unisex')],['Hombre',t('PERFUMES DE HOMBRE','MEN’S FRAGRANCES'),count(p=>p.category==='Hombre')],['Mujer',t('PERFUMES DE MUJER','WOMEN’S FRAGRANCES'),count(p=>p.category==='Mujer')]])}</AccordionContent></AccordionItem>
 <AccordionItem value="family"><AccordionTrigger>{t('Filtrar por familia olfativa','Filter by fragrance family')}</AccordionTrigger><AccordionContent>{options('families',[['unknown',t('POR CONFIRMAR','TO BE CONFIRMED'),items.length]])}</AccordionContent></AccordionItem>
 <AccordionItem value="base"><AccordionTrigger>{t('Concentración','Concentration')}</AccordionTrigger><AccordionContent>{options('concentrations',[['edp','Eau de Parfum · EDP',count(p=>/\bEDP\b|Eau de Parfum/i.test(p.name)||['good-girl','black-opium'].includes(p.id))],['edt','Eau de Toilette · EDT',count(p=>/\bEDT\b|Eau de Toilette/i.test(p.name))],['parfum','Parfum',count(p=>p.id==='bleu')],['unknown',t('Concentración por consultar','Concentration on request'),count(p=>!(/\bEDP\b|Eau de Parfum|\bEDT\b|Eau de Toilette/i.test(p.name)||['good-girl','black-opium','bleu'].includes(p.id)))]])}</AccordionContent></AccordionItem>
 </Accordion><button className="filter-clear" onClick={clear}>{t('Limpiar','Clear')}</button></div>
}
