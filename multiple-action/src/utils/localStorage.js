
function loadData(key){
    try{
        let data=localStorage.getItem(key);
        data=JSON.parse(data)
        return data
    }catch(err){
        return undefined
    }
}

function saveData(key,data){
    localStorage.setItem(key,JSON.stringify(data));
}

function deleteTodo(key,data){
   
    if(data.todo.length===0){
     localStorage.setItem(key,JSON.stringify([]))
    }else{
     localStorage.setItem(key,JSON.stringify(data))
    }
}

function tgl(key, data){
    console.log(data);
   let a=[]
   a.push(data);
    localStorage.setItem(key,JSON.stringify(a));
}

export {loadData,saveData,deleteTodo,tgl};