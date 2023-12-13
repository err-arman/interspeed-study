import { Group, Title, UnstyledButton, Text, Image } from "@mantine/core";
import { IconBellSchool } from "@tabler/icons-react";
import image from "../../public/images/image 1.png";
import classes from "./InterspeedGlobal.module.css";

const data = [
  {
    icon: <IconBellSchool size={40} color="#FFC814" />,
    description:
      "Bangladesh’s leading one stop 360 solutions for higher education abroad. We help students get into top institutions from all corners of the globe.",
  },
  {
    icon: <IconBellSchool size={40} color="#FFC814" />,
    description:
      "An associate company under Interspeed of founded by Enayet Karim in 1968 in the present Interspeed Global aims to do the same. ",
  },
  {
    icon: <IconBellSchool size={40} color="#FFC814" />,
    description:
      "An expert team accumulating 15 years of experience specializing in International Student Recruitment",
  },
];

const InterSpeedGlobal = () => {
  return (
    <div>
      <Group wrap="nowrap">
        <div>
          <Title order={3}>What is Interspeed Global?</Title>
          {data.map((item, index) => (
            <div key={index}>
              <UnstyledButton mt={20} w={"85%"} className={classes.user}>
                <Group wrap="nowrap">
                  <div>{item.icon}</div>
                  <div>
                    <Text>{item.description}</Text>
                  </div>
                </Group>
              </UnstyledButton>
            </div>
          ))}
        </div>

        {/* image */}
        <div>
          <Image radius="md" src={image.src} mb={100} />
        </div>
      </Group>
    </div>
  );
};

export default InterSpeedGlobal;
