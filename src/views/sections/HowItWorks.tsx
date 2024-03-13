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
      <Box fontSize={["2em", "2em", "2.5em"]} fontWeight="700">
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
            gap="5%"
            py="5%"
          >
            {CONTENT_LIST.map((x, i) => (
              <NumberedRow num={i + 1} title={x.title} subtitle={x.subtitle} />
            ))}
          </Flex>
          <Flex flexDir="row" justifyContent="center">
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
        bg="#FE8E38"
        borderRadius="50%"
        minW="50px"
        w="50px"
        h="50px"
        color="white"
        boxShadow="2px 7px 14px -6px rgba(0,0,0,0.75)"
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
