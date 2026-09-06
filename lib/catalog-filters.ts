import type {Product} from './catalog';
export type Filters={brands:string[];genders:string[];prices:string[];sizes:string[];concentrations:string[]};
export const emptyFilters=():Filters=>({brands:[],genders:[],prices:[],sizes:[],concentrations:[]});
export function brandOf(p:Product):string {if(p.brand==='Odyssey')return 'Armaf';if(p.brand==='Árabes')return p.name.startsWith('Maison Alhambra')?'Maison Alhambra':p.name.split(' ')[0];if(p.brand)return p.brand;return ({sauvage:'Dior',bleu:'Chanel',million:'Paco Rabanne',acqua:'Giorgio Armani',gypsy:'Byredo'} as Record<string,string>)[p.id]??p.name.split(' ')[0]}
export function concentrationOf(p:Product):string {if(['good-girl','black-opium'].includes(p.id)||/\bEDP\b|Eau de Parfum/i.test(p.name))return 'edp';if(/\bEDT\b|Eau de Toilette/i.test(p.name))return 'edt';if(p.id==='bleu')return 'parfum';return 'unknown'}
export function priceOf(p:Product):string {if(p.price===null)return 'unknown';return p.price<60000?'under60':p.price<=70000?'60to70':'over70'}
export function sizeOf(p:Product):string {const match=p.size.match(/^(\d+)\s*ml$/i);if(!match)return 'unknown';const ml=Number(match[1]);return ml<30?'under30':ml<75?'30to74':ml<100?'75to99':ml<150?'100to149':ml<200?'150to199':'over200'}
export function applyFilters(items:Product[],filters:Filters){return items.filter(p=>(!filters.brands.length||filters.brands.includes(brandOf(p)))&&(!filters.genders.length||filters.genders.includes(p.category))&&(!filters.prices.length||filters.prices.includes(priceOf(p)))&&(!filters.sizes.length||filters.sizes.includes(sizeOf(p)))&&(!filters.concentrations.length||filters.concentrations.includes(concentrationOf(p))))}
export const filterCount=(filters:Filters)=>Object.values(filters).reduce((n,values)=>n+values.length,0);

