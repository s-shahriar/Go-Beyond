const singleLoader = async ({ params }) => {
    const res =  await fetch(`https://go-beyond-server.vercel.app/spots/${params.Id}`);
    const data = await res.json();
    return data
};



export default singleLoader
