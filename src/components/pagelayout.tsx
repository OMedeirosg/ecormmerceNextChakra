import { Flex } from "@chakra-ui/react";
import { NavBar } from "./navigation/navbar";
import { Children } from "react";
import { Footer } from "./footer/footer";
import { Features } from "./feature/features";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction="column" flex="1" w="100%" h="10%">
      <NavBar />
      {children}

      <Footer />
    </Flex>
  );
};
