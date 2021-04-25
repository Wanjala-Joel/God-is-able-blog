'use strict';

// Display time
setInterval(function () {
  const date = new Date();
  document.querySelector('.time').textContent = new Intl.DateTimeFormat(
    navigator.language,
    {
      hour: 'numeric',
      minute: 'numeric',
      month: 'short',
      year: 'numeric',
      weekday: 'short',
      second: 'numeric',
      day: '2-digit',
    }
  ).format(date);
}, 1000);

// Data structure
const viewers = {
  visitors: [],
};

// Initial function
const init = function () {
  document.querySelector('.alert').classList.add('hidden');
};

init();

// DOM elements
const userName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const btnFeedback = document.getElementById('feedback-btn');

btnFeedback.addEventListener('click', function (e) {
  e.preventDefault();

  if (userName.value !== '' && email.value !== '' && message !== '') {
    viewers.visitors.push({
      userName: userName.value,
      userEmail: email.value,
      message: message.value,
    });
    document.querySelector('.alert').classList.add('hidden');
  } else {
    document.querySelector('.alert').classList.remove('hidden');
  }

  userName.value = email.value = message.value = '';
  viewers.visitors.map(function (cur, i) {
    localStorage.setItem('userName', cur.userName);
    localStorage.setItem('userEmail', cur.userEmail);
    localStorage.setItem('message', cur.message);
  });
});
