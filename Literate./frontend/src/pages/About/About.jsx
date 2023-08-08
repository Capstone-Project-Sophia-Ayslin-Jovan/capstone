import React from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import {
  Text,
  Card,
  Container,
  Spacer,
  Image,
  Row,
  Col,
} from "@nextui-org/react";
const About = ({ appState, setAppState }) => {
  return (
    <div>
      <Nav appState={appState} setAppState={setAppState} />
      <Container>
        <Card>
          <Card.Body>
            <Container>
              <Text size={32} h1>
                Why Literate?
              </Text>
              <Text size={26} css={{ fontWeight: "$normal" }} h2>
                Literate was born from our collective desire to decode the often
                confusing world of finances. We know firsthand how overwhelming
                money matters can be, so we're here to simplify the process,
                step by step.
              </Text>
            </Container>
            <Spacer y={2} />
            <Container>
              <Row>
                <Container css={{ width: 700 }}>
                  <Text size={26} css={{ fontWeight: "$normal" }} h2>
                    Our mission is simple: to empower the financially uninformed
                    with the tools and knowledge they need to take control of
                    their finances. We believe that everyone deserves the chance
                    to make informed money decisions, no matter their background
                    or experience.
                  </Text>
                  <Col>
                    <Text size={32} h1>
                      Get Smarter (with your money)
                    </Text>

                    <Text size={26} css={{ fontWeight: "$normal" }} h2>
                      With Literate we offer a learning platform for those with
                      limited financial knowledge and the tools to put that
                      newly gained knowledge to the test. We've accounted for
                      every possible perspective to create a user focused
                      experience, allowing YOU a space to learn and grow as a
                      financially literate beginner.
                    </Text>
                  </Col>
                </Container>
                <Image
                  width={500}
                  src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?w=1800&t=st=1690989847~exp=1690990447~hmac=825ecfe74c23cc7e71ab007e21b66d0876f35d596303021df70870495c255ae0"
                />
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
      <Spacer y={19} />
      <Footer />
    </div>
  );
};

export default About;
