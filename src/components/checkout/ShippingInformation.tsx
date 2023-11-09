import {
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
export const ShippingInformation = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [billingAddress, setBillingAddress] = useState(true);
  console.log("Form Data", { name, address, zip, city, email, billingAddress });

  return (
    <Stack spacing={{ base: "6", md: "10" }}>
      <Heading size="md">Shipping Information</Heading>
      <Stack spacing={{ base: "6", md: "8" }}>
        <FormControl id="name">
          <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
            Full name
          </FormLabel>
          <Input
            value={name}
            name="name"
            placeholder="Your first and last name"
            focusBorderColor={useColorModeValue("blue.500", "blue.200")}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </FormControl>
        <FormControl id="street">
          <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
            Street address
          </FormLabel>
          <Input
            value={address}
            name="name"
            placeholder="123 Example Street"
            focusBorderColor={useColorModeValue("blue.500", "blue.200")}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </FormControl>
        <HStack spacing="6">
          <FormControl id="zip" maxW="32">
            <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
              Zip Code
            </FormLabel>
            <Input
              value={zip}
              name="zip"
              placeholder="Zip Code"
              focusBorderColor={useColorModeValue("blue.500", "blue.200")}
              onChange={(event) => {
                setZip(event.target.value);
              }}
            />
          </FormControl>
          <FormControl id="city">
            <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
              City
            </FormLabel>
            <Input
              value={city}
              name="city"
              placeholder="City"
              focusBorderColor={useColorModeValue("blue.500", "blue.200")}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </FormControl>
        </HStack>
        <FormControl id="email">
          <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
            Email address
          </FormLabel>
          <Input
            value={email}
            name="email"
            placeholder="you@exmaple.com"
            focusBorderColor={useColorModeValue("blue.500", "blue.200")}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormControl>
        <Checkbox
          checked={billingAddress}
          defaultChecked
          spacing="4"
          colorScheme="blue"
          onChange={(event) => {
            setBillingAddress(event.target.checked);
          }}
        >
          Billing address is same as shipping
        </Checkbox>
      </Stack>
    </Stack>
  );
};
