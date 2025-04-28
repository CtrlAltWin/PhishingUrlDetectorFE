
interface User {
  email: string;
  name: string;
}

export const DUMMY_USER = {
  email: "demo@example.com",
  password: "demo1234",
  name: "Demo User"
};

export const login = (email: string, password: string): User | null => {
  if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
    const user = { email: DUMMY_USER.email, name: DUMMY_USER.name };
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};
