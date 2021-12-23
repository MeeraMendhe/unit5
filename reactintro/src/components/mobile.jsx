import Ls from "./list";

function list({name,title,style}){
    // console.log(name)
   return <div>
       <h1>{title}</h1>
       <Ls style={style} name={name} ></Ls>
   </div>
}


export default list;