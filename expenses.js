/* Programmer expenses dom */

// Global variables.

const calculate = document.getElementById('calculate');

calculate.addEventListener('click', function(){
    let incomeInput = parseFloat(document.getElementById('income').value);
    let softwareCost = parseFloat(document.getElementById('software').value);
    let coursesCost = parseFloat(document.getElementById('courses').value);
    let internetCost = parseFloat(document.getElementById('internet').value);

    if(incomeInput <= 0){
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }else if(softwareCost <= 0){
        document.getElementById('software-error').classList.remove('hidden');
        return;
    }else if(coursesCost <= 0){
        document.getElementById('courses-error').classList.remove('hidden');
        return;
    }else if(internetCost <= 0){
        document.getElementById('internet-error').classList.remove('hidden');
        return;
    }

    document.getElementById('income-error').classList.add('hidden');
    document.getElementById('software-error').classList.add('hidden');
    document.getElementById('courses-error').classList.add('hidden');
    document.getElementById('internet-error').classList.add('hidden');
    
    const sumExpenses = softwareCost + coursesCost + internetCost;
    
        if(sumExpenses > incomeInput){
            document.getElementById('logic-error').classList.remove('hidden');
            return;
        }
        document.getElementById('logic-error').classList.add('hidden');

            const lastAmount = incomeInput - sumExpenses;
                    
            const balance = document.getElementById('balance');
                    balance.innerText = lastAmount.toFixed(2);
        
            const showExpenses = document.getElementById('total-expenses');
                showExpenses.innerText = sumExpenses.toFixed(2);
        
            const savings = document.getElementById('savings');
            const savingBalance = (lastAmount * savings) / 100;

            const showSaving = document.getElementById('savings-amount');
            showSaving.innerText = savingBalance.toFixed(2);
        
            const removeHideResult = document.getElementById('results');
            removeHideResult.classList.remove('hidden');
        
            // History content.
        
            const div = document.createElement('div');
            div.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";

            div.innerHTML += `
                <p class="text-xs text-gray-500 font-medium>Date: ${new Date().toLocaleDateString()}</p>
                 <p class="text-lg text-gray-500 font-bold>Income: ${incomeInput.toFixed(2)}</p>
                 <p class="text-xs text-gray-500 font-medium>Balance: ${lastAmount.toFixed(2)}</p>
                <p class="text-xs text-gray-500 font-medium>Expenses: ${sumExpenses.toFixed(2)}</p>
                `
                const historyList = document.getElementById('history-list');
            historyList.insertBefore(div, historyList.firstChild);
});

// Saving Button

const savingBtn = document.getElementById('calculate-savings');

savingBtn.addEventListener('click', function(){
    const savingInput = parseFloat(document.getElementById('savings').value);
    const incomeInput = parseFloat(document.getElementById('income').value);
    const softwareCost = parseFloat(document.getElementById('software').value); 
    const coursesCost = parseFloat(document.getElementById('courses').value);
    const internetCost = parseFloat(document.getElementById('internet').value);

    if(isNaN(savingInput) || savingInput <= 0){
        document.getElementById('savings-error').classList.remove('hidden');
        return;
    }

    document.getElementById('savings-error').classList.add('hidden');

    const sumExpenses = softwareCost + coursesCost + internetCost;
    const lastAmount = incomeInput - sumExpenses;

    const saving = (savingInput * lastAmount) / 100;
    const remainingBalance = lastAmount - saving;

    const showSaving = document.getElementById('savings-amount');
    showSaving.innerText = saving.toFixed(2);

    const showRemainingBalance = document.getElementById('remaining-balance');
    showRemainingBalance.innerText = remainingBalance.toFixed(2);
});

// History Tab

document.getElementById('history-tab').addEventListener('click', function(){
    this.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    this.classList.remove('text-gray-600');

    const assistant = document.getElementById('assistant-tab');
    assistant.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    assistant.classList.add('text-gray-600');

    document.getElementById('expense-form').classList.add('hidden');

    document.getElementById('history-section').classList.remove('hidden');
});

// Assistant Tab

document.getElementById('assistant-tab').addEventListener('click', function(){
    this.classList.remove('text-gray-600');
    this.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    document.getElementById('expense-form').classList.remove('hidden');

    let historyContent = document.getElementById('history-tab');
    historyContent.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    const hideHistory = document.getElementById('history-section');
    hideHistory.classList.add('hidden');
});