
 const arrUser = [
    {nameUser: "Oleg", balance: 3525, frend: "Max"},
    {nameUser: "Max", balance: 2000, frend: "Oleg"},
    {nameUser: "Anny", balance: 250000}
 ];

 // 1
//  const userBalance = arrUser.reduce((acc, {balance}) => acc + balance, 0);

// 2
const usreFrend = arrUser.reduce((acc, nameUs) => {
    if(nameUs === nameUs.frend) {
        return nameUs;
    }
},0);
console.log(usreFrend);