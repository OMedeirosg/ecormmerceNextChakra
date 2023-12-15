"use client";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { GoogleIcon } from "./ProviderIcons";
import { useState } from "react";
import { auth } from "@/app/config/firebase";
type UserDTO = {
  email: string;
  senha: string;
};
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    console.log("FORMDATA", { email, password });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("NEWUSER", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR", errorCode, errorMessage);
      });
  };

  return (
    <Container maxW="md" py={{ base: "12", md: "24" }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
            <Text color="fg.muted">Start making your dreams come true</Text>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                id="password"
                placeholder="********"
                type="password"
                value={password}
              />
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="text" size="sm">
              Forgot password
            </Button>
          </HStack>
          <Stack spacing="4">
            <Button onClick={onSubmit}>Sign in</Button>
            <Button variant="secondary" leftIcon={<GoogleIcon />}>
              Sign in with Google
            </Button>
          </Stack>
        </Stack>
        <Text textStyle="sm" color="fg.muted">
          Don't have an account? <Link href="#"> Sign up</Link>
        </Text>
      </Stack>
    </Container>
  );
};
