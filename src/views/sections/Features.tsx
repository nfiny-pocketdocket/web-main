import { Box, Center, Flex, Grid, Image } from "@chakra-ui/react";
import { SectionLayout } from "../../components/shared/SectionLayout";
import { px } from "framer-motion";

export const Features = () => {
  return (
    <SectionLayout 
      justifyContent={[undefined, undefined, "center"]}
      px="90px" 
      bg="#F9F4DC"
    >
      <Box fontSize={["30px", "30px", "35px"]} fontWeight="700" py="1.5%">
         Features
      </Box>
      
      <Grid
        width="100%"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        columnGap="10%"
        rowGap="100px"
      >
        <InfoItem 
          title="Go Paperless" 
        >
          <span style={{fontWeight: 600}}>Ditch the clutter and the risk of lost dockets.</span>  With our app, every variable is tracked and accounted for, ensuring you're always paid for your hard work without the hassle of paper.
        </InfoItem>
        <Flex justifyContent="center" alignContent="center">
          <Image
            src="/images/features1.png"
            maxW={["300px", "300px", "400px"]}
            maxH={["400px", "400px", "550px"]}

          />
        </Flex>
        <Flex justifyContent="center" alignContent="center">
          <Image
            src="/images/features2.png"
            maxW={["500px", "500px", "700px"]}
            maxH={["300", "400px", "460"]}
          />
        </Flex>
        <InfoItem
          title="Ensure Seamless Compliance"
        >
          <span style={{fontWeight: 600}}>Instant, on-the-spot docket approval.</span>  Streamline your workflow with digital signatures for immediate compliance and a robust, paperless trail that leaves nothing to chance.
        </InfoItem>
        <InfoItem
          title="Insights and Reports, Simplified"
        >
          <span style={{fontWeight: 600}}>Transform data into action.</span> With just a few clicks, generate comprehensive reports and insights. Our intuitive reporting tools make invoice creation and direct stakeholder communication effortlessly efficient."
        </InfoItem>
        <Flex justifyContent="center" alignContent="center">
          <Image
            src="/images/features3.png"
            maxW={["400px", "400px", "550px"]}
            maxH={["400px", "400px", "550px"]}
          />
        </Flex>
        <Flex justifyContent="center" alignContent="center">
          <Image
            src="/images/features4.png"
            maxW={["300px", "300px", "500px"]}
            maxH={["400px", "400px", "550px"]}
          />
        </Flex>
        <InfoItem
          title="Centralise Your Operations"
        >
         <span style={{fontWeight: 600}}>Keep everything in sight, and in sync.</span> Easily manage your clients and jobs within the app, ensuring each docket contains all necessary information for streamlined operations and peace of mind.
        </InfoItem>
      </Grid>
      </SectionLayout>
  );
};

const InfoItem = ({ title, children }) => {
  return (
    <Flex flexDir="column" gap="5%" justifyContent="center">
      <Box fontSize={["35px", "35px", "42px"]} fontWeight="800">
        {title}
      </Box>
      <Box fontSize="18px" maxW="600px" >
        {children}
      </Box>
    </Flex>
  );
};