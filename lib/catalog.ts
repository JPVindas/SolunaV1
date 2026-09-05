export type Product = {id:string;name:string;size:string;price:number|null;x:number;y?:number;category:string;isNew?:boolean};
export type Cart = Record<string,number>;
export const products: Product[] = [
 {id:'sauvage',name:'Dior Sauvage EDT',size:'100 ml',price:62000,x:57,category:'Hombre'},
 {id:'bleu',name:'Bleu de Chanel Parfum',size:'100 ml',price:68000,x:244,category:'Hombre'},
 {id:'million',name:'Paco Rabanne 1 Million EDT',size:'100 ml',price:59000,x:430,category:'Hombre'},
 {id:'good-girl',name:'Carolina Herrera Good Girl',size:'80 ml',price:69000,x:618,category:'Mujer'},
 {id:'black-opium',name:'YSL Black Opium EDP',size:'90 ml',price:72000,x:804,category:'Mujer',isNew:true},
 {id:'acqua',name:'Acqua di Giò Profumo',size:'125 ml',price:64000,x:991,category:'Hombre',isNew:true},
 {id:'gypsy',name:'Byredo Gypsy Water',size:'Consultar presentación',price:null,x:817,y:632,category:'Unisex'},
];
export const money = (n:number) => '₡'+new Intl.NumberFormat('en-US',{maximumFractionDigits:0}).format(n);
const normalize=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
export function filterProducts(category:string,query='') {return products.filter(p=>(category==='Todos'||(category==='Más vendidos'?p.id!=='gypsy':category==='Nuevos'?p.isNew:p.category===category))&&normalize(p.name).includes(normalize(query)));}
export function updateCart(cart:Cart,id:string,delta:number):Cart {
 if(!products.some(p=>p.id===id)||!Number.isInteger(delta))throw new Error('Producto o cantidad no válido');
 const next={...cart};const quantity=Math.min(99,Math.max(0,(next[id]??0)+delta));
 if(quantity===0)delete next[id];else next[id]=quantity;
 return next;
}
