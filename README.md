# Line notification for node

## start container
```
docker-compose up -d
docker-compose ps
```

## run node test.js
```
docker exec -it line-notify node test.js
```

## login container
```
docker exec -it line-notify /bin/sh
```

## run line notify
```
docker exec -it line-notify index.js
```

## check logs
```
docker logs line-notify
```



## update docker image
```
docker login
docker-compose build --no-cache
docker-compose push
```



