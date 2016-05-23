FROM microsoft/dotnet:onbuild

COPY . /app
WORKDIR /app
RUN ["dotnet", "restore"]

ENV ASPNETCORE_SERVER.URLS http://*:5001
EXPOSE 5001/tcp
ENTRYPOINT ["dotnet", "run"]
