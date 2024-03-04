import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { SectionLayout } from "../../components/shared/SectionLayout";

{
  /* 1. Add your clients
      2. Add your jobs
      3. Record variables directly in pocketdocket
      4. Make it official
      5. Report & Send */
}

const CONTENT_LIST = [
  { title: "Create your clients & jobs", subtitle: "lorum ipsum dolar amit" },
  {
    title: "Create labour dockets",
    subtitle: "Dont miss a variability etc etc",
  },
  { title: "Make it official", subtitle: "sign the docket" },
  {
    title: "Report & send",
    subtitle: "Send a single docket, or a report comprised of multiple",
  },
  { title: "Track your performance", subtitle: "lorum ipsum dolar amit" },
];

export const HowItWorks = () => {
  return (
    <SectionLayout bg="#F6F6F6" justifyContent={undefined} gap="26px">
      <Box fontSize={["30px", "30px", "35px"]} fontWeight="700">
        How it Works
      </Box>
      <Flex flexDir="column" w="100%" h="100%" maxW="800px" alignItems="center">
        <Grid
          w="100%"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={8}
        >
          <Flex
            flexDir="column"
            justifyContent="space-between"
            gap="30px"
            py="26px"
          >
            {CONTENT_LIST.map((x, i) => (
              <NumberedRow num={i + 1} title={x.title} subtitle={x.subtitle} />
            ))}
          </Flex>
          <Flex flexDir="row" justifyContent="flex-end">
            <Image src="/images/mobile-how-it-works.png" w="300px" />
          </Flex>
        </Grid>
      </Flex>
    </SectionLayout>
  );
};

const NumberedRow = ({ num, title, subtitle }) => {
  return (
    <Flex flexDir="row" gap="16px" alignItems="start">
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        fontSize="20px"
        fontWeight="800"
        bg="green"
        borderRadius="50%"
        minW="50px"
        w="50px"
        h="50px"
      >
        {num}
      </Flex>
      <Flex flexDir="column">
        <Box fontSize="20px">{title}</Box>
        <Box fontSize="16px">{subtitle}</Box>
      </Flex>
    </Flex>
  );
};
