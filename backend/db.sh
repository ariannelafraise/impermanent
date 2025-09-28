sudo docker run --name impermanent-dev \
  -e POSTGRES_USER=impermanent-dev \
  -e POSTGRES_PASSWORD=test123 \
  -e POSTGRES_DB=impermanent-dev \
  -p 5432:5432 \
  -v pgdata:/var/lib/postgresql/data \
  -d postgres:16