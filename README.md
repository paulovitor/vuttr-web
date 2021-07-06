# VUTTR (Very Useful Tools to Remember)

The application is a simple repository to manage tools with your respective names, links, descriptions and tags

## Index

- [Requirements](#requirements)
- [How to use](#how-to-use)
    - [Project setup](#project-setup)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Hosted application version](#hosted-application-version)
    - [Run application via Docker](#run-application-via-docker)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Run your unit tests](#run-your-unit-tests)
    - [Lints and fixes files](#lints-and-fixes-files)

## 📦 Requirements

* Nodejs
* NPM or Yarn
* Docker

## 🚀 How to use

### Project setup

To install project dependencies:

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

The application is running on `http://localhost:8080`

### Hosted application version

The application was hosted in heroku server and is running in: `https://boiling-inlet-37421.herokuapp.com/`

### Run application via Docker

To Build application image docker

```
docker-compose build
```

You can run this command to build and start application container:

```
docker-compose up -d
```

Be sure that container has been started [state should be: up (healthy)]
```sh
docker-compose ps
```

To accompain the log
```sh
docker-compose logs -f
```

The application is running on `http://localhost:8080`

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```
