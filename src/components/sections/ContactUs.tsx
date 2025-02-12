"use client";

import { Box, IconButton, Tooltip, Typography, styled } from "@mui/material";
import PrimaryHeader from "../general/PrimaryHeader";
import SectionLayout from "../layouts/SectionLayout";
import SecondaryText from "../general/SecondaryText";
import { Copy, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { copyTextToClipboard } from "@/lib/utils";
import SocialIcons from "../general/SocialIcons";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 15,
  "& svg": {
    width: 32,
    height: 32,
    [theme.breakpoints.down("md")]: {
      width: 20,
      height: 20,
    },
  },
}));

const email = "work.depani@gmail.com";
const phone = "+91 6354145435";

type CopyValue = "email" | "phone";

export default function ContactUs() {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  const handleCopyClick = useCallback(async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      const timoutId: number = window.setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      console.log(error);
      setIsCopied(false);
      setCopiedValueType(null);
      alert("Unable to copy!");
    }
  }, []);

  return (
    <SectionLayout>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <PrimaryHeader highlightedText="touch">Get in</PrimaryHeader>
        <SecondaryText>
          What&rsquo;s next? If you&rsquo;re looking for a developer, have a
          question, or just want to connect, feel free to reach out. I&rsquo;d
          love to hear from you!
        </SecondaryText>
        <StyledBox mt={"2rem"}>
          <Mail />
          <Link href={`mailto:${email}`} target="_blank">
            <Typography variant="h2">{email}</Typography>
          </Link>
          <Tooltip
            title={isCopied && copiedValueType === "email" ? "Copied!" : ""}
            placement="top"
          >
            <IconButton onClick={() => handleCopyClick(email, "email")}>
              <Copy />
            </IconButton>
          </Tooltip>
        </StyledBox>
        <StyledBox mb={"2rem"}>
          <Phone />
          <Link href={"tel:+916354145435"} target="_blank">
            <Typography variant="h2">{phone}</Typography>
          </Link>
          <Tooltip
            title={isCopied && copiedValueType === "phone" ? "Copied!" : ""}
            placement="top"
          >
            <IconButton onClick={() => handleCopyClick(phone, "phone")}>
              <Copy />
            </IconButton>
          </Tooltip>
        </StyledBox>
        <Typography variant="body1">
          You can also find me on these platforms!
        </Typography>
        <SocialIcons />
      </Box>
    </SectionLayout>
  );
}
