import type { FinanceRecord, MonthlyFinance } from "../types";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const branchBase: Record<
  string,
  { revenue: number; expenses: number; loans: number }
> = {
  b1: { revenue: 4250000, expenses: 2100000, loans: 1800000 },
  b2: { revenue: 5100000, expenses: 2450000, loans: 2200000 },
  b3: { revenue: 3800000, expenses: 1900000, loans: 1600000 },
  b4: { revenue: 2950000, expenses: 1550000, loans: 1200000 },
  b5: { revenue: 3100000, expenses: 1620000, loans: 1300000 },
};

const branchNames: Record<string, string> = {
  b1: "Mumbai Central",
  b2: "Delhi NCR",
  b3: "Bengaluru East",
  b4: "Hyderabad West",
  b5: "Chennai South",
};

export const mockFinanceRecords: FinanceRecord[] = [];
let idCounter = 1;

for (const branchId of Object.keys(branchBase)) {
  for (const [idx, month] of months.entries()) {
    const base = branchBase[branchId];
    const seasonality = 1 + 0.08 * Math.sin((idx / 11) * Math.PI);
    const rev = Math.round(
      base.revenue * seasonality * (0.9 + Math.random() * 0.2),
    );
    const exp = Math.round(base.expenses * (0.95 + Math.random() * 0.1));
    const loans = Math.round(base.loans * seasonality);
    const repaid = Math.round(loans * 0.82);
    mockFinanceRecords.push({
      id: `fin-${idCounter++}`,
      month,
      year: 2024,
      branchId,
      branchName: branchNames[branchId],
      revenue: rev,
      expenses: exp,
      profit: rev - exp,
      loanDisbursed: loans,
      loanRepaid: repaid,
      investmentIncome: Math.round(rev * 0.06),
      operationalCost: Math.round(exp * 0.65),
    });
  }
}

// Consolidated monthly data for org-wide finance charts
export const mockMonthlyFinance: MonthlyFinance[] = months.map((month) => {
  const records = mockFinanceRecords.filter((r) => r.month === month);
  const revenue = records.reduce((s, r) => s + r.revenue, 0);
  const expenses = records.reduce((s, r) => s + r.expenses, 0);
  const loanDisbursed = records.reduce((s, r) => s + r.loanDisbursed, 0);
  return {
    month,
    revenue,
    expenses,
    profit: revenue - expenses,
    loanDisbursed,
  };
});

// Branch-wise summary (latest month)
export const mockBranchFinanceSummary = Object.keys(branchBase).map(
  (branchId) => {
    const records = mockFinanceRecords.filter((r) => r.branchId === branchId);
    const totalRevenue = records.reduce((s, r) => s + r.revenue, 0);
    const totalExpenses = records.reduce((s, r) => s + r.expenses, 0);
    const totalLoans = records.reduce((s, r) => s + r.loanDisbursed, 0);
    return {
      branchId,
      branchName: branchNames[branchId],
      totalRevenue,
      totalExpenses,
      totalProfit: totalRevenue - totalExpenses,
      totalLoans,
      profitMargin: Math.round(
        ((totalRevenue - totalExpenses) / totalRevenue) * 100,
      ),
    };
  },
);
