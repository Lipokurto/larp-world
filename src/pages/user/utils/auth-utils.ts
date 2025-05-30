function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  let result = '';
  const randomValues = new Uint8Array(length);
  crypto.getRandomValues(randomValues);
  for (let i = 0; i < length; i++) {
    result += characters.charAt(randomValues[i] % characters.length);
  }

  return result;
}

async function generateCodeChallenge(codeVerifier: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  const array = Array.from(new Uint8Array(digest));
  const base64 = btoa(String.fromCharCode(...array))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return base64;
}

export async function getAuthUrl(clientId: any, redirectUri: string, scope: string) {
  const codeVerifier = generateRandomString(128);
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: scope,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
  });

  localStorage.setItem('code_verifier', codeVerifier);
  const authUrl = `https://id.vk.com/authorize?${params.toString()}`;

  return authUrl;
}

export async function exchangeCodeForToken(code: string, redirectUri: string, deviceId: any) {
  const codeVerifier = localStorage.getItem('code_verifier');
  if (!codeVerifier) {
    throw new Error('code_verifier не найден');
  }

  try {
    const response = await fetch('https://bobelifor.beget.app/auth/vk/callback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        redirectUri,
        code_verifier: codeVerifier,
        device_id: deviceId || '',
      }),
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      console.error('Ошибка VK:', data);
      throw new Error(`Не удалось получить access_token: ${JSON.stringify(data)}`);
    }

    localStorage.removeItem('code_verifier');
    if (!data.access_token) {
      throw new Error('access_token не найден в ответе сервера');
    }

    return data;
  } catch (error) {
    console.error('Ошибка обмена кода на токен:', error);
    throw error;
  }
}