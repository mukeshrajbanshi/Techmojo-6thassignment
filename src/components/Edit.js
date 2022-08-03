import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import array from './array';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Edit() {

	
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
    const [src, setSrc] = useState('')
	const[id,setid] = useState('');


	let history = useNavigate()
	
	var index = array.map(function(e) {
		 return e.id; 
		}).indexOf(id);


	const handelSubmit = (e) =>{
		e.preventDefault(); 
		let a = array[index]
		a.title = title
        a.src = src
		a.description = description

		history('/')
	}

	useEffect(() => {
		setTitle(localStorage.getItem('title'))
		setDescription(localStorage.getItem('description'))
        setSrc(localStorage.getItem('src'))
		setid(localStorage.getItem('id'))
	}, [])
	
return (
	<div>
        <Link className="d-grid gap-2" to='/'>
			<Button style={{"text-decoration" : "none"}} variant="warning" size="lg">Home</Button>
        </Link>
		<Form className="d-grid gap-2" style={{margin:'15rem'}}>

			
			<Form.Group className="mb-3" controlId="title">
				<Form.Control value={title}
							onChange={e => setTitle(e.target.value)}
							type="text" placeholder="Enter Title" />
			</Form.Group>
            <Form.Group className="mb-3" controlId="src">
				<Form.Control value={src}
							onChange={e => setSrc(e.target.value)}
							type="url" placeholder="Enter image url" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="description" >
				<Form.Control value={description}
							onChange={e => setDescription(e.target.value)}
							type="text" placeholder="Enter description" />
			</Form.Group>

			<Button
			onClick={e => handelSubmit(e)}
			variant="primary" type="submit" size="lg">
				Update
			</Button>

	
			
		</Form>
	</div>
)
}

export default Edit
