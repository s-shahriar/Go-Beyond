export const SpotLoader = async () => {
    const res =  await fetch("https://go-beyond-server.vercel.app/spots");
    const data = await res.json();
    return data;
  };