const inp = document.querySelector('#userInput')
const btn = document.querySelector('#submit-button')
const list = document.querySelector('#todo-list')

btn.addEventListener('click', function(evt){
  const li = document.createElement('li')
  li.textContent = inp.value
  document.querySelector('ul').appendChild(li)
  inp.value = ''
})