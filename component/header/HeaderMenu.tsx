import {
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Center,
  Box,
  Image,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons-react";
import classes from "./header.module.css";
import HeaderImage from "../../public/images/Group 3592 (1).png";
const studyAbroadData = [
  {
    title: "Study in USA",
  },
  {
    title: "Study in UK",
  },
  {
    title: "Study in Canada",
  },
  {
    title: "Study in Australia",
  },
  {
    title: "Study in Malaysia",
  },
  {
    title: "Study in Sweden",
  },
  {
    title: "Study in Ireland",
  },
  {
    title: "Study in Denmark",
  },
  {
    title: "Study in Japan",
  },
];

const StudentService = [
  {
    title: "University Admission",
  },
  {
    title: "Visa Application",
  },
  {
    title: "Accommodation",
  },
  {
    title: "Proficiency test programs",
  },
  {
    title: "Guidance and Counselling",
  },
  {
    title: "Study in Sweden",
  },
];
export function Header() {
  const theme = useMantineTheme();

  const studyAbroadDatalinks = studyAbroadData.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <div>
        <Text size="sm" fw={500}>
          {item.title}
        </Text>
      </div>
    </UnstyledButton>
  ));

  const StudentServiceLink = StudentService.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <div>
        <Text size="sm" fw={500}>
          {item.title}
        </Text>
      </div>
    </UnstyledButton>
  ));

  return (
    <div>
      <Box bg={"#2394CD"}>
        <header className={classes.header}>
          <Group justify="center" h="100%">
            <Group h="100%" gap={0} visibleFrom="sm">
              {/* Study Abroad */}
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        <Text c="#FFFFFF">Study Abroad</Text>
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={"#FFFFFF"}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                  {/* <Divider my="sm" /> */}

                  <SimpleGrid cols={2} spacing={0}>
                    {studyAbroadDatalinks}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>

              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        <Text c="#FFFFFF">Student service</Text>
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={"#FFFFFF"}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                  <SimpleGrid cols={2} spacing={0}>
                    {StudentServiceLink}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="#" className={classes.link}>
                <Text c="#FFFFFF">The Academy</Text>
              </a>
              <a href="#" className={classes.link}>
                <Text c="#FFFFFF">About</Text>
              </a>
              <a href="#" className={classes.link}>
                <Text c="#FFFFFF">Contact</Text>
              </a>
            </Group>
          </Group>
        </header>
      </Box>
      <div
        style={{
          height: "48rem",
        }}
      >
        <Image height={"100%"} src={HeaderImage.src} />
      </div>
    </div>
  );
}
