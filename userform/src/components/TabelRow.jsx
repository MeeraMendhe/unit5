
export const Row=({value})=>{
   console.log(value.isMarried);
    return <tr>
        <td>{value.name}</td>
        <td>{value.age}</td>
        <td>{value.address}</td>
        <td>{value.salary}</td>
        <td>{(value.isMarried).toString()}</td>
        </tr>

}