import { calculateExperience } from "@/lib/utils";
import { Box, Typography } from "@mui/material";

export default function AboutMeDetail() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Typography variant="h3" align="left">
        Want to know more about me? Here you go!
      </Typography>
      <Typography variant="body1" align="left">
        I&apos;m a passionate Full Stack Developer specializing in React.js and
        Node.js. I focus on building high-performance, scalable applications
        with clean and efficient code.
      </Typography>
      <Typography variant="body1" align="left">
        I began my journey as a web developer in 2021, and over the past&nbsp;
        {calculateExperience()} years, I&apos;ve continuously grown, taking on
        new challenges and staying up to date with the latest technologies.
        Today, I&apos;m building cutting-edge web applications using modern
        technologies like Next.js, Express.js, NestJS, Material UI, MySQL,
        MongoDB, and more.
      </Typography>
      <Typography variant="body1" align="left">
        A little about me:
      </Typography>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          <Typography variant="body1" align="left">
            B.Tech in Computer Science & Engineering
          </Typography>
        </li>
        <li>
          <Typography variant="body1" align="left">
            Full time freelancer
          </Typography>
        </li>
      </ul>
      <Typography variant="body1" align="left">
        I&apos;m currently available for freelance projects! Feel free to say
        hello—I promise I&apos;m as friendly as I am skilled. 😉
      </Typography>
    </Box>
  );
}
