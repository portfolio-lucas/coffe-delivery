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

interface TypesProps {
  id: number;
  description: string;
}

export interface CoffesProps {
  id: number;
  icon?: ReactElement;
  types?: TypesProps[];
  title?: string;
  description?: string;
  quantity: number;
  price: number;
}

export const coffes: CoffesProps[] = [
  {
    id: 1,
    icon: <img src={TraditionalExpress} alt="Expresso Tradicional" />,
    types: [
      {
        id: 1,
        description: "Tradicional",
      },
    ],
    quantity: 1,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 2,
    icon: <img src={AmericanExpress} alt="Expresso Americano" />,
    types: [
      {
        id: 2,
        description: "Americano",
      },
    ],
    quantity: 1,
    title: "Expresso Americano",
    description: "O expresso americano feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 3,
    icon: <img src={IcedExpress} alt="Expresso" />,
    types: [
      {
        id: 3,
        description: "Gelado",
      },
    ],
    quantity: 1,
    title: "Expresso Gelado",
    description: "O expresso gelado feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 4,
    icon: <img src={TraditionalExpress} alt="Expresso Tradicional" />,
    types: [
      {
        id: 4,
        description: "Tradicional",
      },
    ],
    quantity: 1,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 5,
    icon: <img src={TraditionalExpress} alt="Café com leite" />,
    types: [
      {
        id: 5,
        description: "Tradicional",
      },
      {
        id: 6,
        description: "Com leite",
      },
    ],
    quantity: 1,
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: 6,
    icon: <img src={TraditionalExpress} alt="Latte" />,
    types: [
      {
        id: 7,
        description: "Tradicional",
      },
      {
        id: 8,
        description: "Com leite",
      },
    ],
    quantity: 1,
    title: "Latte",
    description:
      "Uma dose de café expresso com dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: 7,
    icon: <img src={TraditionalExpress} alt="Capuccino" />,
    types: [
      {
        id: 9,
        description: "Tradicional",
      },
      {
        id: 10,
        description: "Com leite",
      },
    ],
    quantity: 1,
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: 8,
    icon: <img src={TraditionalExpress} alt="Macchiato" />,
    types: [
      {
        id: 11,
        description: "Tradicional",
      },
      {
        id: 12,
        description: "Com leite",
      },
    ],
    quantity: 1,
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
  {
    id: 9,
    icon: <img src={TraditionalExpress} alt="Mocaccino" />,
    types: [
      {
        id: 13,
        description: "Tradicional",
      },
      {
        id: 14,
        description: "Com leite",
      },
    ],
    quantity: 1,
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
  },
];
