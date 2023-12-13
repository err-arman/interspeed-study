import classes from "./AboutUs.module.css";
import { Group, Text, Image, Title, Stack, Space } from "@mantine/core";
import image from "../../public/images/manWithLaptop.png";
import { IconTestPipe } from "@tabler/icons-react";
const AboutUs = () => {
  return (
    <div>
      <div className={classes.body}>
        <Group>
          <div
            style={{
              marginLeft: "6%",
            }}
          >
            <Image h={"25rem"} mt={"-8rem"} src={image.src} />
          </div>
          <div>
            <Stack gap={"md"}>
              <Text c="#FFFFFF"> This is where magic transpires</Text>
              <Title order={4} c="#FFFFFF">
                Why Interspeed Global?
              </Title>
              <Group>
                <IconTestPipe color="#FFFFFF" />
                <Text c={"#FFFFFF"}>10+ affiliated countries</Text>
              </Group>
              <Group>
                <IconTestPipe color="#FFFFFF" />
                <Text c={"#FFFFFF"}>
                  15+ years of International Student Recruitment experience
                </Text>
              </Group>
              <Group>
                <IconTestPipe color="#FFFFFF" />
                <Text c={"#FFFFFF"}>Globally certified expert team</Text>
              </Group>
              <Title order={5} c={"#FFFFFF"}>
                Because you’re not just a student, and we get that
              </Title>
            </Stack>
          </div>
        </Group>
      </div>
    </div>
  );
};

export default AboutUs;
