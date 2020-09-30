// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

function checkCashRegister(price, cash, cid) {
  let changeInHundred = parseInt(((cash - price) * 100).toFixed(2));
  const unitAmountInHundred = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  const due = {status: '', change: []};

  const registerInHundred = cid.reduce((acc, currency) => {
    const cash = currency[1];
    return acc + cash * 100
  }, 0);

  if (registerInHundred == changeInHundred) {
    due.status = 'CLOSED'
  } else if (registerInHundred < changeInHundred) {
    due.status = 'INSUFFICIENT_FUNDS';
  } else {
    due.status = 'OPEN';
  }

  if (due.status != 'INSUFFICIENT_FUNDS') {
    let decimal = changeInHundred % 100;

    if (decimal > 0) {
      const coins = unitAmountInHundred.slice(0, 4).reverse()
        .reduce((acc, item, i, arr) => {
          if (parseInt(cid[arr.length - 1 - i][1] * 100) < decimal || decimal === 0) {
            return acc;
          }

          const unit = cid[arr.length - 1 - i][0];
          let sub = (decimal % item === 0) ? decimal : item * Math.floor(decimal / item);
          if (sub === 0) {
            return acc;
          }
          
          acc.push([unit, sub / 100]);
          changeInHundred -= sub;
          decimal -= sub;
          return acc;
        }, [])

      due.change = due.change.concat(coins);
    }

    if (changeInHundred > 0) {
      const bills = unitAmountInHundred.slice(4).reverse()
        .reduce((acc, item, i, arr) => {
          if (item > changeInHundred || changeInHundred === 0) {
            return acc;
          }

          const unit = cid[arr.length + 3 - i][0];
          let sub = (changeInHundred % item === 0) ? changeInHundred : item * Math.floor(changeInHundred / item);
          if (sub === 0) {
            return acc;
          } else if (sub > cid[arr.length + 3 - i][1] * 100) {
            sub = cid[arr.length + 3 - i][1] * 100;
          }

          acc.push([unit, sub / 100]);
          changeInHundred -= sub;
          return acc;
        }, []);

      due.change = bills.concat(due.change);
    }
  }
  
  if (due.status == 'CLOSED') {
    let i = 0;
    due.change = cid.map(item => {
      while (i < due.change.length) {
        if (item[0] == due.change[i][0]) {
          return due.change[i];
        }
        i += 1;
      }
      return item;
    })
  } else if (due.status == 'OPEN' && changeInHundred > 0) {
    due.status = 'INSUFFICIENT_FUNDS';
    due.change = [];
  }

  return due;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
