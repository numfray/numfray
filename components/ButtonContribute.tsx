import { Button } from "./Button.tsx";
import { Github } from "lucide-preact";

export default function ButtonContribute() {
  return (
    <Button
      Icon={Github}
      strokeColor="border-slate-600"
      textColor="text-slate-100"
      link="https://github.com/numfray/numfray"
    >
      Contribute to project
    </Button>
  );
}