FROM alpine

WORKDIR /home
COPY --chown=root:root ./app /home/
ENV PORT=8008
ENV TOKEN=adsad

EXPOSE 8008

RUN apk update && \
    apk upgrade && \
    apk add nodejs npm

LABEL MANTEINER="Leandro Rocha"
LABEL V="0.0.1"

ENTRYPOINT ["node", "/home/server.js"]
