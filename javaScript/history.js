function historyAdd(amount, title) {
    const now = new Date();
    
    const historyItem = document.createElement('div');
    historyItem.className = "p-8 border border-gray-100 rounded-2xl shadow-sm mb-4";

    historyItem.innerHTML = `
        <h3 class="text-xl font-bold text-black1 mb-3">${amount} Taka is ${title}</h3>
        <p class="text-gray-500 p-4 rounded-lg text-sm">Date : ${now.toString()}</p>
    `;

    const historyContainer = document.getElementById('history-part');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}