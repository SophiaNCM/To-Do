//função que adiociona tarefa
function addtask(){
    //titulo da tarefa
    var tasktitle = document.querySelector("#task-title").value;
    if(tasktitle){
        //clona template
        const template=document.querySelector('.template');
        const newTask = template.cloneNode(true);

        //adiociona titulo
        newTask.querySelector('.task-title').textContent = tasktitle

        //remover classes desnecessarias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        //adicionar tarefa na lista
        const list = document.querySelector('#task-list');
        list.appendChild(newTask);

        //adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener('click', function(){
            removeTask(this)
        })

        //adicionar evento de completar evento
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
            completeTask(this)
        })

        //limpar texto
        document.querySelector('#task-title').value = '';
    }
}
//função remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}
//função concluir tarefa
function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    addtask();
})