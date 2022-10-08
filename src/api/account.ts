export async function signUp(username: string, password: string, email: string) {
  const url = 'http://localhost:3001/user/register';
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password,
      email
    }),
  });
  
  const data = await response.json();
  return {
    success: data.success,
    text: data.text
  }
}

