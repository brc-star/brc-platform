// Secure Web Crypto-based authentication & session manager
// Compatible with Next.js 16 Edge Middleware and Node.js runtime

export type UserRole = "CUSTOMER" | "INVESTOR" | "DEALER" | "ENTERPRISE_STAFF" | "ADMIN";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization?: string;
  phone?: string;
}

export interface AuthSession {
  user: AuthUser;
  iat: number;
  exp: number;
}

const AUTH_COOKIE_NAME = "brc_auth_token";
const SECRET_KEY = process.env.JWT_SECRET || "brcstar_secure_enterprise_jwt_secret_key_32_bytes_min_2026";

// Base64URL helpers
function base64UrlEncode(str: string): string {
  const base64 = btoa(str);
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(str: string): string {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4) {
    str += "=";
  }
  return atob(str);
}

// Convert string key to CryptoKey
async function getCryptoKey(): Promise<CryptoKey> {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(SECRET_KEY),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

// Sign JWT Token
export async function createAuthToken(user: AuthUser, expiresInDays: number = 7): Promise<string> {
  const header = { alg: "HS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload: AuthSession = {
    user,
    iat: now,
    exp: now + expiresInDays * 24 * 60 * 60,
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const data = `${encodedHeader}.${encodedPayload}`;

  const key = await getCryptoKey();
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(data)
  );

  const signatureBytes = new Uint8Array(signature);
  let binarySignature = "";
  for (let i = 0; i < signatureBytes.byteLength; i++) {
    binarySignature += String.fromCharCode(signatureBytes[i]);
  }
  const encodedSignature = base64UrlEncode(binarySignature);

  return `${data}.${encodedSignature}`;
}

// Verify JWT Token
export async function verifyAuthToken(token: string): Promise<AuthSession | null> {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const [encodedHeader, encodedPayload, encodedSignature] = parts;
    const data = `${encodedHeader}.${encodedPayload}`;

    const key = await getCryptoKey();

    const signatureStr = base64UrlDecode(encodedSignature);
    const signatureBytes = new Uint8Array(signatureStr.length);
    for (let i = 0; i < signatureStr.length; i++) {
      signatureBytes[i] = signatureStr.charCodeAt(i);
    }

    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      signatureBytes,
      new TextEncoder().encode(data)
    );

    if (!isValid) return null;

    const payload: AuthSession = JSON.parse(base64UrlDecode(encodedPayload));
    const now = Math.floor(Date.now() / 1000);

    if (payload.exp && payload.exp < now) {
      return null; // Expired
    }

    return payload;
  } catch (err) {
    return null;
  }
}

export { AUTH_COOKIE_NAME };
