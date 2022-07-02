import axios from "axios";

const test = axios.create({
	baseURL: "http://localhost:3001",
})
export default test

