import { Box, Button, Flex, Grid, Image, SimpleGrid } from "@chakra-ui/react";
import { SectionLayout } from "../../components/shared/SectionLayout";

export const Main = () => {
  return (
    <SectionLayout justifyContent={[undefined, undefined, "center"]}>
      <Grid
        maxW="1100px"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={8}
      >
        <Flex flexDir="column" justifyContent="space-between">
          <Flex flexDir="column" gap="16px">
            <Box fontSize={["35px", "35px", "42px"]} fontWeight="800">
              Simplifying variability.
            </Box>
            <Box fontSize="18px">
              PocketDocket lets you ditch the paper, and ensure all your
              Variability Dockets are signed, stored, reported, and paid on
              time.
            </Box>

            <Flex flexDir="column" w="150px" mt="50px">
              <Box fontSize="14px">Coming soon to</Box>
              <Image src="/icons/ios-download.svg" />
            </Flex>
          </Flex>
        </Flex>

        <Box pos="relative" zIndex={9}>
          <Image
            top={["0", "0", "-50px"]}
            left={["-55px", "-55px", "0"]}
            pos="absolute"
            src="/images/mobile-dual.png"
            maxW="500px"
          />
        </Box>
      </Grid>
    </SectionLayout>
  );
};
