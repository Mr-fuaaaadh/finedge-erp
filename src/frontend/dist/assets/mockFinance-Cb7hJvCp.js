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
  "Dec"
];
const branchBase = {
  b1: { revenue: 425e4, expenses: 21e5, loans: 18e5 },
  b2: { revenue: 51e5, expenses: 245e4, loans: 22e5 },
  b3: { revenue: 38e5, expenses: 19e5, loans: 16e5 },
  b4: { revenue: 295e4, expenses: 155e4, loans: 12e5 },
  b5: { revenue: 31e5, expenses: 162e4, loans: 13e5 }
};
const branchNames = {
  b1: "Mumbai Central",
  b2: "Delhi NCR",
  b3: "Bengaluru East",
  b4: "Hyderabad West",
  b5: "Chennai South"
};
const mockFinanceRecords = [];
let idCounter = 1;
for (const branchId of Object.keys(branchBase)) {
  for (const [idx, month] of months.entries()) {
    const base = branchBase[branchId];
    const seasonality = 1 + 0.08 * Math.sin(idx / 11 * Math.PI);
    const rev = Math.round(
      base.revenue * seasonality * (0.9 + Math.random() * 0.2)
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
      operationalCost: Math.round(exp * 0.65)
    });
  }
}
const mockMonthlyFinance = months.map((month) => {
  const records = mockFinanceRecords.filter((r) => r.month === month);
  const revenue = records.reduce((s, r) => s + r.revenue, 0);
  const expenses = records.reduce((s, r) => s + r.expenses, 0);
  const loanDisbursed = records.reduce((s, r) => s + r.loanDisbursed, 0);
  return {
    month,
    revenue,
    expenses,
    profit: revenue - expenses,
    loanDisbursed
  };
});
const mockBranchFinanceSummary = Object.keys(branchBase).map(
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
        (totalRevenue - totalExpenses) / totalRevenue * 100
      )
    };
  }
);
export {
  mockFinanceRecords as a,
  mockBranchFinanceSummary as b,
  mockMonthlyFinance as m
};
