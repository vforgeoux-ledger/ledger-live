# Coin-tester

## Getting started

### Prerequisites

- [Docker](https://docs.docker.com/engine/install/)

### Build the speculos image

1. Clone speculos repo 
2. git checkout df84117d2ac300cd277d58913a9f56e061b5fb2f
3. docker build -f build.Dockerfile -t speculos-builder:latest .
4 Patch Dockerfile:
```Dockerfile
# before
FROM ghcr.io/ledgerhq/speculos-builder:latest AS builder
# after
FROM speculos-builder:latest AS builder
```

4. docker build -f Dockerfile -t speculos:latest .

### Environment variables
Execute the following command

```bash
cp .env.example .env
```

Generate a new seed using [this tool](https://iancoleman.io/bip39/)
Generate a Github token as [described here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
