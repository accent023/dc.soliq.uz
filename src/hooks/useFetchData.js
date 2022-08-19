import { useState, useEffect } from "react";

export const useFetchData = (endpoint) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("https://dc.soliq.uz/data/" + endpoint)
			.then((resp) => resp.json())
			.then((result) => {
				setData(result);
			})
			.catch(console.error);

		return () => false;
	}, [endpoint]);

	return { data };
};
