"use client";
import { getAuth, signOut } from "firebase/auth";
import { VscAccount } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Box,
  Text,
  Container,
  HStack,
  ButtonGroup,
  Button,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  IconButton,
  Avatar,
  Flex,
  Stack,
  Center,
  Grid,
} from "@chakra-ui/react";
import { FiSearch, FiBell } from "react-icons/fi";
import { CategoryCollapse } from "./CategoryCollapse";
import { Logo } from "./Logo";
import { MobileDrawer } from "./MobileDrawer";
import { link } from "fs";
import Link from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ShopDrawer } from "../shop/shopdrawer";
import { AuthCtx } from "@/context/AuthCtx";
import { error } from "console";

export const HeroNavBar = () => {
  const { user } = useContext(AuthCtx);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Deslogou");
      })
      .catch((error) => {
        console.log("Erro");
      });
  };

  console.log(user, "User 2");
  return (
    <Box as="section" w="100%">
      <Box borderBottomWidth="1px" bg="bg.accent.default" position="relative">
        <Container py="4" flex="justify">
          <HStack justify="space-between" spacing="8">
            <HStack spacing="10">
              <HStack spacing="3">
                <MobileDrawer />
              </HStack>
              <ButtonGroup
                w="100%"
                size="lg"
                variant="text.accent"
                colorScheme="gray"
                spacing="8"
                display={{ base: "none", lg: "flex" }}
              >
                <Button as={Link} href="/">
                  Home
                </Button>
                <Button>Promoções</Button>
                <CategoryCollapse />
                <Button>Contato</Button>
                <IconButton
                  aria-label={""}
                  icon={<AiOutlineShoppingCart />}
                  onClick={onOpen}
                />
                <ShopDrawer onClose={onClose} isOpen={isOpen} />
              </ButtonGroup>
            </HStack>
            <HStack spacing={{ base: "2", md: "4" }}>
              <ButtonGroup variant="tertiary.accent" spacing="1"></ButtonGroup>
              {user ? (
                <>
                  <Flex w="100%" h="100%" gap={4} align="center">
                    <Button
                      onClick={handleSignOut}
                      leftIcon={<IoIosLogOut />}
                      aria-label="Log Out"
                      bg="none"
                    >
                      Log Out
                    </Button>
                    <IconButton
                      icon={<VscAccount />}
                      aria-label="Profile"
                      bg="none"
                    />
                    <Text>{"Olá, " + user.email}</Text>
                  </Flex>
                </>
              ) : (
                <Flex
                  w="100%"
                  minWidth="max-content"
                  alignItems="center"
                  gap="2"
                >
                  <Button as={Link} href="/login">
                    Sign in
                  </Button>
                  <Button>Sign Up</Button>
                </Flex>
              )}
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
