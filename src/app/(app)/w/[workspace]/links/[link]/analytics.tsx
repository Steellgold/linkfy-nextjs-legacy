"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { DatePickerWithRange } from "@/lib/components/ui/date-picker-range";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/lib/components/ui/select";
import { Flag, MousePointerClick } from "lucide-react";
import { useState } from "react";

type Period = "lh" | "l24h" | "l7d" | "l30d" | "l3m" | "l365d" | "at" | "custom";

type LinkAnalyticsProps = {
  period?: Period;
  dateRange?: { start: Date; end: Date; };
  specificDate?: Date;
};

const titles: Record<string, { name: string; subtitle: string }> = {
  lh: { name: "Last Hour", subtitle: "the last hour" },
  l24h: { name: "Last 24 Hours", subtitle: "the last 24 hours" },
  l7d: { name: "Last 7 Days", subtitle: "the last 7 days" },
  l30d: { name: "Last 30 Days", subtitle: "the last month" },
  l3m: { name: "Last 3 Months", subtitle: "the last 3 months" },
  l365d: { name: "Last 365 Days", subtitle: "the last year" },
  at: { name: "All Time", subtitle: "link creation" },
  custom: { name: "Custom", subtitle: "selected period" },
};

// TODO: Server action to get analytics with the given period

const LinkAnalytics: React.FC<LinkAnalyticsProps> = () => {
  const [dataPeriod, setDataPeriod] = useState<Period>("l30d");

  return (
    <>
      <div className="flex flex-row items-center justify-end mb-4 gap-2">
        <Select onValueChange={(value) => setDataPeriod(value as Period)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a period" />
          </SelectTrigger>
          <SelectContent defaultValue={"l30d"}>
            <SelectItem value="lh">Last Hour</SelectItem>
            <SelectItem value="l24h">Last 24 Hours</SelectItem>
            <SelectItem value="l7d">Last 7 Days</SelectItem>
            <SelectItem value="l30d">Last 30 Days</SelectItem>
            <SelectItem value="l3m">Last 3 Months</SelectItem>
            <SelectItem value="l365d">Last 365 Days</SelectItem>
            <SelectItem value="at">All Time</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>

        {dataPeriod == "custom" && (
          <DatePickerWithRange />
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Clicks
            </CardTitle>
            <MousePointerClick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +12.1% from {titles[dataPeriod].subtitle}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Top Country
            </CardTitle>
            <Flag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">France</div>
            <p className="text-xs text-muted-foreground">
              {titles[dataPeriod].subtitle}: United States
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default LinkAnalytics;