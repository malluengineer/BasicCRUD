import React, { Fragment } from "react";
import {Button,Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Employees from "./Employees";
import {Link,useNavigate} from "react-router-dom"

function Home (){

    let history = useNavigate();
 
    const handleDelete = (id) => {
        var index = Employees.map((e)=>{
            return (e.id);
        }).indexOf(id); 
        
        Employees.splice(index,1)

        history("/")
    }




    return <Fragment>
       <div style={{margin:"10rem"}}>
       <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                Employees &&  Employees.length > 0 
                ?
                Employees.map((item)=>{
                    return(
                        <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.age}
                            </td>
                            <td>
                            <Link>
                            <Button onClick={()=>alert(item.id)}>EDIT</Button>
                            </Link>   
                            &nbsp;
                            <Button onClick={()=>handleDelete(item.id)}>DELETE</Button> 


                            </td>
                        </tr>
                    )
                   
                }) 
                :
                "No Data Available"
            }
        </tbody>
       </Table>
       <br></br>
       <Link className="d-grid gap-2"  to="/create">
        <Button size="lg">Create</Button>
       </Link>
       </div>
    </Fragment>

}

export default Home