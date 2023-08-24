export const setupStripeCustomer = async (user: {
  email?: string | null;
  name?: string | null;
  id: string;
}) => {
  if (!user.email) {
    return;
  }
  // TODO
  void 0;
};
