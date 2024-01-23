"use client";
import {
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Img,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { members } from "./data";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export interface ProductsProps {
  description: string;
  imageUrl: string;
  nameProduct: string;
  price: number;
}

export const GridProducts = () => {
  const queryProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    console.log("XOblas", querySnapshot);

    const products = querySnapshot.docs.map((doc) => {
      console.log(doc.id, "===>", doc.data());
      return doc.data();
    });
    return products;
  };

  const { data: products, error } = useQuery({
    queryKey: ["products"],
    queryFn: queryProducts,
  });
  console.log("Your Products", products);
  console.log("Not found products", error);

  if (!products) {
    return null;
  }

  return (
    <Container py={{ base: "16", md: "24" }}>
      <Stack spacing={{ base: "12", md: "16" }}>
        <Stack
          spacing={{ base: "8", md: "10" }}
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
        >
          <Stack spacing="3" maxW="3xl">
            <Stack spacing={{ base: "4", md: "5" }}></Stack>
          </Stack>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          columnGap={8}
          rowGap={{ base: "10", lg: "16" }}
        >
          {products.map((product) => (
            <Stack key={product.nameProduct} spacing="4">
              <Stack spacing="5">
                <Image
                  src={product.imageUrl}
                  alt={product.nameProducts}
                  width={200}
                  height={200}
                  objectFit="cover"
                />
                <Stack spacing="1">
                  <Text fontWeight="medium" fontSize={{ base: "lg", md: "xl" }}>
                    {product.nameProduct}
                  </Text>
                  <Text color="accent" fontSize={{ base: "md", md: "lg" }}>
                    {product.description}
                  </Text>
                </Stack>
              </Stack>
              <HStack spacing="4" color="fg.subtle">
                <Text>R${product.price}</Text>
              </HStack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};
