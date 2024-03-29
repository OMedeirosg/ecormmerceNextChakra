"use client";
import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiClock, FiHeart } from "react-icons/fi";
import { RiRulerLine } from "react-icons/ri";
import { Rating } from "./Rating";
import { ColorPicker } from "./ColorPicker";
import { PriceTag } from "./PriceTag";
import { ProductBadge } from "./ProductBadge";
import { Promos } from "./Promos";
import { QuantityPicker } from "./QuantityPicker";
import { Share } from "./Share";
import { SizePicker } from "./SizePicker";
import { Review } from "../review/reviews";
import { useContext } from "react";
import { CartContext } from "@/context/cart-context";
import { products } from "../shop/_data";
export const ProductDetails = ({ product }: { product: any }) => {
  const { addCartItem } = useContext(CartContext);
  return (
    <Box
      maxW="7xl"
      mx="auto"
      width="100%"
      height="100%"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack direction={{ base: "column", md: "row" }} spacing="16">
        <Box maxW="sm">
          <Stack spacing="8">
            <Stack spacing="4">
              <Stack>
                <ProductBadge
                  bg={useColorModeValue("gray.500", "gray.600")}
                  color="white"
                >
                  New In
                </ProductBadge>
                <Heading size="lg" fontWeight="medium">
                  {product.name}
                </Heading>
              </Stack>
              <Stack spacing="1">
                <Text fontSize={28}>${product.price}</Text>
                <HStack spacing="2" alignSelf="baseline">
                  <Rating defaultValue={4} size="sm" />
                  <Link
                    href="#"
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    12 Reviews
                  </Link>
                </HStack>
              </Stack>
              <Text color={useColorModeValue("gray.600", "gray.400")}>
                With a sleek design and a captivating essence, this is a modern
                Classic made for every occasion.
              </Text>
            </Stack>
            <Stack>
              <SizePicker
                defaultValue="32"
                options={[
                  { label: "32mm", value: "32" },
                  { label: "36mm", value: "36" },
                  { label: "40mm", value: "40" },
                ]}
              />
              <HStack
                spacing="1"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                <Icon as={RiRulerLine} />
                <Link
                  href="#"
                  fontSize="xs"
                  fontWeight="medium"
                  textDecoration="underline"
                >
                  View our sizing guide
                </Link>
              </HStack>
            </Stack>
            <Stack>
              <ColorPicker
                defaultValue="Black"
                options={[
                  { label: "Black", value: "#000" },
                  { label: "Dark Gray", value: "#666" },
                  { label: "Light Gray", value: "#BBB" },
                ]}
              />
              <HStack
                spacing="1"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                <Icon as={FiClock} />
                <Text fontSize="xs" fontWeight="medium">
                  Low stock
                </Text>
              </HStack>
            </Stack>
            <HStack
              spacing={{ base: "4", md: "8" }}
              align="flex-end"
              justify="space-evenly"
            >
              <Box flex="1">
                <QuantityPicker defaultValue={1} max={3} />
              </Box>
              <Box flex="1">
                <Button
                  variant="outline"
                  size="lg"
                  fontSize="md"
                  width="full"
                  leftIcon={<Icon as={FiHeart} boxSize="4" />}
                >
                  Favorite
                </Button>
              </Box>
            </HStack>
            <Button
              colorScheme="blue"
              size="lg"
              onClick={() => {
                addCartItem(product);
              }}
            >
              Add to cart
            </Button>
            <Promos />
            <Share />
          </Stack>
        </Box>
        <Box flex="1">
          <Stack spacing="8">
            <AspectRatio ratio={4 / 3}>
              <Image
                src={product.imageUrl}
                alt="Lovely image"
                fallback={<Skeleton />}
              />
            </AspectRatio>
            <AspectRatio ratio={4 / 3}>
              <Image
                src={product.imageUrl}
                alt="Lovely image"
                fallback={<Skeleton />}
              />
            </AspectRatio>
          </Stack>
        </Box>
      </Stack>
      <Review />
    </Box>
  );
};
