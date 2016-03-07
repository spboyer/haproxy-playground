# haproxy-playground

Blog Post Related to this repo: http://www.tattoocoder.com/legion-of-heroes-haproxy-nginx-angular2-aspnetcore-redis-docker/

* haproxy
    * routes `/api/*` to ASP.NET container
    * `*/*` routes to nginx Angular 2.0 application

* Angular Tour of Heroes 2.0 running in nginx docker container
* ASP.NET Core 1.0 Web API running on Linux (no mono), serving Heroes data
* Redis Server running in docker container using webdis (http interface)

```
 git clone repo
 cd where-ever-you-cloned-it
 export DEFAULT_SSL_CERT="$(cat self-signed.pem)"
 docker-compose up -d
```
Browse to https://`<docker-machine-ip>`/dashboard, default https://192.168.99.100/dashboard

