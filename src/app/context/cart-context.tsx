// como pegar as informaçoes do data
// como targeta o product
// como guarda ele no cart
// como cria o contexto
//  como remover o product do cart
"use client";
import { Children, createContext, useState } from "react";
import { Product, products } from "@/components/shop/_data";

//criei o contexto
export const CartContext = createContext({} as any);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<Product[]>([]);
  console.log("quaz", cart);
  // reduce precisa de um valor inicial , no caso 0
  const initialValue = 0;

  //reduce fez a soma dos numeros(price) do array.
  const priceCartAmount = cart.reduce(
    (accumulator, item) => accumulator + item.price,
    initialValue
  );

  console.log(priceCartAmount, "oi");

  // criar funçao de adicionar item ao carrinho
  // passar callback para o setState para pegar o valor atualizado.
  const addCartItem = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("adicionou ao carrinho", cart);
  };
  // criar funçao de remover item do carrinho
  const removeCartItem = (id: string) => {
    console.log("adicionou ao carrinho");
    // setei o estado do carrinho pro atual, com filter pra remover e usando o product de entrada ele me retorna uma logica onde se o id for diferente do id do product ele remove
    setCart((prevCart) => {
      const filterCart = prevCart.filter((product) => {
        return id !== product.id;
      });
      //retorna o array depois de ser filtrado sem alterar o original
      return filterCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addCartItem, removeCartItem, priceCartAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
