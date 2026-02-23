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