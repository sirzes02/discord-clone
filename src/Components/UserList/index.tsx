import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponible - 1</Role>
      <UserRow nickname="Maria Antonieta" />

      <Role>Fuera de linea - 18</Role>
      <UserRow nickname="Diego Fernandez" isBot />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
      <UserRow nickname="Diego Fernandez" />
    </Container>
  );
};

export default UserList;
