import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { ReactElement } from "react";

import TraditionalExpress from "../../assets/coffes/traditional-express.svg";
import AmericanExpress from "../../assets/coffes/american-express.svg";
import IcedExpress from "../../assets/coffes/iced-express.svg";

interface GuaranteesProps {
  id: number;
  icon?: ReactElement;
  content: string;
}

export const guarantees: GuaranteesProps[] = [
  {
    id: 1,
    icon: <ShoppingCart size={22} weight="bold" color="white" />,
    content: "Compra simples e segura",
  },
  {
    id: 2,
    icon: <Package size={22} weight="bold" color="white" />,
    content: "Embalagem mantém o café intacto",
  },
  {
    id: 3,
    icon: <Timer size={22} weight="bold" color="white" />,
    content: "Entrega rápida e rastreada",
  },
  {
    id: 4,
    icon: <Coffee size={22} weight="bold" color="white" />,
    content: "O café chega fresquinho até você",
  },
];

interface CoffesProps {
  id: number;
  icon?: ReactElement;
  type?: string[];
  title?: string;
  description?: string;
  quantity?: number;
  price: number;
}

export const coffes: CoffesProps[] = [
  {
    id: 1,
    icon: <img src={TraditionalExpress} alt="Expresso Tradicional" />,
    type: ["Tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 2,
    icon: <img src={AmericanExpress} alt="Expresso Americano" />,
    type: ["Americano"],
    title: "Expresso Americano",
    description: "O expresso americano feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 3,
    icon: <img src={IcedExpress} alt="Expresso" />,
    type: ["Tradicional"],
    title: "Expresso Gelado",
    description: "O expresso gelado feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 4,
    icon: <img src={TraditionalExpress} alt="Expresso Tradicional" />,
    type: ["Tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 5,
    icon: <img src={TraditionalExpress} alt="Café com leite" />,
    type: ["Tradicional", "Com leite"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: 6,
    icon: <img src={TraditionalExpress} alt="Latte" />,
    type: ["Tradicional", "Com leite"],
    title: "Latte",
    description:
      "Uma dose de café expresso com dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: 6,
    icon: <img src={TraditionalExpress} alt="Capuccino" />,
    type: ["Tradicional", "Com leite"],
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: 7,
    icon: <img src={TraditionalExpress} alt="Macchiato" />,
    type: ["Tradicional", "Com leite"],
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
];
