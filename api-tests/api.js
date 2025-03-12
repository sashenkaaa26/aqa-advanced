import axios from 'axios';

class RestfulAPI{
  constructor(baseURL){
    this.client = axios.create({baseURL});
  }

  async getAllObjects() {
    try {
        const response = await this.client.get('/objects');
        return response.data;
    } catch (error) {
        console.error('Error getting all objects:', error.message);
    }
  }

  async getObjectsByID(id) {
    try {
        const response = await this.client.get(`/objects/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error getting object by ID:', error.message);
    }
  }

  async createObject(data){
    try{
      const response = await this.client.post('/objects', data);
      return response.data;
    }catch(error){
      console.error('Error creating object:', error.message);
    }
  }

  async updateObject(id, data) {
    try {
        const response = await this.client.put(`/objects/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating object:', error.message);
    }
 }

 async partiallyUpdateObject(id, data) {
  try {
      const response = await this.client.patch(`/objects/${id}`, data);
      return response.data;
  } catch (error) {
      console.error('Error partially updating object:', error.message);
  }
 }

 async deleteObject(id) {
  try {
      const response = await this.client.delete(`/objects/${id}`);
      return response.data;
  } catch (error) {
      console.error('Error deleting object:', error.message);
  }
 }
}

export default new RestfulAPI('https://api.restful-api.dev');
