const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Get personal info when type in correct email
document.getElementById("get-info-btn").onclick = function () { getInfo() };
function getInfo() {
    let email = document.getElementById("get-info-email").value;
    if (!email) {
        alert('Please type in your email')
    } else {
        if (email.match(emailRegex)) {
            document.getElementById("personal-base-info").classList.remove('hide');
            document.getElementById("personal-relate-info").classList.remove('hide');
            document.getElementById("get-info-form").classList.add('hide');
        } else {
            alert('Email is incorrect');
        }
    }
}

// show more or less content

let personalInfoContains = document.querySelectorAll('.more-info-contain');

personalInfoContains.forEach(personalInfoContain => {
    // console.log(personalInfoContain);
    // personalInfoContain.onclick(
    // function (e) {
    //     let target = e.querySelector('.view-more-personal-info-btn');
    //     target.classList.remove('hide');
    // }
    // )
});

function showMoreButton(e) {
    if (e.querySelector('.more-info-content').classList.contains('hide')) {
        let target = e.querySelector('.view-more-personal-info-btn');
        target.classList.remove('hide');
    }
}

function hideMoreButton(e) {
    let target = e.querySelector('.view-more-personal-info-btn');
    target.classList.add('hide');
}

function showLessButton(e) {
    let target = e.querySelector('.view-less-personal-info-btn');
    target.classList.remove('hide');
}

function hideLessButton(e) {
    let target = e.querySelector('.view-less-personal-info-btn');
    target.classList.add('hide');
}

function showMore(e) {
    let targetParent = e.closest('.more-info-contain');
    let target = targetParent.querySelector('.more-info-content');
    target.classList.remove('hide');
    hideMoreButton(targetParent);
    showLessButton(targetParent);
}

function showLess(e) {
    let targetParent = e.closest('.more-info-contain');
    let target = targetParent.querySelector('.more-info-content');
    target.classList.add('hide');
    hideLessButton(targetParent);
}