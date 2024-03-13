import { Flex } from "@chakra-ui/react";
import { Main } from "./sections/Main";
import { SectionLayout } from "../components/shared/SectionLayout";
import { Features } from "./sections/Features";
import { HowItWorks } from "./sections/HowItWorks";
import { Testimonials } from "./sections/Testimonials";
import { Download } from "./sections/Download";

export const Homepage = () => {
  return (
    <Flex flexDir="column" overflowX="hidden">
      <Main />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Download />
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
