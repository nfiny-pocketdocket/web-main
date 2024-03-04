import { Box } from "@chakra-ui/react";
import { SectionLayout } from "../../components/shared/SectionLayout";

export const Features = () => {
  return (
    <SectionLayout bg="#F6F6F6" justifyContent={undefined}>
      <Box fontSize={["30px", "30px", "35px"]} fontWeight="700">
        Features
      </Box>
      {/* keep track of all clients and jobs */}
      {/* create labor dockets which are signed on the spot for compliance */}
      {/* report on variablility metrics */}
      {/* send dockets and reports */}
    </SectionLayout>
  );
};
