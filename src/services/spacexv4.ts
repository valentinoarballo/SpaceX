import { type Api4SpaceXResponse } from "../types/api4";

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

    const { docs: rockets }  = (await res.json()) as Api4SpaceXResponse;
  
    // const rockets  = await res.json() 
  
    return rockets
  }
  