**/etc/hosts setup**
The code assumes that you control the example.com domain.
To add to the hosts file, run:
echo "127.0.0.1 app.example.com" | sudo tee -a /etc/hosts

**Traefik Auth Setup**
htpasswd -nbB alice password
alice:$2y$05$67ohZ8P.AbWdwiMsVC4IneDGCsuRe/dzgJBBf2IE56IQC6g/nYfAO

htpasswd -nbB bob password
bob:$2y$05$EH9.Khb7hJUMTF5lQFCnDuY62wX3vfnKdAEYj4RsxdI0lM5ZKL06.

Added these values to docker-compose.yml

**Running the stack**
docker compose down -v && docker compose up --build -d
