"use client ";
import { collection, getDocs } from "firebase/firestore";
import { Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ProductItem } from "../checkout/ProductItem";
import { Product } from "../shop/_data";
import { CartContext } from "@/context/cart-context";
import { useContext } from "react";
import { db } from "@/config/firebase";
import { useQuery } from "@tanstack/react-query";

export const OrderForms = () => {
  const { cart, removeCartItem, priceCartAmount } = useContext(CartContext);

  const queryOrders = async () => {
    const querySnapshot = await getDocs(collection(db, "orders"));

    const orders = querySnapshot.docs.map((doc) => {
      console.log(doc.id, "=>", doc.data());

      return doc.data();
    });

    return orders;
  };

  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: queryOrders,
  });
  console.log("Teste", orders);

  if (!orders) {
    return null;
  }

  return (
    <Stack spacing={{ base: "6", md: "10" }} border="1px solid green" w="100%">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6" border="1px solid red">
        {orders.map((order) => (
          <>
            <Text>{order.email}</Text>
            {order.items.map((item) => (
              <>
                <Text>{item.productId}</Text>
                <Text>R$ {item.price && item.price.toFixed(2)}</Text>
                <Text>{item.quantity}</Text>
              </>
            ))}
            <Divider />
          </>
        ))}

        <Text>{priceCartAmount}</Text>
      </Stack>
    </Stack>
  );
};
