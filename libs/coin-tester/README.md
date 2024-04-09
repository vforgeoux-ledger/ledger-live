# Coin-tester

## How to build the speculos image

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
