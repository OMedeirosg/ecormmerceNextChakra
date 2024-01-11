"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { CategoryCollapse } from "./CategoryCollapse";
import { ToggleButton } from "./ToggleButton";
import Link from "next/link";

export const MobileDrawer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{ base: "inline-flex", lg: "none" }}
      />
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <DrawerBody mt="72px" p="4">
            <Stack spacing="1">
              <Button
                as={Link}
                href="/"
                size="lg"
                variant="tertiary"
                justifyContent="start"
              >
                Home
              </Button>
              <Button size="lg" variant="tertiary" justifyContent="start">
                Analysis
              </Button>
              <CategoryCollapse />
              <Button size="lg" variant="tertiary" justifyContent="start">
                History
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
