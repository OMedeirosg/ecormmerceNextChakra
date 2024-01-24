"use client";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  StackDivider,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Dropzone } from "./Dropzone";

export const CreateFormProduct = () => {
  return (
    <Container py={{ base: "4", md: "8" }}>
      <Stack spacing="5">
        <Stack
          spacing="4"
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
        ></Stack>
        <Divider />
        <Stack spacing="5" divider={<StackDivider />}>
          <FormControl id="name">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "8" }}
              justify="space-between"
            >
              <FormLabel variant="inline">Name Product</FormLabel>
              <Input maxW={{ md: "3xl" }} placeholder="Enter item" />
            </Stack>
          </FormControl>
          <FormControl id="email">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "8" }}
              justify="space-between"
            >
              <FormLabel variant="inline">Price</FormLabel>
              <Input
                type="text"
                maxW={{ md: "3xl" }}
                placeholder="Enter price"
              />
            </Stack>
          </FormControl>
          <FormControl id="picture">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "8" }}
              justify="space-between"
            >
              <FormLabel variant="inline">Image Product</FormLabel>
              <Stack
                spacing={{ base: "3", md: "5" }}
                direction={{ base: "column", sm: "row" }}
                width="full"
                maxW={{ md: "3xl" }}
              >
                <Avatar
                  size="lg"
                  name="Christoph Winston"
                  src="https://tinyurl.com/yhkm2ek8"
                />
                <Dropzone width="full" />
              </Stack>
            </Stack>
          </FormControl>
          <FormControl id="website"></FormControl>
          <FormControl id="bio">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "8" }}
              justify="space-between"
            >
              <Box>
                <FormLabel variant="inline">Description</FormLabel>
                <FormHelperText mt="0" color="fg.muted">
                  Write a short introduction about your product
                </FormHelperText>
              </Box>
              <Textarea maxW={{ md: "3xl" }} rows={5} resize="none" />
            </Stack>
          </FormControl>

          <Flex direction="row-reverse">
            <Button type="submit">Save</Button>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
};
