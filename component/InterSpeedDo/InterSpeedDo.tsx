import {
  Card,
  SimpleGrid,
  UnstyledButton,
  Image,
  useMantineTheme,
  Center,
  Title,
  Container,
} from "@mantine/core";

import classes from "./InterSpeedDo.module.css";
import UniversityAdmission from "../../public/images/universityAdmissions.png";
import visaApplication from "../../public/images/visaApplication.png";
import ProficiencyTestPrograms from "../../public/images/ProficiencyTestPrograms.png";
import Careeronsultancy from "../../public/images/CareerConsultancy.png";
import Accommodation from "../../public/images/accommodation.png";
import GuidanceCounselling from "../../public/images/studentGuidance.png";

const mockdata = [
  {
    title: "University Admissions",
    image: UniversityAdmission,
    backgroundColor: "#fdde88",
  },
  {
    title: "Visa Application",
    image: visaApplication,
    backgroundColor: "#ef6a9d",
  },
  {
    title: "Proficiency Test Programs",
    image: ProficiencyTestPrograms,
    backgroundColor: "#2397d3",
  },
  {
    title: "Career Consultancy",
    image: Careeronsultancy,
    backgroundColor: "#2397d3",
  },
  {
    title: "Accommodation",
    image: Accommodation,
    backgroundColor: "#fdde88",
  },
  {
    title: "Guidance & Counselling",
    image: GuidanceCounselling,
    backgroundColor: "#ef6a9d",
  },
];

export function InterSpeedDo() {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <span>
        <Image bg={item.backgroundColor} src={item.image.src} mt={15} />
      </span>
      <Title order={5}>{item.title}</Title>
    </UnstyledButton>
  ));

  return (
    <Container size={"xl"}>
      <Card className={classes.card}>
        <Center>
          <Title>What does Interspeed Global do?</Title>
        </Center>

        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Card>
    </Container>
  );
}
