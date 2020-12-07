import react, { useState } from 'react';
import { navigate } from '@reach/router'; 
    
const Form = props => {

    const [category, setCategory] = useState("people");
    const [id, setId] = useState(1);

    const search = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
    };
    
    return (
        <div className="d-flex m-3">
            <form onSubmit={ search }>
                <label>Search for:</label>
                <select 
                className="group-control bg-light border-0 rounded mx-3 p-2 pr-5 align-middle"
                onChange={e => setCategory(e.target.value)}
                value={category}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID :</label>
                <input 
                className="group-control bg-light border-0 rounded mx-3 p-2 align-middle" 
                type="number" min="1" 
                onChange={e => setId(e.target.value)}
                value={id}/>
                <input className="btn btn-primary border" type="submit" value="Search" />
            </form>
        </div>
    );
}
    
export default Form;