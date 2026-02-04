// donate part 1

document.getElementById('don-btn1')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donateTk1 = parseFloat(document.getElementById('donate-1st').value);

        if (donateTk1 < 1 || isNaN(donateTk1)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please give a valid amount!",
            });
            document.getElementById('donate-1st').value = '';
            return;
        }

        const ballance = parseFloat(document.getElementById('amount1').innerText);

        const mainBallance = parseFloat(document.getElementById('main-ballance').innerText);

        document.getElementById('amount1')
            .innerText = ballance + donateTk1 + ' ';

        document.getElementById('main-ballance')
            .innerText = mainBallance + donateTk1 + ' ';

        document.getElementById('donate-1st').value = '';

        historyAdd(donateTk1, "Donated for famine-2024 at Feni, Bangladesh");

        const successModal = document.getElementById('success-modal');
        successModal.classList.remove('hidden');

        document.getElementById('close-modal-btn').addEventListener('click', function () {
            successModal.classList.add('hidden');
        });
    });


// 2nd part


document.getElementById('don-btn2')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donateTk2 = parseFloat(document.getElementById('donate-2nd').value);

        if (donateTk2 < 1 || isNaN(donateTk2)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please give a valid amount!",
            });
            document.getElementById('donate-2nd').value = '';
            return;
        }

        const ballance = parseFloat(document.getElementById('amount2').innerText);

        const mainBallance = parseFloat(document.getElementById('main-ballance').innerText);

        document.getElementById('amount2')
            .innerText = ballance + donateTk2 + ' ';

        document.getElementById('main-ballance')
            .innerText = mainBallance + donateTk2 + ' ';

        document.getElementById('donate-2nd').value = '';

        historyAdd(donateTk2, "Donated for Flood Relief in Feni, Bangladesh");

        const successModal = document.getElementById('success-modal');
        successModal.classList.remove('hidden');

        document.getElementById('close-modal-btn').addEventListener('click', function () {
            successModal.classList.add('hidden');
        });
    });


// part 3

document.getElementById('don-btn3')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donateTk3 = parseFloat(document.getElementById('donate-3rd').value);

        if (donateTk3 < 1 || isNaN(donateTk3)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please give a valid amount!",
            });
            document.getElementById('donate-3rd').value = '';
            return;
        }

        const ballance = parseFloat(document.getElementById('amount3').innerText);

        const mainBallance = parseFloat(document.getElementById('main-ballance').innerText);

        document.getElementById('amount3')
            .innerText = ballance + donateTk3 + ' ';

        document.getElementById('main-ballance')
            .innerText = mainBallance + donateTk3 + ' ';

        document.getElementById('donate-3rd').value = '';

        historyAdd(donateTk3, "Donated for Aid for Injured in the Quota Movement. Bamgladesh");

        const successModal = document.getElementById('success-modal');
        successModal.classList.remove('hidden');

        document.getElementById('close-modal-btn').addEventListener('click', function () {
            successModal.classList.add('hidden');
        });
    });