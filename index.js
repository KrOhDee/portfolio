const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
  project.addEventListener('mouseover', function () {
    project.classList.remove('border-info');
    project.classList.add('border-danger');
  });

  project.addEventListener('mouseout', function () {
    project.classList.remove('border-danger');
    project.classList.add('border-info');
  });
});

const button = document.querySelector('.form-check-input');
const theme = document.querySelector('.theme');
const card = document.querySelector('.c-switch');
const desc = document.querySelectorAll('.c-switch2');

let toggle = false;

button.addEventListener('click', function () {
  toggle = !toggle;
  desc.forEach((des) => {
    if (toggle) {
      theme.href = './bootstrap.min.css';
      des.classList.remove('border-danger');
      des.classList.add('border-warning');
    } else {
      theme.href = './bootstrap.journalmin.css';
      des.classList.remove('border-warning');
      des.classList.add('border-danger');
    }
  });

  if (toggle) {
    theme.href = './bootstrap.min.css';
    card.classList.remove('bg-primary');
    card.classList.add('bg-info');
  } else {
    theme.href = './bootstrap.journalmin.css';
    card.classList.remove('bg-info');
    card.classList.add('bg-primary');
  }
});
