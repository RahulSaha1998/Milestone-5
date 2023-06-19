document.getElementById('calculate').addEventListener('click', function(){

    

    let total = getInput('total');
    let food = getInput('eFood');
    let rent = getInput('eRent');
    let cloths = getInput('eC');

    if(isNaN(total) || isNaN(food) || isNaN(rent) || isNaN(cloths)){
        alert('Please fill up all fields')
        return;
    }

    if(total<1 || food<1 || rent<1 || cloths<0 ){
        alert('Please provide a valid number')
        return;
    }
    let totalExpenses = food+rent+cloths;
    let balance = total- totalExpenses;
    
    if(totalExpenses>total){
        alert('Exceeding total income ')
        return;
    }
    setText('tE', totalExpenses);
    setText('balance', balance);

})
document.getElementById('save').addEventListener('click', function(){

    let total = getInput('total');
    let food = getInput('eFood');
    let rent = getInput('eRent');
    let cloths = getInput('eC');
    let totalExpenses = food+rent+cloths;
    let balance = total- totalExpenses;

    let percentage = getInput('percentage');


    if(isNaN(percentage)){
        return;
    }
    if(percentage>100){
        alert('Please provide a valid number')
        return;

    }
   
    let pc= percentage /100;
    
    let sa= total* pc;
    setText('sA', sa);

    
    let ra = balance - sa;
    if(balance<sa){
        alert('Exceeding total income ')
        return;

    }

    setText('ra', ra);

    
    

    
})