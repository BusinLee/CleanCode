function createAccount (credit, debit, accountNumber) {
    var accounts = {credit:credit,debit:debit,accountNumber:accountNumber};
    return accounts;
}
function createCreditAccount () {
    var creditAccount = createAccount(Math.random(),Math.random(),Math.random());
    return creditAccount;
}
function createDebitAccount () {
    var debitAccount = createAccount(null,Math.random(),Math.random());
    return debitAccount;
}
function createUnidentifiedAccount () {
    var unidentifiedAccount = createAccount(null,null,Math.random());
    return unidentifiedAccount;
}

function defineTypeOfAccount (account) {
    if (account.credit != null) 
        return 2;
    if (account.debit != null)
        return 1;
    else
        return 0;
}

function compareTheTypeOfTwoAccount (account1, account2) {
    var type1 = defineTypeOfAccount(account1);
    var type2 = defineTypeOfAccount(account2);
    if (type1 == type2)
        return 0;
    if (type1 < type2)
        return 1;
    else 
        return 2;
}
function isAccount1BiggerThanAccount2(account1, account2) {
    var compareType = compareTheTypeOfTwoAccount (account1, account2);
    if (compareType == 0)
        if (account1.accountNumber > account2.accountNumber) 
            return true;
        else 
            return false;
    if (compareType == 1)
        return false;
    else
        return true;
}
function sortAccount(accountList) {
    for(var i = 0; i < accountList.length - 1;i++){
        for(var j = i + 1; j < accountList.length;j++){
            if (!isAccount1BiggerThanAccount2(accountList[i],accountList[j])) {
                [accountList[i],accountList[j]] = [accountList[j],accountList[i]];
            }
        }
    }
}
var Accounts = [];
Accounts[0] = createUnidentifiedAccount();
Accounts[1] = createCreditAccount();
Accounts[2] = createDebitAccount();
Accounts[3] = createDebitAccount();
Accounts[4] = createUnidentifiedAccount();
Accounts[5] = createCreditAccount();
Accounts[6] = createAccount(Math.random(), null, Math.random());
sortAccount(Accounts);

console.log(Accounts);