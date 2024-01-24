"use client";

import { Button, Flex, Text } from "@chakra-ui/react";

import { Box, Container, Divider, HStack, IconButton } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { GridProducts } from "./gridproducts";
import { CreateFormProduct } from "./createproduct";

export const AdminProduct = () => {
  return (
    <Flex maxW="8xl" mx="auto" direction={{ base: "column", md: "row" }}>
      <Box
        bg="bg.surface"
        flex="1"
        px={{ base: "4", md: "8", lg: "12", xl: "20" }}
        py={{ base: "6", md: "8", lg: "12", xl: "20" }}
      >
        <Container py={{ base: "4", md: "8" }}>
          <HStack>
            <CreateFormProduct />
            <Divider />
            <Button variant="secondary" leftIcon={<FiPlus />}>
              Create
            </Button>
            <Divider />
          </HStack>
        </Container>
        <GridProducts />
      </Box>
    </Flex>
  );
};
