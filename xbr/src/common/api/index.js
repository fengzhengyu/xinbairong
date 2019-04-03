/*
  api 文件
  返回的是promise对象，就会有then方法
*/ 
import axios from 'axios';

axios.defaults.baseURL= 'http://admin.xinbairong.cn/Home/';


// 新闻列表
export  let getNewsList = (data) => {
  return axios.get('article/artlist',data);
}
// 新闻列表
export  let getNewsDetail = (data) => {
  return axios.get('article/artdetail',data);
}

