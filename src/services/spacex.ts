import { type Doc ,type APISpaceXResponse } from "../types/api";
import { type Api4SpaceXResponse } from "../types/api4";


export const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });

  const { docs: launches }  = (await res.json()) as APISpaceXResponse;

  return launches
}

export const getLaunchBy = async ({id}: {id: string}) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

  const launch  = (await res.json()) as Doc;

  return launch
}

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

  const rockets  = (await res.json()) as Api4SpaceXResponse; 

  return rockets
}

export const getRockets2 = async () => {
  const res = await fetch("https://api.spacexdata.com/v4/rockets/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
    }),
  });

  const rockets2  = await res.json() 

  return rockets2
}

