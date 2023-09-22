"use server";

export async function fetchProducts(page:number) {
  const apiUrl = `http://127.0.0.1:8000/api/products/?page=${page}`;
  try {
    const response = await fetch(apiUrl, { next: { revalidate: 3600 } });
    //const response = await fetch(apiUrl, { cache: 'no-store' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}