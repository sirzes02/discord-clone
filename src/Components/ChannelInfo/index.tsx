import React from "react";

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>chat-libre</Title>

      <Separator />

      <Description>Canal abierto para conversar</Description>
    </Container>
  );
};

export default ChannelInfo;
