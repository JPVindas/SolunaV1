'use client';
import {useState} from 'react';
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from '@/components/ui/accordion';
import {Checkbox} from '@/components/ui/checkbox';
import {Search,SlidersHorizontal} from 'lucide-react';
import {useLanguage} from '@/components/language-provider';
import {brandOf,filterCount,emptyFilters,type Filters} from '@/lib/catalog-filters';
import {products} from '@/lib/catalog';
const brands=Array.from(new Set(products.map(brandOf))).sort((a,b)=>a.localeCompare(b));
export function CatalogFilters({filters,onChange}:{filters:Filters;onChange:(f:Filters)=>void}){
 const {t}=useLanguage();const [brandQuery,setBrandQuery]=useState('');const [showMore,setShowMore]=useState(false);
 const matches=brands.filter(b=>b.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').includes(brandQuery.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')));
 function toggle(key:keyof Filters,value:string){onChange({...filters,[key]:filters[key].includes(value)?filters[key].filter(v=>v!==value):[...filters[key],value]})}
 const options=(key:keyof Filters,values:[string,string][])=>values.map(([value,label])=><label className="filter-choice" key={value}><Checkbox checked={filters[key].includes(value)} onCheckedChange={()=>toggle(key,value)}/><span>{label}</span></label>);
 return <div className="catalog-filters"><div className="filters-heading"><h2><SlidersHorizontal size={17}/>{t('Filtros','Filters')} <span>({filterCount(filters)})</span></h2><button onClick={()=>{onChange(emptyFilters());setBrandQuery('')}} disabled={!filterCount(filters)&&!brandQuery}>{t('Limpiar todo','Clear all')}</button></div><p className="filter-catalog-label">{t('Fragancias y perfumes','Fragrances & perfumes')}</p><Accordion defaultValue={['brands','gender','price']} multiple>
 <AccordionItem value="price"><AccordionTrigger>{t('Precio','Price')}</AccordionTrigger><AccordionContent>{options('prices',[['under60',t('Menos de ₡60,000','Under ₡60,000')],['60to70','₡60,000 – ₡70,000'],['over70',t('Más de ₡70,000','Over ₡70,000')],['unknown',t('Precio por consultar','Price on request')]])}</AccordionContent></AccordionItem>
 <AccordionItem value="brands"><AccordionTrigger>{t('Marca','Brand')}</AccordionTrigger><AccordionContent><div className="brand-search"><Search size={15}/><input aria-label={t('Buscar una marca','Find a brand')} placeholder={t('Buscar una marca','Find a brand')} value={brandQuery} onChange={e=>setBrandQuery(e.target.value)}/></div>{options('brands',(showMore||brandQuery?matches:matches.slice(0,7)).map(b=>[b,b]))}{matches.length===0&&<p>{t('No encontramos esa marca.','No matching brands.')}</p>}{matches.length>7&&!brandQuery&&<button className="filter-see-more" onClick={()=>setShowMore(!showMore)}>{showMore?t('Ver menos','See less'):t('Ver más','See more')} {showMore?'−':'+'}</button>}</AccordionContent></AccordionItem>
 <AccordionItem value="gender"><AccordionTrigger>{t('Género','Gender')}</AccordionTrigger><AccordionContent>{options('genders',[['Mujer',t('Mujer','Women')],['Hombre',t('Hombre','Men')],['Unisex','Unisex']])}</AccordionContent></AccordionItem>
 <AccordionItem value="sizes"><AccordionTrigger>{t('Tamaño de la fragancia','Fragrance size')}</AccordionTrigger><AccordionContent>{options('sizes',[['under30','< 1 oz · < 30 ml'],['30to74','1–2.4 oz · 30–74 ml'],['75to99','2.5–3.2 oz · 75–99 ml'],['100to149','3.3–4.9 oz · 100–149 ml'],['150to199','5–6.5 oz · 150–199 ml'],['over200','6.7 oz + · 200 ml +'],['unknown',t('Tamaño por consultar','Size on request')]])}</AccordionContent></AccordionItem>
 <AccordionItem value="base"><AccordionTrigger>{t('Concentración','Concentration')}</AccordionTrigger><AccordionContent>{options('concentrations',[['edp','Eau de Parfum · EDP'],['edt','Eau de Toilette · EDT'],['parfum','Parfum'],['unknown',t('Concentración por consultar','Concentration on request')]])}</AccordionContent></AccordionItem>
 </Accordion></div>
}
