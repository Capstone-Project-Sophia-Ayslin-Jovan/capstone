import React from "react";
import { Text, Container, Row, Button, Image, Spacer } from "@nextui-org/react";
import { useNavigate } from "react-router";
const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <Container css={{ textAlign: "center", justifyContent: "center" }}>
        <Text h1 color="primary" size={100}>
          404
        </Text>
        <Row
          css={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            css={{ width: "70%", marginLeft: "15%" }}
            src="https://img.freepik.com/free-vector/full-energy-tired-exhausted-woman-office-worker_88138-800.jpg?w=2000&t=st=1691517198~exp=1691517798~hmac=247eb9e14da242b7d40a1103423a2bea6141c7f2d90c0a8ad5f586d63e61d04b"
          />
        </Row>
        <Text h2 size={50}>
          Page Not Found.
        </Text>
        <Spacer y={2} />
        <Row css={{ justifyContent: "center" }}>
          <Button flat size={"xl"} onPress={handleClick}>
            Go Home
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
