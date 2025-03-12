import api from './api';

describe('API Tests', () => {
 let objectId;

 //GET

 test('GET all objects', async () => {
  const data = await api.getAllObjects();
  expect(Array.isArray(data)).toBe(true);
 });

 test('GET /objects/invalid - Should return 404 for invalid ID', async () => {
  try {
      await api.getObjectsByID('invalid');
  } catch (error) {
      expect(error.response.status).toBe(404);
  }
 });

 //POST

 test('POST create object', async () => {
  const newObject = { name: 'Test Object', data: { value: 123 } };
  const data = await api.createObject(newObject);
  objectId = data.id;
  expect(data.name).toBe('Test Object');
});

 test('POST /objects/invalid - Should return 400 for invalid data', async () => {
  try {
      await api.createObject({invalid : 'data'});
  } catch (error) {
      expect(error.response.status).toBe(400);
  }
 });

 //PUT

 test('PUT update object', async () => {
  const updatedObject = { name: 'Updated Object', data: { value: 456 } };
  const data = await api.updateObject(objectId, updatedObject);
  expect(data.name).toBe('Updated Object');
});

 test('PUT /objects/:id - Should return 404 for non-existent ID', async () => {
  try {
      await api.updateObject('invalid-id', { name: 'Test' });
  } catch (error) {
      expect(error.response.status).toBe(404);
  }
 });

 //PATCH 

 test('PATCH /objects/:id - Should partially update an existing object', async () => {
  const partiallyUpdateObject = {name : 'new Name'};
  const data = await api.partiallyUpdateObject(objectId,partiallyUpdateObject);
  expect(data.name).toBe('new Name');
 });

 test('PATCH /objects/:id - Should return 404 for non-existent ID', async () => {
  try {
      await api.partiallyUpdateObject('invalid-id', { name: 'Test' });
  } catch (error) {
      expect(error.response.status).toBe(404);
  }
 });

 //DELETE 

 test('DELETE /objects/:id - Should delete an object', async () => {
  const data = await api.deleteObject(objectId);
  expect(data).toBeDefined();
 });

 test('DELETE/objects/:id - Should return 404 for non-existent ID', async () => {
  try {
      await api.deleteObject('invalid-id', { name: 'Test' });
  } catch (error) {
      expect(error.response.status).toBe(404);
  }
 });

});