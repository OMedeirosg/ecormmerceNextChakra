"use client";

import { AdminProduct } from "@/components/admin-products/adminproducts";
import { PageLayout } from "@/components/pagelayout";
import { Flex, Text } from "@chakra-ui/react";

const ProductForm = () => {
  return (
    <PageLayout>
      <AdminProduct></AdminProduct>
    </PageLayout>
  );
};

export default ProductForm;
