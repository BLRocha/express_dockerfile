<h1 align="center">Dockerfile</h1>

#### Construindo a imagem do Dockerfile expressjs

```sh
docker build -t expressjs:0.1 .

## Test
docker run -it --rm --name texpress -p 8080:8008 -d expressjs:0.1
```


## Tags Disponíveis

- FROM 
    - Informa a imagem que será utilizada.
```yml
FROM alpine:3.12
```
- ADD
    - Adiciona novos arquivos como tar, pastas e arquivos remotos ao filesystem do container.
```yml
ADD ./src/files ./dst/files
## ADD contem parâmetro opcionais `--chown=user:group`
```
- RUN
    - Execulta comando em novas camadas da imagem e faz o commita.
    `este comando é executado apenas na criação da imagem`
```yml
RUN apk update && \
    apk upgrade
```
- COPY
    - Adiciona arquivos e pastas ao filesystem do container.
```yml
COPY ./src/files ./dst/files
## COPY contem parâmetros opcionais `--chown=user:group e --from=stage`
```
- CMD
    - Cmd tem um comportamento comparável ao RUN entretanto ele só é executado quando o container é iniciado.
```yml
CMD ["ls", "-la"]
```
- ENV
    - ENV define as variáveis de ambiente da imagem.
```yml
ENV PORT=8000
ENV ENV_XPTO="NÃO SEI O QUE POR..."
```
- ENTRYPOINT
    - ENTRYPOINT permite o container rodar um executável e quando este executável parar o container será finalizado.
```yml
    ENTRYPOINT ["exec", "param1", "param2"]
```
- EXPOSE
    - EXPOSE informa qual porta o container está ouvindo.
```yml
EXPOSE 8080/tcp
EXPOSE 8081/udp
```
- USER
    - USER determina o usuario da imagem (default é root).
```yml
USER Adm
```
- VOLUME
    - VOLUME ermite um ponto de montagem no container.
```yml
VOLUME /tmp
```
- WORKDIR
    - WORKDIR altera o diretório raiz ´/´ por um determinado pelo usuário.
```yml
WORKDIR /home/TMP
```
- MAINTAINER `deprecated*`
    - MAINTAINER definia o mantenedor da imagem, agora especificado com `LABEL`. 
```yml
MAINTAINER "JÃO XPTTPTO" # sim é jão mesmo
```
- LABEL
    - LABEL Adiciona meta dados ao container.
```yml
LABEL MAINTAINER="JÃO XPTTPTO"
LABEL MTAGSQQ="FULL INFI AT CONTAINER"
```

### Ao utilizar ENTRYPOINT e CMD cmd execultara apenas paramentros referente ao comando passado no entrypoint
EX:
```yml
ENTRYPOINT ["gpp", "main.c", "-o", "main"]
CMD ["-std=c++17"]
```
