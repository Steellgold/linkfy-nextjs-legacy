import { Separator } from "@/lib/components/ui/separator";

const Billing = (): React.ReactElement => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Billing</h3>
        <p className="text-sm text-muted-foreground">
          Manage your billing information and view your invoices and billing history. <br />
        </p>
      </div>
      <Separator />
    </div>
  );
};

export default Billing;