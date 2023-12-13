import { Button, Center, Container, Title } from "@mantine/core";
import InterSpeedGlobal from "../component/InterSpeedGlobal/InterSpeedGlobal";
import { Header } from "../component/header/HeaderMenu";
import { PrincipleAndBelif } from "../component/CoreValue/CoreValue";
import AboutUs from "../component/AboutUs/AboutUs";
import { InterSpeedDo } from "../component/InterSpeedDo/InterSpeedDo";
import Footer from "../component/Footer/Footer";
export default function IndexPage() {
  return (
    <div
      style={{
        background: "#F8F7FF",
      }}
    >
      <Header />

      <Container size={"xl"}>
        {/* interspeed global */}
        <InterSpeedGlobal />
        <Center mb={50}>
          <Title> Our core values </Title>{" "}
        </Center>

        <PrincipleAndBelif />
      </Container>

      {/* about us */}
      <AboutUs />

      <InterSpeedDo />

      <Center>
        <Button
          style={{
            margin: "20px",
            borderRadius: "10px",
          }}
        >
          Book a free session now!
        </Button>
      </Center>

      <Footer />
    </div>
  );
}
