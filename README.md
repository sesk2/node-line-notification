# node8

## start container
```
docker-compose up -d
docker-compose ps
```

## run node test.js
```
docker exec -it node8-axios node test.js
```

## login container
```
docker exec -it node8-axios /bin/sh
```

## run node apps
1. put app files in ./app .
2. run app by a command below.
```
docker exec -it node8 main.js
```
** you can change a argument [main.js]. **

## check logs
```
docker logs node8-axios
```



## update docker image
```
docker login
docker-compose build --no-cache
docker-compose push
```



