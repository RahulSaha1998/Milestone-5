document.getElementById('calculate-btn').addEventListener('click',function(){

    // income Field
    const incomeField = document.getElementById('income-field');
    const incomeCostString = incomeField.value;
    const incomeCost = parseInt(incomeCostString);
    
    incomeField.value = '';
    
    const clothesField = document.getElementById('clothes-field');
    const clothesCostString = clothesField.value;
    const clothesCost = parseInt(clothesCostString);
    
    clothesField.value = '';




    const rentField = document.getElementById('rent-field');
    const rentCostString = rentField.value;
    const rentCost = parseInt(rentCostString);
    
    rentField.value = '';



    const foodField = document.getElementById('food-field');
    const foodCostString = foodField.value;
    const foodCost = parseInt(foodCostString);
    
    foodField.value = '';

    const totalExpense = foodCost + rentCost + clothesCost; 
    

    // step-4
    //showing expense total
    const expenseTotalElement = document.getElementById('total-expense');
    const previousTotalExpenseString = expenseTotalElement.innerText;
    const previousTotalExpense = parseInt(previousTotalExpenseString);

    //step - 5
    const newTotalExpense = previousTotalExpense + totalExpense;
    expenseTotalElement.innerText = newTotalExpense;


    //step - 6
    //showing balance total
    const balanceTotalElement = document.getElementById('total-balance');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousTotalBalance = parseInt(previousTotalBalanceString);

    //step - 7
    const totalBalance = incomeCost - totalExpense;
    balanceTotalElement.innerText = totalBalance;
    
})

//saving part
document.getElementById('saving-btn').addEventListener('click', function(){
    console.log('hi')
})