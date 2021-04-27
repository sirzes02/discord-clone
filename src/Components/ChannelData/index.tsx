import React, { useRef, useEffect } from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages>
        {Array.from(Array(15).keys()).map((key) => (
          <ChannelMessage
            key={key}
            author="Santiago Varela"
            date="21/06/2020"
            content="Momento de hacer una prueba de texto"
          />
        ))}

        <ChannelMessage
          isBot
          hasMentions
          author="Maria Antonieta"
          date="21/06/2020"
          content={
            <>
              <Mention>@Santiago varela</Mention>, ¿me carrea en Valorant por
              favor?
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar en #chat-libre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
