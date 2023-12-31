"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Box,
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
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ShopDrawer } from "../shop/shopdrawer";

export const HeroNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              <InputGroup
                maxW="2xs"
                display={{ base: "none", md: "inline-flex" }}
              >
                <InputLeftElement>
                  <Icon as={FiSearch} color="fg.accent.muted" fontSize="lg" />
                </InputLeftElement>
                <Input placeholder="Search" variant="filled.accent" />
              </InputGroup>
              <ButtonGroup variant="tertiary.accent" spacing="1">
                <IconButton
                  icon={<FiSearch />}
                  aria-label="Serach"
                  display={{ base: "flex", lg: "none" }}
                  isRound
                />
                <IconButton
                  icon={<FiBell />}
                  aria-label="Show notification"
                  isRound
                />
              </ButtonGroup>
              <Avatar boxSize="10" src="https://i.pravatar.cc/300" />
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
