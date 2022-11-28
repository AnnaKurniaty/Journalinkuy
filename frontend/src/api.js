import axios from "axios";
const url = 'http://localhost:5000/api/post';

export default class API {
    // to get all the posts from the server
    static async getAllPosts(){
        const res = await axios.get(url);
        return res.data;
    }
    // to get single post by id
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    static async getPostByDate(created){
        const res = await axios.get(`${url}/date/${created}`);
        return res.data;
    }
    // to insert post into database
    static async addPost(post){
        const res = await axios.post(url, post);
        return res.data;
    }
    // to update post into database
    static async updatePost(id, post){
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }
    // to delete a post
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
    // to get all the event from the server
    static async getAllEvents(){
        const res = await axios.get(url);
        return res.data;
    }
    // to get single event by id
    static async getEventByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
}