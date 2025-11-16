TinyAuth Setup

Resource: https://saisamarthudikeri.medium.com/tinyauth-simplest-authentication-for-your-self-hosted-apps-6c37b11f4853

Ran function:
openssl rand -base64 32 \
  | tr -dc 'a-zA-Z0-9' \
  | head -c 32