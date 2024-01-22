"use client";

import { PageLayout } from "@/components/pagelayout";
import { UsersList } from "@/components/users/userslist";

const Users = () => {
  return (
    <PageLayout>
      <UsersList></UsersList>
    </PageLayout>
  );
};

export default Users;
