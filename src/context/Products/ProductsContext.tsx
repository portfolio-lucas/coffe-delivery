import { createContext, useEffect, useState } from "react";
import { CoffesProps, coffes } from "../../Pages/Home/lists";

export interface ProductsContextProps {
  products: CoffesProps[];
  chosenProducts: CoffesProps[];
  addProductToShortlist: (product: CoffesProps) => void;
  removeProductToShortlist: (product: CoffesProps) => void;
}

export interface ProductsContextProviderProps {
  children: React.ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextProps);

export function ProductsProvider({ children }: ProductsContextProviderProps) {
  const [products, setProducts] = useState<CoffesProps[] | []>([]);
  const [chosenProducts, setChosenProducts] = useState<CoffesProps[] | []>([]);

  const addProductToShortlist = (product: CoffesProps) => {
    const filterIfProductIsInTheList = chosenProducts.filter(
      (item) => item.id === product.id
    );

    if (filterIfProductIsInTheList.length > 0) {
      setChosenProducts([...chosenProducts]);
    } else {
      setChosenProducts([...chosenProducts, product]);
    }
  };

  const removeProductToShortlist = (product: CoffesProps) => {
    const newList = chosenProducts.filter((item) => item.id !== product.id);

    setChosenProducts(newList);
  };

  useEffect(() => {
    setProducts(coffes);
  });

  return (
    <ProductsContext.Provider
      value={{
        products,
        chosenProducts,
        addProductToShortlist,
        removeProductToShortlist,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
