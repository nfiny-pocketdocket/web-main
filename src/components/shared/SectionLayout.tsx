import { Flex } from "@chakra-ui/react";

export const SectionLayout = ({ children, ...styles }) => {
  return (
    <Flex
      w="100vw"
      minH="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      zIndex={10}
      {...styles}
    >
      <Flex p="5%" maxW="1200px">
        {children}
      </Flex>
    </Flex>
  );
};
