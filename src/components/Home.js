import React from 'react'
import { Button, Card ,CardGroup} from 'react-bootstrap'
import array from './array';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

let history = useNavigate()


function setID(id,title,description,src){
	localStorage.setItem('id', id);
	localStorage.setItem('title',  title);
	localStorage.setItem('description',  description);
    localStorage.setItem('src', src);
}


function deleted(id){
	
	var index = array.map(function(e) { return e.id; }).indexOf(id);


	array.splice(index,1)

	
	history('/')
}

return (
	<div style={{margin:'10rem'}}>
        <h1>Create Blogs</h1>
        <div>
            <Link className="d-grid gap-2 m-3" to='/create'>
            <Button variant="primary" size="lg">Create Blogs</Button>
            </Link>
        </div>
        <CardGroup>
        <>
        {array.map((item) => {
        return(
        <div key={item.id}>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {item.src} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {item.description}
            </Card.Text>

            <Link to={`/edit`}>
                <Button onClick={(e) =>
                setID(item.id,item.title,item.description,item.src)} variant="primary m-2">
                Edit</Button>
            </Link>

            <Button onClick={e => deleted(item.id)} variant="danger">Delete</Button>
        </Card.Body>
    </Card>
        </div>
        )})}
        </>
    </CardGroup>
</div>
)
}

export default Home
