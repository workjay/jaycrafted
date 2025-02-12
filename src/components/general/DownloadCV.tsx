import PrimaryButton from "./PrimaryButton";
import { Download } from "lucide-react";

export default function DownloadCVButton() {
  return (
    <PrimaryButton
      variant="contained"
      color="primary"
      endIcon={<Download size={"20"} />}
      onClick={() => window?.open("/files/jay_depani_cv.pdf", "_blank")}
    >
      Download CV
    </PrimaryButton>
  );
}
