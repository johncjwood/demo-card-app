TinyAuth Setup

Resource: https://saisamarthudikeri.medium.com/tinyauth-simplest-authentication-for-your-self-hosted-apps-6c37b11f4853

Ran function:
openssl rand -base64 32 \
  | tr -dc 'a-zA-Z0-9' \
  | head -c 32

I got the value:
JRRLGS95HKKHXx1B7yGbHDHJuTBL7Tq4

Ran another function:
docker run --rm -i -t \
  ghcr.io/steveiliop56/tinyauth:v4 \
  user create \
  --username alice \
  --password 'Super$ecret123' \
  --docker
Result:
user=alice:$$2a$$10$$RLpC2XB7GH6yL023az1.WenxrcNqtFKQdrtJ.sUB5KFsDUNXT2.se

Ran another function:
docker run --rm -i -t \
  ghcr.io/steveiliop56/tinyauth:v4 \
  user create \
  --username bob \
  --password 'Super$ecret1234' \
  --docker
Result:
user=bob:$$2a$$10$$NIVsVGYSI1UBu.lk2lVWIetQNfxnYSeI4zQyPjpMzhwTjqjGPgb2q

Added these values to docker-compose.yml