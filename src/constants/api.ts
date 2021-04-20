const API_URL = process.env.API_URL || '/api';

export const API = {
  auth: {
    login: `${API_URL}/login`,
    register: `${API_URL}/register`,
    logout: `${API_URL}/logout`,
  },
  user: {
    current: `${API_URL}/user/current`,
  },
};
