import { CounterResponse } from "@/interfaces";

export const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then( res => res.json() );

  return data;
};
  
