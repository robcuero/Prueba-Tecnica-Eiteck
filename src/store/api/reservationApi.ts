import axios from "axios";

const test = axios.create({
	baseURL: "http://localhost:3001",
	// baseURL: "https://my-json-server.typicode.com/robcuero/Prueba-Tecnica-Eiteck",
})
export default test

