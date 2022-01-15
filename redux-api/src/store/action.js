import {LOGIN_SUCCESS,LOGIN_FAILURE,GET_PROFILE} from "./actionTypes";

export const loginSuccess=(token)=>{
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}

export const loginFailure=(err)=>{
    return {
        type: LOGIN_FAILURE,
        payload: err
    }
}

export const getData=(text,endPoint)=>(dispatch)=>{
    fetch(`https://masai-api-mocker.herokuapp.com/auth/${endPoint}`,{
        method: "POST",
        body: JSON.stringify(text),
        headers: {'Content-Type': 'application/json'}
    }).then(d=>d.json())
    .then(res=>{
        console.log("res :",res)
        dispatch(loginSuccess(res.token))
        alert(`${endPoint} successfully`);
    }).catch(e=>{
        console.log("error :",e);
        dispatch(loginFailure(e));
    })  
}

export const getProfile=(payload)=>{
    return {
        type:GET_PROFILE,
        payload:payload,
    }
}

export const userData=(users)=>(dispatch)=>{
    fetch(`https://api.github.com/search/users?q=${users}&page=1&per_page=4`)
      .then((res) => res.json())
      .then((res) => {
          console.log(res);
        dispatch(getProfile(res));
      });

}





