"use client";
import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Divider,
  HStack,
  Icon,
  IconButton,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoArrowDown } from "react-icons/io5";
import { Rating } from "./Rating";
import { members } from "./data";
import { useQuery } from "@tanstack/react-query";
import {
  QuerySnapshot,
  Timestamp,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import Image from "next/image";

export interface UserProps {
  avatarUrl: string;
  createdAt: Timestamp;
  displayName: string;
  email: string;
}
import { format } from "date-fns";

export const MemberTable = (props: TableProps) => {
  const queryUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    console.log("Mid", querySnapshot);

    const users = querySnapshot.docs.map((doc) => {
      console.log(doc.id, "==>", doc.data());
      return doc.data();
    });
    return users;
  };

  const { data: users, error } = useQuery({
    queryKey: ["users"],
    queryFn: queryUsers,
  });
  console.log("Funcionou", users);
  console.log("Error", error);

  if (!users) {
    return null;
  }

  return (
    <Table {...props}>
      <Thead>
        <Tr>
          <Th>
            <HStack spacing="3">
              <Checkbox />
              <HStack spacing="1">
                <Text>Name</Text>
                <Icon as={IoArrowDown} color="fg.muted" boxSize="4" />
              </HStack>
            </HStack>
          </Th>
          <Th></Th>
          <Th>Email</Th>
          <Th>Created</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => {
          const newDate = user.createdAt.seconds;
          const myDate = new Date(newDate);
          console.log("time 1", myDate);

          const date = format(myDate, "MM/dd/yyyy");
          console.log("Time 2", date);

          console.log("Cada user", user.createdAt);
          return (
            <Tr>
              <Td>
                <HStack spacing="3">
                  <Checkbox />
                  <Image
                    src={user.avatarUrl}
                    alt="Profile"
                    width={48}
                    height={48}
                  />
                  <Box>
                    <Text fontWeight="medium">{user.displayName}</Text>
                  </Box>
                </HStack>
              </Td>
              <Divider />
              <Td>
                <Text color="fg.muted">{user.email}</Text>
              </Td>
              <Td>
                <HStack spacing="1">
                  <Td>
                    <Text>{date}</Text>
                    {console.log("Time", user.createdAt.date)}
                  </Td>
                </HStack>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
