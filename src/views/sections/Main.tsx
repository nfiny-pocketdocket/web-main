import { Box, Button, Flex, Grid, Image, SimpleGrid } from "@chakra-ui/react";
import { SectionLayout } from "../../components/shared/SectionLayout";

export const Main = () => {
  return (
    <SectionLayout
      justifyContent={[undefined, undefined, "center"]}
      position="relative"
    >
      <Grid
        maxW="1100px"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={8}
      >
        <Flex flexDir="column" justifyContent="center">
          <Flex flexDir="column" gap="16px">
            <Box fontSize={["35px", "35px", "42px"]} fontWeight="800">
              Simplifying <span style={{ color: "#FE8E38" }}>variability.</span>
            </Box>
            <Box fontSize={["1em", "1em", "1.25em"]}>
              <p>
                <span style={{ display: "inline-flex" }}>
                  Ditch the paper with
                  <img
                    src={"/images/pocketdocket-transparent.png"}
                    alt="PocketDocket logo"
                    style={{
                      height: "1em",
                      paddingLeft: "0.5em",
                      paddingRight: "0.5em",
                      marginTop: "0.35em",
                    }}
                  />
                </span>
                and ensure all your Variability Dockets are signed, stored,
                reported, and paid on time.
              </p>
            </Box>

            <Flex flexDir="column" w={["25%", "20%", "30%"]}>
              <Box fontSize="14px">Coming soon to</Box>
              <Image src="/icons/ios-download.svg" />
            </Flex>
          </Flex>
        </Flex>

        <Box pos="relative" zIndex={9}>
          <Image
            pos="relative"
            src="/images/3dscreenshot.png"
            maxW={["100%", "100%", "100%"]}
            maxH={["90%", "90%", "100%"]}
          />
        </Box>
        <Flex
          flexDir="column"
          justifyContent="center"
          position="absolute"
          alignItems="center"
          left={0}
          right={0}
          bottom={0}
          onClick={() => {
            const section = document.querySelector("#feature");
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <p style={{ fontSize: "1em" }}>Scroll for more</p>
          <Image
            src="/images/arrowdown.gif"
            position="relative"
            maxW="1em"
            maxH="1em"
          />
        </Flex>
      </Grid>
    </SectionLayout>
  );
};
