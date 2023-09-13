import { type Docs, type Api4SpaceXResponse } from "../types/api4";

export const getRockets = async () => {
	const res = await fetch("https://api.spacexdata.com/v4/rockets/query", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: {},
		}),
	});

	const { docs: rockets } = (await res.json()) as Api4SpaceXResponse;

	return rockets
}

export const getRocketBy = async ({ id }: { id: string }) => {

	const res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);

	const rocket = (await res.json()) as Docs;

	return rocket
}
