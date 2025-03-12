import axios from 'axios';

// const baseUrl = 'https://api.restful-api.dev/objects';

// async function getAllObjects() {
//   try{
//     const response = await axios.get('https://api.restful-api.dev/objects');
//     console.log('All objects', response.data);
//   }catch(error){
//     console.error('Error in Get All objects' , error.message);
//   }

// }

// getAllObjects();

// async function getObjectsById(id) {
//   try{
//     const response = await axios.get(`https://api.restful-api.dev/objects/${id}`);
//     console.log(`Object by ID ${id} :` , response.data);
//   }catch(error){
//     console.error(`Error in Get objects by ID ${id}` , error.message);
//   }

// }

// getObjectsById(10);

// async function createObject(data) {
//   try{
//     const response = await axios.post('https://api.restful-api.dev/objects', data);
//     console.log('POST create object:', response.data);
//   }catch(error){
//     console.error('Error in POST create object:', error.message);
//   }

// }

// createObject({ name: 'Test Object 2', data: { color: 'pink' , capacity : '256GB'} });

// async function updateObjectById(id, data) {
//   try{
//     const response = await axios.put(`https://api.restful-api.dev/objects/${id}`,data);
//     console.log(`PUT updated object: ${id} ` , response.data);
//   }catch(error){
//     console.error('Error in PUT update object:', error.message);
//   }

// }
// updateObjectById('ff808181932badb6019589b8423c3786', {name: 'Apple Iphone 16 pro max'});

// async function partiallyUpdateObject(id, data) {
//   try{
//     const response = await axios.patch(`https://api.restful-api.dev/objects/${id}`,data);
//     console.log(`PATCH partially updated object: ${id} ` , response.data);
//   }catch(error){
//     console.error('Error in PATCH update object:', error.message);
//   }

// }
// partiallyUpdateObject('ff808181932badb6019589c35de5379f', {name: 'Apple Iphone 16 pro max'});

async function deleteObject(id) {
	try {
		const response = await axios.delete(`https://api.restful-api.dev/objects/${id}`);
		console.log(`DELETE  object: ${id} `, response.data);
	} catch (error) {
		console.error('Error in DELETE object:', error.message);
	}
}
deleteObject('ff808181932badb6019589c35de5379f');
