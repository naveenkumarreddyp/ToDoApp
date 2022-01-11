completedTasks=[];
pendingTasks=[];
allTasks = [];

async function getapi(api_url){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    for(i=0;i<data.length;i++){
        allTasks.push(data[i]);
        if(data[i]['completed'] === true){
            completedTasks.push(data[i]);
        }else{
            pendingTasks.push(data[i]);
        }
    }
}

let inputTask = document.getElementById('taskStatus')

inputTask.addEventListener('change',()=>{
    let task = inputTask.value;
    if(task === 'Completed Tasks'){
        if (completedTasks.length>0){
            var temp="";
            completedTasks.forEach((element) => {
                temp+="<tr>"
                temp+="<td>"+element.userId+"</td>";
                temp+="<td>"+element.id+"</td>";
                temp+="<td>"+element.title+"</td>";
                temp+="<td>"+element.completed+"</td></tr>";                
            });
            document.getElementById("data").innerHTML=temp;
        }
    } else if (task === 'Pending Tasks'){
        if (pendingTasks.length>0){
            var temp="";
            pendingTasks.forEach((element) => {
                temp+="<tr>"
                temp+="<td>"+element.userId+"</td>";
                temp+="<td>"+element.id+"</td>";
                temp+="<td>"+element.title+"</td>";
                temp+="<td>"+element.completed+"</td></tr>";                
            });
            document.getElementById("data").innerHTML=temp;
        }
    } else {
        if (allTasks.length>0){
            var temp="";
            allTasks.forEach((element) => {
                temp+="<tr>"
                temp+="<td>"+element.userId+"</td>";
                temp+="<td>"+element.id+"</td>";
                temp+="<td>"+element.title+"</td>";
                temp+="<td>"+element.completed+"</td></tr>";                
            });
            document.getElementById("data").innerHTML=temp;
        }
    }
});



const api_url = 'https://jsonplaceholder.typicode.com/todos';
getapi(api_url);