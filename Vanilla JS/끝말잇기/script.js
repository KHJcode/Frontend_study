const textBox = document.querySelector('input'),
  submit = document.querySelector('button'),
  title = document.querySelector('h1');
  number = document.querySelector('p');


function init(){
    number.textContent = 0;
    submit.addEventListener("click", () => {
      if( title.textContent[title.textContent.length-1] == textBox.value[0]) {
        title.textContent = textBox.value;
        textBox.value = '';
        number.textContent  = parseInt(number.textContent) + 1;
      } else {
          alert('틀렸습니다. 다시 입력하세요.');
          textBox.value = '';
      }
  });
}
init();
