import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
    const [src, setSrc] = useState('');

	let history = useNavigate();

	const handelSubmit = (e) =>{
		e.preventDefault(); 

		const ids = uuid() // Creating unique id
		let uni = ids.slice(0,8) // Slicing unique id

		let a = title, b=description, c = src
		array.push({id:uni,title:a,description:b,src:c})


	history('/')
		
	}

return (
	<div >
        <Link className="d-grid gap-2" to='/'>
        <Button variant="info" size="lg" style={{"text-decoration" : "None"}}>
            Home
        </Button>
        </Link>

        <Form className="d-grid gap-2" style={{margin:'15rem'}}>


        <Form.Group className="mb-3" controlId="title">
            <Form.Control onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Title" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="src" >
            <Form.Control onChange={e => setSrc(e.target.value)}
                type="url"
                placeholder="Enter Image Url" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
            <Form.Control onChange={e => setDescription(e.target.value)}
                type="text"
                placeholder="Enter Description" required/>
        </Form.Group>

        <Button
        onClick={e => handelSubmit(e)}
            variant="primary" type="submit">
            Submit
        </Button>

        </Form>
    </div>
)
}

export default Create
