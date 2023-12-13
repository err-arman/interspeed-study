import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Divider,
} from "@mantine/core";
import image from "./../../public/images/principleAndBelif.png";
import classes from "./CoreValue.module.css";

const data = [
  {
    title: "Trust",
    description:
      "Some random bullshit about trust being the pillar of every journey forward ",
  },
  {
    title: "Ethics",
    description:
      "Some random bullshit about ethics being the pillar of every journey forward",
  },
  {
    title: "Expertise",
    description: `Some random bullshit about ethics being the pillar of every journey forward`,
  },
  {
    title: "Professionalism",
    description:
      "Some random bullshit about trust being the pillar of every journey forward ",
  },
];

export function PrincipleAndBelif() {
  return (
    <div>
      <Group wrap="nowrap" mb={200}>
        <div style={{width: '100%'}}>
          <Title order={2}>
            We want to shape the tomorrow, <br /> with our principles & belifes
          </Title>

          {data.map((item, index) => (
            <div
              key={index}
              style={{
                marginTop: "20px",
              }}
            >
              <Title
                c={index == 0 ? "#000" : "#C2C2C2"}
                style={{
                  fontFamily: "Anek Bangla",
                }}
                order={4}
              >
                {item.title}
              </Title>
              <Text
                c={index == 0 ? "#000" : "#C2C2C2"}
                style={{
                  fontFamily: "Anek Bangla",
                }}
              >
                {item.description}
              </Text>
            </div>
          ))}
        </div>
        <div >
          <Image src={image.src} className={classes.image} />
        </div>
      </Group>
    </div>
  );
}
