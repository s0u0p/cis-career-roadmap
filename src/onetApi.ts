/// <reference types="vite/client" />

const BASE_URL = "https://api-v2.onetcenter.org";

function getHeaders() {
  return { "X-API-Key": import.meta.env.VITE_ONET_API_KEY };
}

export async function getOnetOccupation(onetCode: string) {
  const headers = getHeaders();

  const [occupationRes, wagesRes] = await Promise.all([
    fetch(`${BASE_URL}/online/occupations/${onetCode}`, { headers }),
    fetch(`${BASE_URL}/online/occupations/${onetCode}/summary/wages`, { headers }),
  ]);

  if (!occupationRes.ok) {
    throw new Error(`O*NET occupation request failed: ${occupationRes.status}`);
  }

  const occupation = await occupationRes.json();

  let medianSalary: string | undefined;
  if (wagesRes.ok) {
    const wages = await wagesRes.json();
    const annual = wages?.median?.annual_median ?? wages?.wage?.annual_median_wage;
    if (annual) {
      medianSalary = `$${Number(annual).toLocaleString("en-US")}`;
    }
  }

  return {
    ...occupation,
    ...(medianSalary && { medianSalary }),
  };
}
