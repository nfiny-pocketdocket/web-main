import { Flex } from "@chakra-ui/react";
import { Main } from "./sections/Main";
import { SectionLayout } from "../components/shared/SectionLayout";

export const Homepage = () => {
  return (
    <Flex flexDir="column" overflowX="hidden">
      <Main />
      <Part bg="blue" />
      <Part />
      <Part bg="blue" />
    </Flex>
  );
};

export const Part = ({ bg = undefined }) => {
  return (
    <SectionLayout w="100vw" h="100vh" bg={bg ?? "red"}>
      Hello world
    </SectionLayout>
  );
};
