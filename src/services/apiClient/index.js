import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});



// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Modify the config before the request is sent
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    return Promise.reject(error);
  }
);

export const getData = async (endPoint) => {
  try {
    const response = await apiClient.get(endPoint);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const postData = async (endPoint, data) => {
  try {
    const response = await apiClient.post(endPoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const putData = async (endPoint, data) => {
  try {
    const response = await apiClient.put(endPoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const deleteData = async (endPoint) => {
  try {
    const response = await apiClient.delete(endPoint);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
