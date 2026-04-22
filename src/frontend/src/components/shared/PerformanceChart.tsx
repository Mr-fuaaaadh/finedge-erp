import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartCard } from "./ChartCard";

interface MetricSeries {
  dataKey: string;
  label: string;
  type: "bar" | "line";
  color: string;
}

interface PerformanceChartProps {
  data: Record<string, unknown>[];
  xKey: string;
  series: MetricSeries[];
  title: string;
  subtitle?: string;
  loading?: boolean;
  "data-ocid"?: string;
}

export function PerformanceChart({
  data,
  xKey,
  series,
  title,
  subtitle,
  loading = false,
  "data-ocid": dataOcid,
}: PerformanceChartProps) {
  return (
    <ChartCard
      title={title}
      subtitle={subtitle}
      loading={loading}
      data-ocid={dataOcid}
    >
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart
          data={data}
          margin={{ top: 8, right: 16, bottom: 0, left: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="oklch(0.91 0.01 0)"
          />
          <XAxis
            dataKey={xKey}
            tick={{ fontSize: 11, fill: "oklch(0.52 0 0)" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "oklch(0.52 0 0)" }}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid oklch(0.91 0.01 0)",
              fontSize: "12px",
            }}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: "11px", paddingTop: "8px" }}
          />
          {series.map((s) =>
            s.type === "bar" ? (
              <Bar
                key={s.dataKey}
                dataKey={s.dataKey}
                name={s.label}
                fill={s.color}
                radius={[4, 4, 0, 0]}
                maxBarSize={32}
              />
            ) : (
              <Line
                key={s.dataKey}
                type="monotone"
                dataKey={s.dataKey}
                name={s.label}
                stroke={s.color}
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            ),
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
