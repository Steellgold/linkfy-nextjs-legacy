import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/lib/components/ui/select";
import { Workspace } from "@prisma/client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function WorkspaceSelect({ workspaces }: { workspace: Workspace[] }) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a workspace" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Workspace</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
