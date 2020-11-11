import { Flex, useColorMode } from "@chakra-ui/core";
import React from "react";

const Body: React.FC = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };
  const color = { light: "black", dark: "white" };

  return (
    <Flex
      direction="column"
      alignItems="stretch"
      justifyContent="space-around"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      height="100vh"
      {...props}
    />
  );
};

export default Body;
