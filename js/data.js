/* Mock Data — Raízes do Nordeste */

const units = [
  { id: 1, name: "Recife Centro",        address: "Rua do Bom Jesus, 123 — Recife, PE",       hours: "Seg–Dom: 06h–22h" },
  { id: 2, name: "Fortaleza Aldeota",    address: "Av. Santos Dumont, 456 — Fortaleza, CE",   hours: "Seg–Dom: 07h–21h" },
  { id: 3, name: "Salvador Pelourinho",  address: "Praça da Sé, 78 — Salvador, BA",           hours: "Seg–Dom: 06h–20h" },
  { id: 4, name: "João Pessoa Centro",   address: "Rua das Trincheiras, 200 — João Pessoa, PB", hours: "Seg–Dom: 06h–22h" },
];

const categories = ["Todos", "Café da Manhã", "Tapiocas", "Cuscuz", "Lanches", "Sucos", "Sobremesas"];

// Cores de placeholder para os cards (paleta neutra de fotos de comida)
const thumbColors = {
  "Café da Manhã": ["#795548","#6D4C41","#4E342E"],
  "Tapiocas":      ["#8D6E63","#A1887F","#6D4C41"],
  "Cuscuz":        ["#BF8A5E","#A97040","#9E7B52"],
  "Lanches":       ["#7B5E3D","#6B4C2C","#5D4037"],
  "Sucos":         ["#558B2F","#33691E","#2E7D32"],
  "Sobremesas":    ["#AD1457","#880E4F","#C2185B"],
};

const products = [
  { id:  1, name:"Café com Leite + Bolo de Macaxeira", category:"Café da Manhã", color:"#5D4037", img:'img/cafe_bolo_macaxeira.jpeg',      price:11.90, units:[1,2,3,4], seasonal:false, description:"Café passado na hora com leite integral e fatia de bolo de macaxeira artesanal" },
  { id:  2, name:"Mingau de Milho",                    category:"Café da Manhã", color:"#795548", img:'img/mingau_milho.jfif',              price: 8.50, units:[1,3,4],   seasonal:false, description:"Mingau cremoso de milho com canela e açúcar" },
  { id:  3, name:"Café Nordestino Completo",            category:"Café da Manhã", color:"#4E342E", img:'img/cafe_nordestino_completo.jpeg',  price:18.90, units:[1,2,3,4], seasonal:false, description:"Café, leite, bolo, tapioca e queijo coalho" },
  { id:  4, name:"Tapioca Queijo Coalho",               category:"Tapiocas",      color:"#8D6E63", img:'img/tapioca_queijo.jfif',            price: 9.90, units:[1,2,3,4], seasonal:false, description:"Tapioca crocante com queijo coalho grelhado" },
  { id:  5, name:"Tapioca Carne de Sol",                category:"Tapiocas",      color:"#6D4C41", img:'img/tapioca_carnesol.jfif',          price:13.90, units:[1,2,3],   seasonal:false, description:"Tapioca recheada com carne de sol desfiada e manteiga" },
  { id:  6, name:"Tapioca Doce de Leite",               category:"Tapiocas",      color:"#A1887F", img:'img/tapioca_doceLeite.jfif',         price:10.50, units:[1,2,3,4], seasonal:false, description:"Tapioca com doce de leite e coco ralado" },
  { id:  7, name:"Cuscuz com Manteiga",                 category:"Cuscuz",        color:"#BF8A5E", img:'img/cuzcuz_manteiga.jfif',           price: 7.90, units:[1,2,3,4], seasonal:false, description:"Cuscuz de milho com manteiga de garrafa nordestina" },
  { id:  8, name:"Cuscuz com Queijo e Ovo",             category:"Cuscuz",        color:"#A97040", img:'img/cuzcuz_queijo_ovo.jfif',         price:12.90, units:[1,2,4],   seasonal:false, description:"Cuscuz com queijo coalho e ovo mexido temperado" },
  { id:  9, name:"Cuscuz de Festa Junina",              category:"Cuscuz",        color:"#9E7B52", img:'img/cuzcuz_festaJunina.jfif',        price:14.90, units:[1,3],     seasonal:true,  description:"Edição limitada com carne, legumes e milho" },
  { id: 10, name:"Baião de Dois no Pão",                category:"Lanches",       color:"#7B5E3D", img:'img/lanche_carneSeca.jfif',          price:15.90, units:[1,2,3,4], seasonal:false, description:"Feijão verde com arroz e queijo no pão de fermentação natural" },
  { id: 11, name:"Arrumadinho Bowl",                    category:"Lanches",       color:"#6B4C2C", img:'img/arrumadinho_bowl.jfif',          price:17.90, units:[1,2],     seasonal:false, description:"Feijão de corda, carne seca, farofa e vinagrete" },
  { id: 12, name:"Suco de Umbu",                        category:"Sucos",         color:"#558B2F", img:'img/suco_umbu.jfif',                 price: 8.00, units:[1,3,4],   seasonal:false, description:"Suco natural de umbu batido na hora" },
  { id: 13, name:"Suco de Cajá",                        category:"Sucos",         color:"#33691E", img:'img/suco_caja.jpeg',                 price: 8.00, units:[1,2,3,4], seasonal:false, description:"Suco refrescante de cajá com polpa natural" },
  { id: 14, name:"Água de Coco",                        category:"Sucos",         color:"#2E7D32", img:'img/agua_coco.jpeg',                 price: 6.50, units:[1,2,3,4], seasonal:false, description:"Água de coco natural gelada" },
  { id: 15, name:"Cartola",                             category:"Sobremesas",    color:"#AD1457", img:'img/cartola.jfif',                   price: 9.90, units:[1,2,3,4], seasonal:false, description:"Banana frita com queijo coalho grelhado e canela" },
  { id: 16, name:"Bolo de Milho Junino",                category:"Sobremesas",    color:"#880E4F", img:'img/bolo_junino.jpeg',               price: 7.50, units:[1,3],     seasonal:true,  description:"Bolo de milho especial de festa junina" },
];

const promotions = [
  { id:1, title:"Combo Manhã Nordestina", desc:"Tapioca + Suco com 20% de desconto até 10h", tag:"20% OFF" },
  { id:2, title:"Sexta com Pontos Duplos", desc:"Pedidos nas sextas valem o dobro de pontos", tag:"2x Pontos" },
  { id:3, title:"Cuscuz da Semana", desc:"Cuscuz com Queijo e Ovo por R$ 9,90", tag:"Oferta" },
];

const rewards = [
  { id:1, name:"Suco Grátis",           cost:100 },
  { id:2, name:"Tapioca Grátis",        cost:200 },
  { id:3, name:"Café da Manhã Grátis",  cost:350 },
  { id:4, name:"10% de desconto",       cost:150 },
  { id:5, name:"Brinde especial",       cost:500 },
];

const currentUser = {
  name: "João da Silva",
  email: "joao@email.com",
  points: 320,
  level: "Bronze",
  nextLevel: 500,
};

const pointsHistory = [
  { date:"08/10/2026", desc:"Pedido #2341",    points:+50 },
  { date:"05/10/2026", desc:"Pedido #2310",    points:+30 },
  { date:"03/10/2026", desc:"Resgate: Suco",   points:-100 },
  { date:"01/10/2026", desc:"Pedido #2289",    points:+40 },
  { date:"28/09/2026", desc:"Sexta 2x Pontos", points:+80 },
];
