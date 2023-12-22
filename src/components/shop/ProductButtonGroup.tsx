import { CartContext } from "@/context/cart-context";
import {
  ButtonGroup,
  Icon,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";

const options = [
  {
    icon: FiHeart,
    label: "Add to favourite",
  },
  {
    icon: FiShoppingCart,
    label: "Add to cart",
  },
  {
    icon: FiEye,
    label: "View details",
  },
];

export const ProductButtonGroup = ({ href, product }) => {
  const iconColor = useColorModeValue("gray.600", "gray.400");
  const router = useRouter();
  const { addCartItem } = useContext(CartContext);
  return (
    <ButtonGroup
      variant="tertiary"
      colorScheme="blue"
      width="full"
      size="sm"
      spacing="1"
    >
      {options.map((option) => (
        <IconButton
          key={option.label}
          rounded="sm"
          sx={{ ":not(:hover)": { color: iconColor } }}
          _focus={{ boxShadow: "none" }}
          _focusVisible={{ boxShadow: "outline" }}
          width="full"
          aria-label={option.label}
          icon={<Icon as={option.icon} boxSize="5" />}
          onClick={() => {
            if (option.label === "Add to cart") {
              addCartItem(product);
            }
            if (option.label === "View details") {
              router.push(href);
            }
          }}
        />
      ))}
    </ButtonGroup>
  );
};
