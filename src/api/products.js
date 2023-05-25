const URL = "https://openmarket.weniv.co.kr";

export const getProductList = async () => {
  try {
    const response = await fetch(`${URL}/products`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
