const addMessage = async (data) => {
  const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, fetchOptions).catch((err) => {
    console.log(err);
    throw new Error("Error has occured:", err);
  });
  return response;
};

export { addMessage };
