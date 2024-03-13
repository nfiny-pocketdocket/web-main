import { Box, Button, Flex, Grid, Image, SimpleGrid } from "@chakra-ui/react";
import { SectionLayout } from "../../components/shared/SectionLayout";

export const Testimonials = () => {
  return (
    <SectionLayout justifyContent="center" backgroundColor="black" minH="70vh">
      <Flex flexDir="column" alignItems="center">
        <Box
          fontSize={["2em", "2em", "2.5em"]}
          fontWeight="700"
          paddingBottom="10%"
          textColor="white"
        >
          Don't just take our word for it
        </Box>
        <Flex
          flexDir={["column", "column", "row"]}
          columnGap="5%"
          alignItems="center"
          //   paddingBottom="5%"
        >
          <Box position="relative">
            <Image
              src="/images/headshot1.png"
              border="10px solid black"
              borderRadius="50%"
              zIndex="2"
            />
          </Box>
          <Box
            position="relative"
            // top="50px"
            color="white"
            fontSize={["1.25em"]}
            fontWeight="400"
            maxW={["80vw", "80vw", "55vw"]}
          >
            <p>
              PocketDocket has transformed how I manage my workload. With its
              digital approach, I've ditched paper clutter and strealined my
              workflow. Instant approvals and intuitive reporting tools make
              staying orgainzed effortless.
            </p>
            <p style={{ paddingTop: "2%", fontWeight: "bolder" }}>
              John Doe,{" "}
              <span style={{ color: "#FE8E38", fontSize: "large" }}>
                Chief Executive Officer
              </span>
            </p>
            <Box
              position="absolute"
              left={["-50px", "-50px", "-170px"]}
              top={["-90px", "-90px", "-170px"]}
              zIndex="-5"
            >
              <Image
                src="/images/quotationMark.png"
                maxW={["150px", "150px", "400px"]}
                maxH={["150px", "150px", "550px"]}
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </SectionLayout>
  );
};
