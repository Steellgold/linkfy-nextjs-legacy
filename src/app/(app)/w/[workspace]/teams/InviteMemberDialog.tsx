import { Button } from "@/lib/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/lib/components/ui/dialog";
import { Input } from "@/lib/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/components/ui/select";

export const InviteMemberDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Invite a member</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Inivite a member</DialogTitle>
          <DialogDescription>Invite a member to your workspace</DialogDescription>
        </DialogHeader>
        <DialogDescription>
          <strong>Member:</strong> <br />
          &nbsp;- Can create links <br />
          &nbsp;- Can view statistics <br />
          <strong>Admin:</strong> <br />
          &nbsp;- All member permissions <br />
          &nbsp;- Add domains <br />
          &nbsp;- Create/Edit/Delete links/links tree&apos;s <br />
          <strong>Owner:</strong> <br />
          &nbsp;- Warning, this is the highest level of permission <br />
          &nbsp;- All admin permissions, and can edit workspace settings
        </DialogDescription>
        <div className="flex items-center gap-2">
          <Input placeholder="company@service.com" />
          <Select defaultValue={"member"}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Access level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="member">Member</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="owner">Owner</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button variant={"default"} size={"sm"}>
            Invite
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
