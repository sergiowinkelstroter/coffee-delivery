import { v4 as uuid } from "uuid";

import Americano from "../assets/americano.png";
import Arabe from "../assets/arabe.png";
import latte from "../assets/latte.png";
import irlandes from "../assets/irlandes.png";
import mochaccino from "../assets/mochaccino.png";
import macchiato from "../assets/macchiato.png";
import cubano from "../assets/cubano.png";
import capuccino from "../assets/capuccino.png";
import chocolateQuente from "../assets/chocolate-quente.png";
import cafeGelado from "../assets/cafe-gelado.png";
import cafeComLeite from "../assets/cafe-com-leite.png";
import expresso from "../assets/expresso.png";
import expressoCremoso from "../assets/expresso-cremoso.png";

export const coffees = [
  {
    id: uuid(),
    title: "Expresso Tradicional",
    category: ["tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    image: expresso,
    price: 9.9,
  },
  {
    id: uuid(),
    title: "Expresso Americano",
    category: ["tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    image: Americano,
    price: 9.9,
  },
  {
    id: uuid(),
    title: "Expresso Cremoso",
    category: ["tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    image: expressoCremoso,
    price: 9.9,
  },
  {
    id: uuid(),
    title: "Expresso Gelado",
    category: ["tradicional", "gelado"],
    description: "O tradicional café feito com água quente e grãos moídos",
    image: cafeGelado,
    price: 9.9,
  },
  {
    id: uuid(),
    title: "Café com Leite",
    category: ["tradicional", "com leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    image: cafeComLeite,
    price: 9.9,
  },
  {
    id: uuid(),
    title: "Latte",
    category: ["tradicional", "com leite"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    image: latte,
    price: 9.9,
  },
  {
    id: uuid(),
    title: "Capuccino",
    category: ["tradicional", "com leite"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    image: capuccino,
    price: 9.9,
  },
  {
    id: uuid(),
    title: "Macchiato",
    category: ["tradicional", "com leite"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    image: macchiato,
    price: 9.9,
  },
  {
    id: uuid(),
    title: "Mocaccino",
    category: ["tradicional", "com leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    image: mochaccino,
    price: 9.9,
  },
  {
    id: uuid(),
    title: "Chocolate Quente",
    category: ["especial", "com leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    image: chocolateQuente,
    price: 9.9,
  },
  {
    id: uuid(),
    title: "Cubano",
    category: ["especial", "alcoólico", "gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    image: cubano,
    price: 9.9,
  },
  {
    id: uuid(),
    title: "Árabe",
    category: ["especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    image: Arabe,
    price: 9.9,
  },
  {
    id: uuid(),
    title: "Irlandês",
    category: ["especial", "alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    image: irlandes,
    price: 9.9,
  },
];
