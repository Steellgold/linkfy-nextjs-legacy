import { UserButton } from "./CurrentUserButton";
import { LoginButton } from "./LoginButton";

// TODO : Update user type with supabase user
export const AuthButton = ({ user }: { user?: unknown }) => {
  if (user) {
    return <UserButton user={user} />;
  }

  return <LoginButton />;
};
