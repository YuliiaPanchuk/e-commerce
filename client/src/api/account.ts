import { API_ENDPOINT } from './config';

export async function signUp(username: string, password: string, email: string) {
  const url = API_ENDPOINT + '/user/register';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      email,
    }),
  });

  const data = await response.json();

  return {
    success: data.success,
    text: data.text,
  };
}

export async function signIn(username: string, password: string) {
  const url = API_ENDPOINT + '/user/login';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await response.json();
  return {
    success: data.success,
    text: data.text,
    email: data.email,
  };
}
