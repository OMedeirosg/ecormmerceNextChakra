"use client";
import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiPackage } from "react-icons/fi";
import { CartItem } from "./CartItem";
import React, { useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { createCipheriv } from "crypto";
import { CartContext } from "@/context/cart-context";
import { PriceTag } from "./PriceTag";
import { useSession } from "@/context/AuthCtx";
import { useRouter } from "next/navigation";
export const ShopDrawer = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  const { cart, removeCartItem, priceCartAmount } = useContext(CartContext);
  const router = useRouter();
  const { user } = useSession();
  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("white", "gray.800")}
          overflowY="auto"
        >
          <DrawerCloseButton
            size="lg"
            right={{ base: "4", md: "8" }}
            top="4"
            bg="inherit"
          />
          <Stack
            padding={{ base: "6", md: "10" }}
            height="full"
            spacing="8"
            overflowY="auto"
          >
            <Heading size="md">Shopping Cart ({cart.length} items)</Heading>
            <Stack spacing={{ base: "8", md: "10" }}>
              {cart.map((item) => (
                <CartItem
                  onClickDelete={() => {
                    removeCartItem(item.id);
                  }}
                  key={item.id}
                  {...item}
                />
              ))}
            </Stack>
          </Stack>
          <Stack
            borderTopWidth="1px"
            px={{ base: "6", md: "10" }}
            py="4"
            spacing="5"
          >
            <Stack>
              <HStack fontSize="xl" fontWeight="semibold">
                <Text flex="1">Subtotal:</Text>
                <Text>{priceCartAmount}</Text>
              </HStack>
              <HStack
                spacing="2"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                <Icon as={FiPackage} />
                <Text>Shipping + taxes calculated at checkout</Text>
              </HStack>
            </Stack>
            {/* redireciona baseado no estado da sessao */}
            <Button
              onClick={() => {
                if (!user) {
                  router.push("/login");
                } else {
                  router.push("/checkout");
                }
              }}
              colorScheme="blue"
              size="lg"
              fontSize="md"
            >
              Checkout
            </Button>
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
};
