import tb from "../assets/New workstation 1 (2).png";
import nb from "../assets/New design 2023 (4).png";
import wh from "../assets/New workstation 1 (3).png";
import st from "../assets/New design 2023 (2).png";
import work from "../assets/New workstation 1 (1).png";
import des from "../assets/New design 2023 (3).png";
import mo from "../assets/New design 2023 (6).png";
import flat from "../assets/New design 2023 (7).png";
import Window from "../assets/New workstation 1 (4).png";
import rest from "../assets/Cantebury Office Chair (1).png";
import parm from "../assets/headrest.png";
import white from "../assets/WhatsApp Image 2024-04-03 at 10.40.40 PM.jpeg";
import hr from "../assets/New workstation 1 (6).png";
import nw from "../assets/New design 2023 (8).png";
import jm from "../assets/New workstation 1 (7).png";
import game from "../assets/New design 2023 (9).png";
import fl from "../assets/New workstation 1 (8).png";
import ds from "../assets/New design 2023 (10).png";
import bx from "../assets/New design 2023 (11).png";
import zx from "../assets/New design 2023 (12).png";
import vb from "../assets/New design 2023 (13).png";
import sc from "../assets/New design 2023 (14).png";
import light from "../assets/New design 2023 (15).png";
import globe from "../assets/New design 2023 (16).png";
import lap from "../assets/New design 2023 (17).png";
import diary from "../assets/New workstation 1 (9).png";
import vc from "../assets/New workstation 1 (10).png";
import board from "../assets/New workstation 1 (11).png";
import nh from "../assets/New workstation 1 (12).png";
import router from "../assets/New design 2023 (18).png";

export const products = [
  {
    id: "1",
    name: "New Workspace Design",
    price: 399,
    image: st,
    category: "Workstation",
  },

  {
    id: "2",
    name: "Customize Office Workspace",
    price: 460,
    image: work,
    category: "Workstation",
  },

  {
    id: "3",
    name: "Ultra-Decor workspace for you",
    price: 550,
    image: des,
    category: "Workstation",
  },
  {
    id: "4",
    name: "Adjustable Home Desk",
    price: 120,
    image: tb,
    category: "Tables",
  },
  {
    id: "5",
    name: "Standing Desk Edge Home",
    price: 89.0,
    image: nb,
    category: "Tables",
  },
  {
    id: "6",
    name: "Danish Modern Desk Solid",
    price: 45000,
    image: wh,
    category: "Tables",
  },
  {
    id: "7",
    name: "Mac IOS Brand Deskop",
    price: 870,
    image: mo,
    category: "PC",
  },
  {
    id: "8",
    name: "CES 2017_ Samsung Goes Curvy",
    price: 440,
    image: flat,
    category: "PC",
  },
  {
    id: "9",
    name: "DELL Desktop Computer Package",
    price: 645,
    image: Window,
    category: "PC",
  },
  {
    id: "10",
    name: "Centebury Office Chair",
    price: 98,
    image: rest,
    category: "Chairs",
  },

  {
    id: "11",
    name: "Adjustable Chair",
    price: 195,
    image: parm,
    category: "Chairs",
  },

  {
    id: "12",
    name: "Best Ergonomic Recliners - Foter",
    price: 230,
    image: white,
    category: "Chairs",
  },
  {
    id: "13",
    name: "Workspace Desktop Gadget",
    price: 3000,
    image: hr,
    category: "Accessories",
  },
  {
    id: "14",
    name: "Workstation setup",
    price: 3000,
    image: nw,
    category: "Accessories",
  },
  {
    id: "15",
    name: "i7 core touch screen desktop monoblock",
    price: 930,
    image: jm,
    category: "Accessories",
  },
  {
    id: "16",
    name: "Gaming Chair Portable",
    price: 85,
    image: game,
    category: "New Arrivals",
  },
  {
    id: "17",
    name: "Cheap Live Edge Desk",
    price: 100,
    image: fl,
    category: "New Arrivals",
  },
  {
    id: "18",
    name: "New Workspace Design",
    price: 950,
    image: ds,
    category: "New Arrivals",
  },
  {
    id: "19",
    name: "Personal Workspace Desk",
    price: 120,
    image: bx,
    category: "Coming Soon",
  },
  {
    id: "20",
    name: "Mini Office Cubicle",
    price: 555,
    image: zx,
    category: "Coming Soon",
  },
  {
    id: "21",
    name: "Wooden Desk Lamp",
    price: 555,
    image: vb,
    category: "Coming Soon",
  },
  {
    id: "22",
    name: "Apple Imac 27inches",
    price: 345,
    image: sc,
    category: "Discount",
  },
  {
    id: "23",
    name: "Ring Light Stand",
    price: 45,
    image: light,
    category: "Discount",
  },
  {
    id: "24",
    name: "Rotating World Globe| Table Shelf Decor",
    price: 39,
    image: globe,
    category: "Discount",
  },
  {
    id: "25",
    name: "Dell XPS 13",
    price: 3050,
    image: lap,
    category: "Just For You",
  },
  {
    id: "26",
    name: "Journal",
    price: 3050,
    image: diary,
    category: "Just For You",
  },
  {
    id: "27",
    name: "Dope Tech biggest ultrawide monitor",
    price: 2050,
    image: vc,
    category: "Just For You",
  },
  {
    id: "28",
    name: "Wireless Gaming Keyboard And Mouse",
    price: 18,
    image: board,
    category: "Top Selling",
  },
  {
    id: "29",
    name: "Andweson Executive Desk Australlian Gold",
    price: 93,
    image: nh,
    category: "Top Selling",
  },
  {
    id: "30",
    name: "TP-LINK TL-WR940N Router",
    price: 53,
    image: router,
    category: "Top Selling",
  },
];

export const productIdMap = Object.fromEntries(
  products.map((product) => [product.id, product])
);

export const productsCategoryMap = products.reduce((acc, curr) => {
  if (!acc[curr.category]) acc[curr.category] = [];
  acc[curr.category].push(curr);

  return acc;
}, {});
