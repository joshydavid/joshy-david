import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";

export default function SubmitForm() {
  const { pending } = useFormStatus();
  return (
    <Button variant="secondary" size="lg">
      {pending ? (
        <DotsHorizontalIcon className="h-9 w-9 animate-pulse" />
      ) : (
        "Send"
      )}
    </Button>
  );
}
