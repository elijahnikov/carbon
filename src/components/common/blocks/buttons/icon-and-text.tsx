import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";

export default function IconAndTextButton() {
	return <Button before={<UploadIcon />}>Upload</Button>;
}
