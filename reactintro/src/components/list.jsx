function ls({name,style}){
    console.log(style);
    return <ul>
         { name.map((e,i)=>(
           <li key={i} style={{listStyleType:style[i]}}>{e}</li>
       ))}
    </ul>
}

export default ls;