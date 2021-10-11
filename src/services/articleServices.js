import axiosWithAuth from "../utils/axiosWithAuth";
//import axios from "axios";

const articleService = ()=> {
    let articles = []
    axiosWithAuth().get('/articles')
    .then(res => {
        console.log(res.data)
        articles.push(res.data)})
    .catch(err => console.log(err))

    return articles;
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.