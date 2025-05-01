import axios from "axios";

export const getData = async () => {
	try {
		const response = await axios.get("/projects-data.json");
		// setData(response.data);
		// setLoading(false);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
