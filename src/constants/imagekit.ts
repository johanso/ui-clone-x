export const IMAGEKIT_CONFIG = {
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
  authenticationEndpoint: process.env.IMAGEKIT_AUTHENTICATION_ENDPOINT,
} as const;