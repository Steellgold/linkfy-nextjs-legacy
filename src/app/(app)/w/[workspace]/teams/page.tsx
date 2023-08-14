import {
  Dashboard,
  DashboardActions,
  DashboardContent,
  DashboardDescription,
  DashboardHeader,
  DashboardTitle,
} from "@/lib/features/layout/app/Dashboard";
import { TeamTable } from "@/lib/molecules/team/team-datatable";
import { TeamMember, teamColumns } from "@/lib/molecules/team/team-datatable.type";
import dayjs from "dayjs";
import { InviteMemberDialog } from "./InviteMemberDialog";

const Team = (): React.ReactElement => {
  const members: TeamMember[] = [
    {
      id: "a1a2",
      name: "Gaëtan",
      role: "OWNER",
      avatarUrl: "https://avatars.githubusercontent.com/u/51505384?v=4",
      email: "steellgold0@gmail.com",
      invitedAt: dayjs().add(-9, "day").toISOString(),
    },
    {
      id: "a2a1",
      name: "Melvyn",
      role: "MEMBER",
      avatarUrl: "https://avatars.githubusercontent.com/u/56388157?v=4",
      email: "placeholder@melvynx.com",
      invitedAt: dayjs().toISOString(),
    },
  ];

  return (
    <Dashboard>
      <DashboardHeader>
        <DashboardTitle>Teams</DashboardTitle>
        <DashboardActions>
          <InviteMemberDialog />
        </DashboardActions>
      </DashboardHeader>

      <DashboardDescription>
        Here invite your colleagues, friends, partners so that they can access your
        workspace, generate links, or view statistics. <br />
        You will also be able to create or assign custom permissions to your members
        in the future
      </DashboardDescription>

      <DashboardContent>
        <TeamTable columns={teamColumns} data={members} />
      </DashboardContent>
    </Dashboard>
  );
};

export default Team;
