import { Box, Flex, Link as ChakraLink, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <ChakraLink as={Link} to="/" color="white" fontSize="xl" fontWeight="bold">
            RV Dealership
          </ChakraLink>
        </Box>
        <Spacer />
        <Flex alignItems="center">
          <Button as={Link} to="/login" colorScheme="teal" variant="outline" mr={4}>
            Login
          </Button>
          <Button as={Link} to="/signup" colorScheme="teal" variant="solid">
            Signup
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;