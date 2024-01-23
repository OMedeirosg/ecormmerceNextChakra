"use client";

import { Button, Flex, Text } from "@chakra-ui/react";

import { Box, Container, Divider, HStack, IconButton } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { GridProducts } from "./gridproducts";

export const AdminProduct = () => {
  return (
    <Box bg="bg.surface">
      <Container py={{ base: "4", md: "8" }}>
        <HStack>
          <Divider />
          <Button variant="secondary" leftIcon={<FiPlus />}>
            Create
          </Button>
          <Divider />
        </HStack>
      </Container>
      <GridProducts />
    </Box>
  );
};
