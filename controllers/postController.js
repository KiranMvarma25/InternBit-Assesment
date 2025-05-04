const api = require('../utils/apiClient');

exports.getAllPosts = async(req, resp, next) => {
    try{
        const response = await api.get('/posts');
        
        if(!Array.isArray(response.data))
            throw new Error("Invalid data format from API");
        
        resp.status(201).json(response.data);        
    }
    catch(err){
        next(err);
    }
}

exports.getPostById = async(req,resp,next) => {
    try{
        const {id} = req.params;
        const response = await api.get(`/posts/${id}`);
        if(!response.data || !response.data.id)
            throw new Error("Invalid data format from API");
        resp.status(201).json(response.data); 
    }
    catch(err){
        next(err);
    }
}

exports.createPost =async(req,resp,next) => {
    try{
        const response = await api.post('/posts', req.body);
        resp.status(201).json(response.data); 
    }
    catch(err){
        next(err);
    }
}

exports.updatePost =async(req,resp,next) => {
    try{
        const {id} = req.params;
        const response = await api.put(`/posts/${id}`, req.body);
        resp.status(201).json(response.data); 
    }
    catch(err){
        next(err);
    }
}

exports.deletePost =async(req,resp,next) => {
    try{
        const {id} = req.params;
        await api.delete(`/posts/${id}`);
        resp.status(201).send(); 
    }
    catch(err){
        next(err);
    }
}