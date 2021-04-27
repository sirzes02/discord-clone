import React from "react";
import ChannelButton from "../ChannelButton";

import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canales de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-libre" />
      <ChannelButton channelName="trabajo" />
      <ChannelButton channelName="lolsito" />
      <ChannelButton channelName="csg" />
      <ChannelButton channelName="valorant" />
    </Container>
  );
};

export default ChannelList;
