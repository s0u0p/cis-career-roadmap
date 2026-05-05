const BASE_URL = "https://api-v2.onetcenter.org";

export async function getOnetOccupation(onetCode: string) {

  const response = await fetch(`${BASE_URL}/online/occupations/${onetCode}`, {
    headers: {
      "X-API-Key": import.meta.env.VITE_ONET_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`O*NET request failed: ${response.status}`);
  }

  return response.json();
}