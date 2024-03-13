import { Box, Button, Flex, Grid, Image, SimpleGrid } from "@chakra-ui/react";
import { SectionLayout } from "../../components/shared/SectionLayout";

export const Download = () => {
  return (
    <SectionLayout
      justifyContent="space-between"
      backgroundColor="#F5F5F5"
      minH="100vh"
    >
      <Box></Box>
      <Flex flexDir="column" justifyContent="space-between" alignItems="center">
        <Box padding="2.5%" fontSize="2.5em" fontWeight="800">
          <p>Coming Soon...</p>
        </Box>
        <Box padding="2.5%">
          <Image
            src="../images/pocketdocket-transparent.png"
            width="600px"
          ></Image>
        </Box>
        <Flex justifyContent="center" padding="5%">
          <Image src="/icons/ios-download.svg" width="60%"></Image>
        </Flex>
      </Flex>

      <Box>
        <p style={{ textAlign: "center", fontSize: "0.75em" }}>
          All rights reserved. Our Privacy Policy governs the collection, use,
          and protection of your personal information when you interact with our
          services. We are committed to safeguarding your privacy and ensuring
          the security of your data. By using our services, you agree to the
          terms outlined in this policy. We reserve the right to update this
          policy periodically, and your continued use of our services
          constitutes acceptance of any changes. Rest assured, your privacy is
          our priority.
        </p>
      </Box>
    </SectionLayout>
  );
};
