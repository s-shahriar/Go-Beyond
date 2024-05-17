export const CountryLoader = async ({params}) => {
    const countryName = params.name;
    const res =  await fetch("https://go-beyond-server.vercel.app/country-spot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ countryName }),
    });
    const data = await res.json();
    return data;
  };