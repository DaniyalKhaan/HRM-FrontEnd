import React from "react";
import { Stack } from "@mui/system";
import Income_Card from "./Income_Card";
import Expense_Card from "./Expense_Card";
import Donut_Card from "./Donut_Card";
import Label from "./DashboardHeading";
import StatsCard from "../../../utilities.jsx/StatusCard";

function Cards() {
  return (
    <Stack
      spacing={2.6}
      direction="column"
      justifyContent="center"
      bgcolor="#F8F7F1"
      ml={2.2}
    >
      <Label />
      <Income_Card />
      <Expense_Card />
      <Donut_Card />
      <StatsCard
        title="Income"
        chipLabel="Today"
        mainAmount="$9,460.00"
        changeDirection="down"
        changePercentage="1.5%"
        comparedText="Compared to $9,940 yesterday"
        lastWeekLabel="Last week Income"
        lastWeekAmount="$25,658.00"
      />

      <StatsCard
        title="Expenses"
        chipLabel="This Week"
        mainAmount="$4,200.00"
        changeDirection="up"
        changePercentage="2.3%"
        comparedText="Compared to $3,890 last week"
        lastWeekLabel="Last week Expenses"
        lastWeekAmount="$15,200.00"
      />
    </Stack>
  );
}

export default Cards;
