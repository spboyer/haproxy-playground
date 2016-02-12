# haproxy-playground

* haproxy
    * routes `/api/*` to ASP.NET container
    * `*/*` routes to nginx Angular 2.0 application

* Angular Tour of Heroes 2.0 running in nginx docker container
* ASP.NET Core 1.0 Web API running on Linux (no mono), serving Heroes data
* Redis Server running in docker container using webdis (http interface)

```
 git clone repo
 cd where-ever-you-cloned-it
 docker-compose up -d
```
Browse to http://`<docker-machine-ip>`/dashboard, default http://192.168.99.100/dashboard

