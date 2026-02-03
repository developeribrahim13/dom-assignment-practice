document.getElementById('donation-btn')
.addEventListener('click',function(){
    const donationerClass = document.getElementById('donation-btn').className;

    const historyerClass = document.getElementById('history-btn').className;

    document.getElementById('history-btn').className = donationerClass;

    document.getElementById('donation-btn').className = historyerClass;

});

document.getElementById('history-btn')
.addEventListener('click',function(){
    const donationerClass = document.getElementById('donation-btn').className;

    const historyerClass = document.getElementById('history-btn').className;

    document.getElementById('history-btn').className = donationerClass;

    document.getElementById('donation-btn').className = historyerClass;
});