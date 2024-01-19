"use client ";
import { collection, getDocs } from "firebase/firestore";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Input,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ProductItem } from "../checkout/ProductItem";
import { Product } from "../shop/_data";
import { CartContext } from "@/context/cart-context";
import { useContext } from "react";
import { db } from "@/config/firebase";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineChat, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

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
    <Box
      borderRadius={16}
      padding={2}
      w="100%"
      maxW="8xl"
      mx="auto"
      direction={{ base: "column", md: "row" }}
      boxShadow="0px 0px 13px 13px rgba(0,0,0,0.1),24px 10px 15px -3px rgba(0,0,0,0.1)"
    >
      <Stack spacing={{ base: "6", md: "10" }}>
        <Heading>Payment Successful ! </Heading>
        <Heading size="md">Order Summary</Heading>
        <Stack spacing="8">
          <Stack spacing="6">
            {orders.map((order) => (
              <>
                <Flex alignItems="center">
                  <Text>{order.email}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                  {order.items.map((item) => (
                    <>
                      <Flex>
                        <Text>{item.productId}</Text>
                      </Flex>
                      <Flex direction="column">
                        <Text>R$ {item.price && item.price.toFixed(2)}</Text>
                        <Text>quantity: {item.quantity}</Text>
                      </Flex>
                    </>
                  ))}
                </Flex>

                <Divider />
              </>
            ))}
          </Stack>
          <Stack spacing="3">
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.700", "gray.200")}
            >
              Have questions? or Need help to complete your order?
            </Text>
            <HStack
              spacing="8"
              color={useColorModeValue("blue.500", "blue.200")}
              fontWeight="semibold"
            >
              <HStack>
                <Icon as={HiOutlineChat} boxSize="5" />
                <Text>Live Chat</Text>
              </HStack>
              <HStack>
                <Icon as={HiOutlinePhone} boxSize="5" />
                <Text>Phone</Text>
              </HStack>
              <HStack>
                <Icon as={HiOutlineMail} boxSize="5" />
                <Text>Email</Text>
              </HStack>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
