import '../Table/Table.css';

const Table = ({ results, sortByName, searchInput }) => {
    return (
        <table className ="table">
            <thead>
                <tr className="col-title">
                <th>Image</th>
                <th>Name <button className='filter' onClick={()=>sortByName("name.first")}><i className="fas fa-sort"></i></button></th>
                <th className="email">Email</th>
                <th> Phone Number</th>
                <th>City <button onClick={()=>sortByName("location.city")} className="city"><i className="fa fa-sort"></i></button></th>
                <th>Province <button onClick={()=>sortByName("location.state")} className="city"><i className="fa fa-sort"></i></button></th>
                </tr>
            </thead>
            <tbody>
            {results.filter(result=> `${result.name.first}${result.name.last}`.toLowerCase().startsWith(searchInput)).map(result=>( 
                <tr key={result.id.value}>
                <td className= "table-style"><img src={result.picture.medium} alt=""/> </td>
                <td className= "table-style">{result.name.first} {result.name.last}</td>
                <td className="email">{result.email}</td>
                <td className="phone">{result.phone}</td>
                <td className="city">{result.location.city}</td> 
                <td className="province">{result.location.state} </td>
                </tr>
              ))}
            </tbody>
        </table>
    );
};
  
export default Table;
  