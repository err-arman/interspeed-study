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
      <Group p={10} justify="space-between">
        {/* contact */}
        <Group>
          <IconPhone
            style={{
              marginTop: "30px",
            }}
            color={"#FFFFFF"}
          />
          <Text mt={30} c={"#FFFFFF"}>
            (123) 456-7890
          </Text>
        </Group>
        {/* terms */}
        <Group>
          <Text mt={30} c={"#FFFFFF"}>
            {" "}
            Team
          </Text>
          <Text mt={30} c={"#FFFFFF"}>
            Case Studies
          </Text>
          <Text mt={30} c={"#FFFFFF"}>
            Publications
          </Text>
        </Group>

        {/* icons */}
        <Group>
          <ActionIcon mt={30} bg={"#77c4e7"}>
            <IconBrandLinkedin />{" "}
          </ActionIcon>
          <ActionIcon mt={30} bg={"#77c4e7"}>
            <IconBrandFacebook />{" "}
          </ActionIcon>
          <ActionIcon mt={30} bg={"#77c4e7"}>
            <IconBrandInstagram />{" "}
          </ActionIcon>
          <ActionIcon mt={30} bg={"#77c4e7"}>
            <IconBrandYoutube />{" "}
          </ActionIcon>
        </Group>
      </Group>
    </div>
  );
};

export default Footer;
