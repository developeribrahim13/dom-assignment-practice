document.getElementById('donation-btn')
.addEventListener('click',function(){
    const donationerClass = document.getElementById('donation-btn').className;

    const historyerClass = document.getElementById('history-btn').className;

    document.getElementById('history-btn').className = donationerClass;

    document.getElementById('donation-btn').className = historyerClass;

    document.getElementById('donation-part').classList.remove('hidden');

    document.getElementById('history-part').classList.add('hidden');

});

document.getElementById('history-btn')
.addEventListener('click',function(){
    const donationerClass = document.getElementById('donation-btn').className;

    const historyerClass = document.getElementById('history-btn').className;

    document.getElementById('history-btn').className = donationerClass;

    document.getElementById('donation-btn').className = historyerClass;

    document.getElementById('donation-part').classList.add('hidden');

    document.getElementById('history-part').classList.remove('hidden');
});