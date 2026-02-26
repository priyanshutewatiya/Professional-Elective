function sum(transactions) {
  return transactions.reduce(
    (acc, t) => {
      const amt = Number(t.amount) || 0;
      if (amt > 0) acc.income += amt;
      else if (amt < 0) acc.expense += Math.abs(amt);
      return acc;
    },
    { income: 0, expense: 0 }
  );
}

function handleSubmit(text, amount, transactions) {
  const cleanText = (text ?? "").trim();
  const amt = Number(amount);

  // Validation rules
  if (!cleanText || !Number.isFinite(amt) || amt === 0) return transactions;

  // id = max existing id + 1
  let maxId = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].id > maxId) maxId = transactions[i].id;
  }

  const newTx = { id: maxId + 1, text: cleanText, amount: amt };

  // Add immutably
  return [...transactions, newTx];
}

function renderTransactions(transactions) {
  return transactions.map((t) => `${t.text} : ${t.amount}`);
}

function deleteTransaction(transactions, id) {
  const targetId = Number(id);
  return transactions.filter((t) => t.id !== targetId);
}

function processData(input) {
  const tokens = input.trim().split(/\s+/);
  let i = 0;

  const N = Number(tokens[i++]) || 0;

  let transactions = [];
  for (let k = 0; k < N; k++) {
    const text = tokens[i++] ?? "";
    const amount = Number(tokens[i++]);
    transactions.push({ id: k + 1, text, amount });
  }

  const newText = tokens[i++] ?? "";
  const newAmount = tokens[i++] ?? "0";
  const deleteId = tokens[i++] ?? "0";

  // Simulate React logic
  transactions = handleSubmit(newText, newAmount, transactions);
  transactions = deleteTransaction(transactions, deleteId);

  const totals = sum(transactions);
  const renderedList = renderTransactions(transactions);

  const result = {
    transactions,
    totals,
    renderedList,
  };

  console.log(JSON.stringify(result, null, 2));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
  _input += input;
});
process.stdin.on("end", function () {
  processData(_input);
});