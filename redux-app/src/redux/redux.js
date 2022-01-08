const ADD_TODO="ADD_TODO";
const TOGGLE_TODO="TOGGLE_TODO";
const DELETE_TODO="DELETE_TODO";

const addTodo=(payload)=>({
    type:ADD_TODO,
    payload:{
        title:payload,
        status:false
    }
})

const toggleTodo=(payload)=>({
    type:TOGGLE_TODO,
    payload
})

const dlt=(payload)=>({
    type:DELETE_TODO,
    payload
})

class Store{
    constructor(reducer,init){
        this.reducer=reducer;
        this.state=init;
    }

    getState(){
        return this.state
    }

    dispatch(action){
       return this.state=this.reducer(this.state,action);
    }
} 

const reducer=(state,{type,payload})=>{
    switch(type){
        case ADD_TODO:{
            return {
                ...state,todo:[...state.todo,payload]
            }
        }
        case TOGGLE_TODO:{
            return {
                ...state,todo:state.todo.map((e)=>
                    e.title===payload? 
                    {...e,status : !e.status}:e
                )
            }
        }
        case DELETE_TODO:{
            return {
                ...state,todo:state.todo.filter((el)=>{
                    if(el.title!==payload){
                        return true;
                    }else{
                        return false;
                    }
                })
            }
        }
        default:
        return state
    }
    
}

const init={
    todo:[]
};

const store=new Store(reducer,init);

console.log(store.getState());
console.log(store.dispatch(addTodo("BUY MILK")));
console.log(store.dispatch(addTodo("BUY BREAD")));
console.log(store.dispatch(toggleTodo("BUY BREAD")));
console.log(store.dispatch(dlt("BUY BREAD")));

