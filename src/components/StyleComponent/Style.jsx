import React, { Component } from "react";
import { Box, BoxCopy, Button, Container } from "./style.js";

class Style extends Component {
  render() {
    return (
      <Container>
        <Box size="small">Small Box </Box>
        <Box size="medium">Medium Box</Box>
        <Box size="large">Large Box</Box>
        <BoxCopy>Copy Box</BoxCopy>
        <Button size="30">Log in</Button>
        <Button size="50">Log out</Button>
        <Button size="60">Sign In</Button>
        <Button size="20">Sign Out</Button>
      </Container>
    );
  }
}

export default Style;
