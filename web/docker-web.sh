#nginx / angular container
docker build -t web .
docker run -d --name "web" -p 8080:80  web