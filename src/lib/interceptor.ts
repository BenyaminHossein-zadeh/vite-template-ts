import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const BASEURL = 'add-your-end-point i.e http://127.0.0.1:8000';
export const instance = axios.create({
  baseURL: BASEURL,
});

// Request interceptor to add access token to every request

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access'); // Get access token from the local storage

    if (accessToken) {
      // if access token is present, add it to the bearer-token
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },

  (error) => {
    // Error-handling
    toast.error(`${error}`);
    return Promise.reject(error);
  }
);

// Response interceptor to handle 401 and 403 response
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // Check if error response is present and error status is 401 or 403
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      toast.error(`${error.response}`);

      // fetch new access token
      try {
        const refresh_token_url = 'add-your-refresh-token-endpoint';
        const response = await axios.post(refresh_token_url, {
          refresh: localStorage.getItem('refresh'), // Get refresh token from local storage
        });

        const newAccesToken = response.data.access;

        localStorage.setItem('access', newAccesToken); // Update the access token in local storage

        // Re-try the original request
        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${newAccesToken}`;
        return await axios(originalRequest);
      } catch (refreshError) {
        // incase of failed refresh, re-direct to login page
        const navigate = useNavigate(); // If you have React-router-dom
        navigate('/login');

        // or window.location.href = "/login" if you do not use react-router-dom

        return await Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
