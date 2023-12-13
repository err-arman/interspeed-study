import { ActionIcon, Group, Text } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconPhone,
} from "@tabler/icons-react";
import classes from "./footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <Group justify="space-between">
        {/* contact */}
        <Group>
          <IconPhone color={"#FFFFFF"} />
          <Text c={"#FFFFFF"}>(123) 456-7890</Text>
        </Group>
        {/* terms */}
        <Group>
          <Text c={"#FFFFFF"}> Team</Text>
          <Text c={"#FFFFFF"}>Case Studies</Text>
          <Text c={"#FFFFFF"}>Publications</Text>
        </Group>

        {/* icons */}
        <Group>
          <ActionIcon>
            <IconBrandLinkedin />{" "}
          </ActionIcon>
          <ActionIcon>
            <IconBrandFacebook />{" "}
          </ActionIcon>
          <ActionIcon>
            <IconBrandInstagram />{" "}
          </ActionIcon>
          <ActionIcon>
            <IconBrandYoutube />{" "}
          </ActionIcon>
        </Group>
      </Group>
    </div>
  );
};

export default Footer;
