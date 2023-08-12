import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/lib/components/ui/dialog";
import { Button } from "@/lib/components/ui/button";
import { Separator } from "@/lib/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/lib/components/ui/select";
import { TeamTable } from "@/lib/molecules/team/team-datatable";
import { TeamMember, teamColumns } from "@/lib/molecules/team/team-datatable.type";
import dayjs from "dayjs";
import { Input } from "@/lib/components/ui/input";

const Team = (): React.ReactElement => {
  const members: TeamMember[] = [
    { id: "a1a2", name: "Gaëtan", role: "OWNER", avatarUrl: "https://avatars.githubusercontent.com/u/51505384?v=4", email: "steellgold0@gmail.com", invitedAt: dayjs().add(-9, "day").toISOString()},
    { id: "a2a1", name: "Melvyn", role: "MEMBER", avatarUrl: "https://avatars.githubusercontent.com/u/56388157?v=4", email: "placeholder@melvynx.com", invitedAt: dayjs().toISOString()},
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Team</h3>
          <p className="text-sm text-muted-foreground">
            Here invite your colleagues, friends, partners so that they can access your workspace, generate links, or view statistics. <br />
            You will also be able to create or assign custom permissions to your members in the future
          </p>
        </div>
        <Dialog>
          <DialogTrigger>
            <Button variant={"outline"}>
              Invite a member
            </Button>
          </DialogTrigger>
          <DialogContent>
          <DialogHeader>
            <DialogTitle>Inivite a member</DialogTitle>
            <DialogDescription>
              Invite a member to your workspace
            </DialogDescription>
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
              <Button variant={"default"} size={"sm"}>Invite</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Separator />
      <div className="space-y-2">
        <TeamTable columns={teamColumns} data={members} />
      </div>
    </div>
  );
};

export default Team;