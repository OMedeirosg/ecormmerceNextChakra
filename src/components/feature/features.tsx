"use client";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Stack,
  Text,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { features } from "./data";

export const Features = () => (
  <Flex as="section" bg="bg.surface" w="100%">
    <Container py={{ base: "16", md: "24" }} height="100%" w="100%" maxW="7xl">
      <Stack spacing={{ base: "12", md: "14" }}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack spacing="3">
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="semibold"
              color="accent"
            >
              Features
            </Text>
            <Heading size={{ base: "sm", md: "md" }}>
              What can you expect?
            </Heading>
          </Stack>
          <Text color="fg.muted" fontSize={{ base: "lg", md: "xl" }}>
            A bundle of 210+ ready-to-use, responsive and accessible components
            with clever structured sourcode files.
          </Text>
        </Stack>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3 }}
          columnGap={3}
          rowGap={{ base: 6, md: 8 }}
        >
          {features.map((feature) => (
            <Stack key={feature.name} spacing={{ base: "4", md: "5" }}>
              <Square
                size={{ base: "8", md: "10" }}
                bg="accent"
                color="fg.inverted"
                borderRadius="lg"
              >
                <Icon as={feature.icon} boxSize={{ base: "5", md: "6" }} />
              </Square>
              <Stack spacing={{ base: "1", md: "2" }} flex="1">
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
                  {feature.name}
                </Text>
                <Text color="fg.muted">{feature.description}</Text>
              </Stack>
              <Button
                variant="text"
                colorScheme="blue"
                rightIcon={<FiArrowRight />}
                alignSelf="start"
              >
                Read more
              </Button>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Flex>
);
