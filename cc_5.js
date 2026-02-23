"use strict";

// Step 2: Employee array (3–5 employees)
const employees = [
  { name: "Alicia", hourlyRate: 22.5, hoursWorked: 38 },
  { name: "Brian", hourlyRate: 18.0, hoursWorked: 44 },
  { name: "Chloe", hourlyRate: 30.0, hoursWorked: 52 },
];

// Step 3: Base pay (up to 40 hours only)
function calculateBasePay(rate, hours) {
  const baseHours = Math.min(hours, 40);
  return rate * baseHours;
}

// Step 4: Overtime pay (1.5x for hours over 40)
function calculateOvertimePay(rate, hours) {
    const overtimeHours = Math.max(0, hours - 40);
    return rate * 1.5 * overtimeHours;
  }
  
  // Step 5: Taxes (deduct 15% from gross)
  function calculateTaxes(grossPay) {
    return grossPay * 0.15;
  }
  
  // Optional helper: round to 2 decimals for nicer output
  function roundMoney(amount) {
    return Number(amount.toFixed(2));
  }

// Step 6: processPayroll(employee)
function processPayroll(employee) {
    const { name, hourlyRate, hoursWorked } = employee;
  
    const basePay = calculateBasePay(hourlyRate, hoursWorked);
    const overtimePay = calculateOvertimePay(hourlyRate, hoursWorked);
    const grossPay = basePay + overtimePay;
  
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;
  
    return {
      name,
      basePay: roundMoney(basePay),
      overtimePay: roundMoney(overtimePay),
      grossPay: roundMoney(grossPay),
      netPay: roundMoney(netPay),
    };
  }
  
  /* Step 1 note: test functions individually */
console.log("TEST base pay (20, 45) =>", calculateBasePay(20, 45)); // 800
console.log("TEST overtime pay (20, 45) =>", calculateOvertimePay(20, 45)); // 150
console.log("TEST taxes (1000) =>", calculateTaxes(1000)); // 150

/* Step 7: loop through employees and log payroll object */
for (const employee of employees) {
  console.log(processPayroll(employee));
}

// Optional: nicer display
console.table(employees.map(processPayroll));