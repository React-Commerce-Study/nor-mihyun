const URL = "https://openmarket.weniv.co.kr";

export const getProductList = async () => {
  try {
    const response = await fetch(`${URL}/products`);

    if (!response.ok) {
      throw new Error("네트워크에 문제가 발생했습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("데이터를 가져올 수 없습니다:", error.message);
  }
};
