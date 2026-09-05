export type Product = {id:string;name:string;size:string;price:number|null;x?:number;y?:number;category:string;isNew?:boolean;brand?:string;featured?:boolean};
export type Cart = Record<string,number>;
export const womenBrands = [
 {brand:'Carolina Herrera',items:[['good-girl','Good Girl',true],['good-girl-blush','Good Girl Blush'],['212-vip-rose','212 VIP Rosé'],['212-nyc','212 NYC']]},
 {brand:'Yves Saint Laurent',items:[['libre','Libre',true],['black-opium','Black Opium',true],['libre-intense','Libre Intense'],['mon-paris','Mon Paris']]},
 {brand:'Lancôme',items:[['la-vie-est-belle','La Vie Est Belle',true],['la-vie-est-belle-extrait','La Vie Est Belle L’Extrait'],['idole','Idôle'],['idole-nectar','Idôle Nectar']]},
 {brand:'Dior',items:[['jadore','J’adore',true],['miss-dior','Miss Dior'],['hypnotic-poison','Hypnotic Poison'],['dior-addict','Dior Addict']]},
 {brand:'Chanel',items:[['coco-mademoiselle','Coco Mademoiselle',true],['chance-eau-tendre','Chance Eau Tendre'],['chance-eau-fraiche','Chance Eau Fraîche'],['chanel-5','N°5']]},
 {brand:'Giorgio Armani',items:[['si','Sì',true],['my-way','My Way'],['my-way-intense','My Way Intense'],['si-passione','Sì Passione']]},
 {brand:'Valentino',items:[['donna-born-in-roma','Donna Born in Roma',true],['born-in-roma-intense','Born in Roma Intense'],['born-in-roma-green-stravaganza','Born in Roma Green Stravaganza'],['donna','Donna']]},
 {brand:'Prada',items:[['paradoxe','Paradoxe',true],['paradoxe-intense','Paradoxe Intense'],['paradoxe-virtual-flower','Paradoxe Virtual Flower'],['candy','Candy']]},
 {brand:'Gucci',items:[['flora-gorgeous-gardenia','Flora Gorgeous Gardenia'],['flora-gorgeous-magnolia','Flora Gorgeous Magnolia'],['guilty-pour-femme','Guilty Pour Femme'],['bloom','Bloom']]},
 {brand:'Versace',items:[['bright-crystal','Bright Crystal',true],['crystal-noir','Crystal Noir'],['dylan-purple','Dylan Purple'],['dylan-blue-pour-femme','Dylan Blue Pour Femme']]},
] satisfies {brand:string;items:[string,string,boolean?][]}[];
export const womenProducts:Product[]=womenBrands.flatMap(({brand,items})=>items.map(([id,name,featured])=>({id,name:`${brand} ${name}`,brand,featured:!!featured,category:'Mujer',size:id==='good-girl'?'80 ml':id==='black-opium'?'90 ml':'Consultar presentación',price:id==='good-girl'?69000:id==='black-opium'?72000:null,...(id==='black-opium'?{x:804,isNew:true}:{})})));
export const menGroups = [
 {brand:'Jean Paul Gaultier',items:['Le Male Elixir','Le Male Le Parfum','Le Beau Le Parfum','Ultra Male','Le Beau Paradise Garden','Le Male EDT','Scandal Pour Homme Le Parfum','Le Beau EDP']},
 {brand:'Dolce & Gabbana',items:['The One Eau de Parfum','Light Blue Intense Pour Homme','Light Blue Summer Vibez','K EDP','K Parfum','Light Blue Forever Parfum','The One Gold for Men','Pour Homme']},
 {brand:'Carolina Herrera',items:['Bad Boy Cobalt EDP','212 VIP Black EDP','CH Men EDT','Bad Boy Extreme','212 NYC Men','Bad Boy Le Parfum','212 VIP Men','Bad Boy Elixir']},
 {brand:'Odyssey',items:['Mandarin Sky','Aqua','Homme','Mega','Wild One']},
 {brand:'Chanel',items:['Bleu de Chanel Parfum','Allure Homme Sport Eau Extrême','Bleu de Chanel EDP','Platinum Égoïste','Allure Homme Édition Blanche']},
 {brand:'Paco Rabanne',items:['One Million Elixir','Invictus Victory Elixir','Phantom Parfum','One Million Lucky','Invictus Aqua','Invictus Parfum','One Million Parfum']},
 {brand:'Dior',items:['Homme Intense','Sauvage Elixir','Homme','Sauvage EDP','Homme Parfum','Sauvage Parfum']},
 {brand:'Giorgio Armani',items:['Acqua di Giò Profondo','Stronger With You Absolutely','Armani Code Parfum','Acqua di Giò Parfum','Stronger With You Intensely','Acqua di Giò Profumo','Stronger With You Parfum','Armani Code EDP']},
 {brand:'Árabes',items:['Afnan 9PM','Lattafa Khamrah','Armaf Club de Nuit Intense Man Limites','Armaf Odyssey Mandarin Sky','Afnan Supremacy Not Only Intense','Lattafa Asad','Maison Alhambra Jean Lowe Immortal','Lattafa Maahir Legacy','Afnan Turathi Blue']},
 {brand:'Valentino',items:['Uomo Born in Roma Intense','Uomo Born in Roma Coral Fantasy','Uomo Intense','Uomo Born in Roma EDT','Uomo Yellow Dream']},
 {brand:'Azzaro',items:['The Most Wanted Parfum','Wanted by Night','The Most Wanted EDP','Wanted EDT','Chrome Extreme']},
 {brand:'Prada',items:['Luna Rossa Black','L’Homme','Luna Rossa Ocean EDP','Luna Rossa Carbon','L’Homme Intense']},
 {brand:'Montblanc',items:['Explorer','Legend EDP','Legend Spirit','Explorer Platinum','Individuel']},
];
const slug=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const menProducts:Product[]=menGroups.flatMap(({brand,items})=>items.filter(name=>name!=='Armaf Odyssey Mandarin Sky').map(name=>{
 const isBleu=brand==='Chanel'&&name==='Bleu de Chanel Parfum';
 const isAcqua=name==='Acqua di Giò Profumo';
 return {id:isBleu?'bleu':isAcqua?'acqua':slug(`men-${brand}-${name}`),name:brand==='Árabes'||isBleu?name:`${brand} ${name}`,brand,category:'Hombre',size:isBleu?'100 ml':isAcqua?'125 ml':'Consultar presentación',price:isBleu?68000:isAcqua?64000:null,...(isBleu?{x:244}:isAcqua?{x:991,isNew:true}:{})};
}));

export const products: Product[] = [
 {id:'sauvage',name:'Dior Sauvage EDT',size:'100 ml',price:62000,x:57,category:'Hombre'},
 {id:'bleu',name:'Bleu de Chanel Parfum',size:'100 ml',price:68000,x:244,category:'Hombre'},
 {id:'million',name:'Paco Rabanne 1 Million EDT',size:'100 ml',price:59000,x:430,category:'Hombre'},
 ...womenProducts.slice(0,1),...womenProducts.filter(p=>p.id==='black-opium'),
 {id:'acqua',name:'Acqua di Giò Profumo',size:'125 ml',price:64000,x:991,category:'Hombre',isNew:true},
 {id:'gypsy',name:'Byredo Gypsy Water',size:'Consultar presentación',price:null,x:817,y:632,category:'Unisex'},
 ...womenProducts.filter(p=>!['good-girl','black-opium'].includes(p.id)),
 ...menProducts.filter(p=>!['bleu','acqua'].includes(p.id)),
];
export const money = (n:number) => '₡'+new Intl.NumberFormat('en-US',{maximumFractionDigits:0}).format(n);
const normalize=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’']/g,'').toLowerCase().trim();
export function filterProducts(category:string,query='') {return (category==='Mujer'?womenProducts:category==='Hombre'?menProducts:products).filter(p=>(category==='Todos'||(category==='Más vendidos'?['sauvage','bleu','million','good-girl','black-opium','acqua'].includes(p.id):category==='Nuevos'?p.isNew:p.category===category))&&normalize(p.name).includes(normalize(query)));}
export function updateCart(cart:Cart,id:string,delta:number):Cart {
 if(!products.some(p=>p.id===id)||!Number.isInteger(delta))throw new Error('Producto o cantidad no válido');
 const next={...cart};const quantity=Math.min(99,Math.max(0,(next[id]??0)+delta));
 if(quantity===0)delete next[id];else next[id]=quantity;
 return next;
}


export function concentration(p:Product){if(/\bEDT\b/i.test(p.name))return "Eau de Toilette · EDT";if(/\bEDP\b|Eau de Parfum/i.test(p.name))return "Eau de Parfum · EDP";return "Consultar concentración";}
