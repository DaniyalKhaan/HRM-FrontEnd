import React from "react";
import { Stack } from "@mui/system";
import Income_Card from "./Income";
import Expense_Card from "./Expense";
import Donut_Card from "./Donut";
import Label from "./Heading";
import StatsCard from "../../../utilities/cards/card";

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
