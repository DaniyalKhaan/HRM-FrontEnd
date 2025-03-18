import * as React from 'react';
import { Card, CardContent, Typography, Box, Select, MenuItem, Stack } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import CircleIcon from '@mui/icons-material/Circle';

const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

// Dummy data
const currentData = [200, 250, 170, 220, 240, 260];
const lastYearData = [150, 180, 160, 170, 190, 185];

export default function EarningSummaryGraph() {
  const [range, setRange] = React.useState('Mar 2022 - Oct 2022');

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight="bold">
            Earning Summary
          </Typography>
          <Select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ minWidth: 160 }}
          >
            <MenuItem value="Mar 2022 - Oct 2022">Mar 2022 - Oct 2022</MenuItem>
            <MenuItem value="Jan 2022 - Aug 2022">Jan 2022 - Aug 2022</MenuItem>
          </Select>
        </Box>

        {/* Chart */}
        <Box display="flex" justifyContent="center">
          <LineChart
            xAxis={[{ scaleType: 'point', data: months }]}
            series={[
              {
                data: currentData,
                color: '#1976d2',
                area: true, // Gradient fill
                curve: 'monotoneX', // Smooth curve
              },
              {
                data: lastYearData,
                color: '#9e9e9e',
                curve: 'monotoneX',
                area: false, // No fill
              },
            ]}
            width={670}
            height={250}
            grid={{ vertical: true, horizontal: true }}
            sx={{
              '& .MuiLineElement-root': { strokeWidth: 2 },
              '& .MuiMarkElement-root': { display: 'none' }, // Hide dots
              '& .MuiAreaElement-root:first-of-type': {
                fill: 'url(#gradient)',
              },
            }}
          />
        </Box>

        {/* Gradient Definition */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1976d2" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1976d2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Legends at bottom */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          {/* Left legend */}
          <Stack direction="row" spacing={1} alignItems="center">
            <CircleIcon sx={{ color: '#1976d2', fontSize: 10 }} />
            <Typography variant="caption">Last 6 months</Typography>
          </Stack>

          {/* Right legend */}
          <Stack direction="row" spacing={1} alignItems="center">
            <CircleIcon sx={{ color: '#9e9e9e', fontSize: 10 }} />
            <Typography variant="caption">Same period last year</Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
