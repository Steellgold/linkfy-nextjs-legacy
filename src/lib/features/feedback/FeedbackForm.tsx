"use client";

import { AutoResizableTextarea } from "@/lib/components/ui/AutoResizableTextArea";
import { Button } from "@/lib/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/lib/components/ui/form";
import { useToast } from "@/lib/components/ui/use-toast";
import { z } from "zod";

const formSchema = z.object({
  feedback: z.string().min(1),
});

type FeedbackFormSchema = z.infer<typeof formSchema>;

export const FeedbackForm = ({
  onSubmit,
}: {
  onSubmit: (formData: FeedbackFormSchema) => Promise<void>;
}) => {
  const { toast } = useToast();
  const form = useZodForm({
    schema: formSchema,
  });

  return (
    <Form
      form={form}
      onSubmit={async (data) => {
        await onSubmit(data);
        toast({
          title: "Feedback submitted",
          description: "Thank you for your feedback",
        });
        form.setValue("feedback", "");
      }}
      className="flex flex-col gap-2"
    >
      <FormField
        control={form.control}
        name="feedback"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Feedback</FormLabel>
            <FormControl>
              <AutoResizableTextarea rows={2} {...field} />
            </FormControl>
            <FormDescription>
              The feedback will be send to our team and we will reach you soon.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button size="sm" type="submit">
        Submit
      </Button>
    </Form>
  );
};
