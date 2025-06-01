let todoList=['buy milk','first task']
displayItems();
function addTodo(){
  let inputElement=document.querySelector('#todo-input');
  let todoItem= inputElement.value;

 todoList.push(todoItem)
inputElement.value=''

displayItems();
}

function displayItems(){
  let containerElement=document.querySelector('.todo-container');

  let newHtml=''; 

   for(let i=0; i<todoList.length; i++)
  {

    newHtml+=`
    <div>
    <span>${todoList[i]}</span>
    <button>Delete</button>
    </div>
        `;

}
containerElement.innerHTML=newHtml;

}
