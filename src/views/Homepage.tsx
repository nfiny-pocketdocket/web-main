import { Flex } from "@chakra-ui/react";

export const Homepage = () => {
  return (
    <Flex flexDir="column" overflowX="hidden">
      <Part />
      <Part bg="blue" />
      <Part />
      <Part bg="blue" />
    </Flex>
  );
};

export const Part = ({ bg = undefined }) => {
  return (
    <Flex w="100vw" h="100vh" bg={bg ?? "red"}>
      Hello world
    </Flex>
  );
};
