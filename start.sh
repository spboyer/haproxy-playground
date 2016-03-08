#!/bin/bash

export DEFAULT_SSL_CERT="$(cat self-signed.pem)"
docker-compose up -d
