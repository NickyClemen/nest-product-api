## Installation and running app locally

```bash
$ yarn install
# development
$ yarn start

# watch mode
$ yarn start:dev
```

## Running Docker

```bash
$ docker build . -t nest-products && docker run --name nest-products -p 3000:3000 --rm nest-products
```

## Swagger URL

<http://localhost:300/api>

## Test

```bash
# unit tests
$ yarn test
```
