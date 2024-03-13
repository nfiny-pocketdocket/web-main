import { Box, Center, Flex, Grid, Image } from "@chakra-ui/react";
import { SectionLayout } from "../../components/shared/SectionLayout";

export const Features = () => {
  return (
    <SectionLayout
      justifyContent={[undefined, undefined, "center"]}
      bg="#F9F4DC"
      id="feature"
    >
      <Box fontSize={["2em", "2em", "2.5em"]} fontWeight="800" py="1.5%">
        Features
      </Box>
      <Grid
        maxW="1100px"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        rowGap="8em"
        columnGap="5em"
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          order={{ base: 2, md: 0 }}
        >
          <InfoItemLeft title="Go Paperless" textAlign="right">
            <span style={{ fontWeight: 600 }}>
              Ditch the clutter and the risk of lost dockets.
            </span>{" "}
            With our app, every variable is tracked and accounted for, ensuring
            you're always paid for your hard work without the hassle of paper.
          </InfoItemLeft>
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          alignSelf="center"
          order={{ base: 1, md: 0 }}
        >
          <Box justifySelf="center" alignSelf="center">
            <Image
              src="/images/features1.png"
              maxW={["100%", "100%", "80%"]}
              maxH={["100%", "100%", "80%"]}
            />
          </Box>
        </Flex>

        <Flex
          flexDir="column"
          justifyContent="center"
          alignSelf="center"
          order={{ base: 3, md: 0 }}
        >
          <Box justifySelf="center" alignSelf="center">
            <Image
              src="/images/features2.png"
              maxW={["100%", "100%", "100%"]}
              maxH={["100%", "100%", "100%"]}
            />
          </Box>
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          order={{ base: 4, md: 0 }}
        >
          <InfoItemRight title="Ensure Seamless Compliance">
            <span style={{ fontWeight: 600 }}>
              Instant, on-the-spot docket approval.
            </span>{" "}
            Streamline your workflow with digital signatures for immediate
            compliance and a robust, paperless trail that leaves nothing to
            chance.
          </InfoItemRight>
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          order={{ base: 6, md: 0 }}
        >
          <InfoItemLeft
            title="Insights and Reports, Simplified"
            textAlign="right"
          >
            <span style={{ fontWeight: 600 }}>Transform data into action.</span>{" "}
            With just a few clicks, generate comprehensive reports and insights.
            Our intuitive reporting tools make invoice creation and direct
            stakeholder communication effortlessly efficient."
          </InfoItemLeft>
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          alignSelf="center"
          order={{ base: 5, md: 0 }}
        >
          <Box justifySelf="center" alignSelf="center">
            <Image
              src="/images/features3.png"
              maxW={["100%", "100%", "100%"]}
              maxH={["100%", "100%", "100%"]}
            />
          </Box>
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          alignSelf="center"
          order={{ base: 7, md: 0 }}
        >
          <Box justifySelf="center" alignSelf="center">
            <Image
              src="/images/features4.png"
              maxW={["100%", "100%", "100%"]}
              maxH={["100%", "100%", "100%"]}
            />
          </Box>
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          order={{ base: 8, md: 0 }}
        >
          <InfoItemRight title="Centralise Your Operations">
            <span style={{ fontWeight: 600 }}>
              Keep everything in sight, and in sync.
            </span>{" "}
            Easily manage your clients and jobs within the app, ensuring each
            docket contains all necessary information for streamlined operations
            and peace of mind.
          </InfoItemRight>
        </Flex>

        {/* <Grid
        maxW="1100px"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={8}
      >
        <Flex flexDir="column" justifyContent="center">
          <InfoItemLeft
            title="Go Paperless"
            order={{ base: 1 }}
            textAlign="right"
          >
            <span style={{ fontWeight: 600 }}>
              Ditch the clutter and the risk of lost dockets.
            </span>{" "}
            With our app, every variable is tracked and accounted for, ensuring
            you're always paid for your hard work without the hassle of paper.
          </InfoItemLeft>

          <Flex>
            <Box
              justifyContent="center"
              alignContent="center"
              order={{ base: 2 }}
            >
              <Image
                src="/images/features1.png"
                maxW={["100%", "100%", "100%"]}
                maxH={["100%", "100%", "80%"]}
              />
            </Box>
          </Flex>
        </Flex> */}
        {/* <Flex>
          <Flex
            justifyContent="center"
            alignContent="center"
            order={{ base: 4, md: 0 }}
          >
            <Image
              src="/images/features2.png"
              maxW={["500px", "500px", "700px"]}
              maxH={["300", "400px", "460"]}
            />
          </Flex>
          <InfoItemRight
            title="Ensure Seamless Compliance"
            order={{ base: 3, md: 0 }}
          >
            <span style={{ fontWeight: 600 }}>
              Instant, on-the-spot docket approval.
            </span>{" "}
            Streamline your workflow with digital signatures for immediate
            compliance and a robust, paperless trail that leaves nothing to
            chance.
          </InfoItemRight>
        </Flex>
        <InfoItemLeft
          title="Insights and Reports, Simplified"
          order={{ base: 5, md: 0 }}
          textAlign="right"
        >
          <span style={{ fontWeight: 600 }}>Transform data into action.</span>{" "}
          With just a few clicks, generate comprehensive reports and insights.
          Our intuitive reporting tools make invoice creation and direct
          stakeholder communication effortlessly efficient."
        </InfoItemLeft>
        <Flex
          justifyContent="center"
          alignContent="center"
          order={{ base: 6, md: 0 }}
        >
          <Image
            src="/images/features3.png"
            maxW={["400px", "400px", "550px"]}
            maxH={["400px", "400px", "550px"]}
          />
        </Flex>
        <Flex
          justifyContent="center"
          alignContent="center"
          order={{ base: 8, md: 0 }}
        >
          <Image
            src="/images/features4.png"
            maxW={["300px", "300px", "500px"]}
            maxH={["400px", "400px", "550px"]}
          />
        </Flex>
        <InfoItemRight
          title="Centralise Your Operations"
          order={{ base: 7, md: 0 }}
        >
          <span style={{ fontWeight: 600 }}>
            Keep everything in sight, and in sync.
          </span>{" "}
          Easily manage your clients and jobs within the app, ensuring each
          docket contains all necessary information for streamlined operations
          and peace of mind.
        </InfoItemRight> */}
      </Grid>
    </SectionLayout>
  );
};

const InfoItemLeft = ({ title, children, ...props }) => {
  return (
    <Flex
      flexDir="column"
      gap="5%"
      justifyContent="center"
      width="100%"
      {...props}
    >
      <Box fontSize={["1.5em", "1.5em", "2em"]} fontWeight="700">
        {title}
      </Box>
      <Box fontSize="1.25em" alignSelf="end">
        {children}
      </Box>
    </Flex>
  );
};

const InfoItemRight = ({ title, children, ...props }) => {
  return (
    <Flex
      flexDir="column"
      gap="5%"
      justifyContent="center"
      width="100%"
      {...props}
    >
      <Box fontSize={["1.5em", "1.5em", "2em"]} fontWeight="700">
        {title}
      </Box>
      <Box fontSize="1.25em">{children}</Box>
    </Flex>
  );
};
