//  Address validation
export const validateaddressWithAmount = (address) => {
  const lines = address.split("\n");
  const errors = [];
  const duplicateError = {};

  lines.forEach((line, index) => {
    const [addressPart, amountPart] = line.trim().split(/[,\s=]+/);
    const isNumber = /^[+-]?\d+(\.\d+)?$/.test(amountPart);
    if (!isNumber) {
      errors.push(`Line ${index + 1} wrong amount`);
    }
    // Check Duplicate Address
    if (!duplicateError[addressPart]) {
      duplicateError[addressPart] = [index + 1];
    } else {
      duplicateError[addressPart].push(index + 1);
    }
  });
  const duplicateAddress = Object.entries(duplicateError)
    .filter(([address, positions]) => positions.length > 1)
    .map(([address, positions]) => ({ address, positions }));
  return { errors, duplicateAddress };
};

// Keep First Address function

export const keepFirstOneAddress = (address) => {
  const lines = address.split("\n");
  const uniqueLines = [];
  const seenAddresses = new Set();

  lines.forEach((line, index) => {
    const [addressPart] = line.trim().split(/[,\s=]+/);

    if (!seenAddresses.has(addressPart)) {
      seenAddresses.add(addressPart);
      uniqueLines.push(line);
    }
  });
  const result = uniqueLines.join("\n");
  return result;
};

// Combined Balance Function

export const combineBalancesAddress = (address) => {
  const lines = address.split("\n");
  const combinedBalances = {};
  const uniqueLines = [];

  lines.forEach((line, index) => {
    const [addressPart, ...rest] = line.trim().split(/[,\s=]+/);
    const amountPart = rest.join(" ");

    if (!combinedBalances[addressPart]) {
      combinedBalances[addressPart] = 0;
    }

    combinedBalances[addressPart] += parseInt(amountPart, 10);
  });

  for (const addressPart in combinedBalances) {
    const combinedAmount = combinedBalances[addressPart];
    uniqueLines.push(`${addressPart} ${combinedAmount}`);
  }
  const result = uniqueLines.join("\n");
  return result;
};
