import {
  Box,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

export const ShippingMethod = () => {
  const [shippingMethod, setShippingMethod] = useState("express");

  return (
    <Stack spacing={{ base: "6", md: "10" }}>
      <Heading size="md">Shipping Method</Heading>
      <RadioGroup
        value={shippingMethod}
        colorScheme="blue"
        size="lg"
        onChange={setShippingMethod}
      >
        <Stack direction={{ base: "column", lg: "row" }} spacing="6">
          <Radio value="express" spacing="3" flex="1">
            <Box>
              <HStack color={useColorModeValue("black", "white")}>
                <Text fontWeight="medium">Express</Text>
                <Text fontWeight="bold">$14.99</Text>
              </HStack>

              <Text color={useColorModeValue("gray.600", "gray.400")}>
                Dispatched in 24 hours
              </Text>
            </Box>
          </Radio>
          <Radio value="standard" spacing="3" flex="1">
            <Box>
              <HStack color={useColorModeValue("black", "white")}>
                <Text fontWeight="medium">Standard</Text>
                <Text fontWeight="bold">$4.99</Text>
              </HStack>
              <Text color={useColorModeValue("gray.600", "gray.400")}>
                Dispatched in 1 - 2 days
              </Text>
            </Box>
          </Radio>
        </Stack>
      </RadioGroup>
    </Stack>
  );
};
