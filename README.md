# HEIG-VD Keycloak Auth token App

## Description
The goal of this app is to refresh the token retrieved from HEIG-VD Keycloak Auth server
and use it in a postman to develop the backend of this repo:
https://github.com/heig-fablab/fablab-manager

## Credits
Template adapted from: \
https://github.com/keycloak/keycloak-quickstarts \
https://github.com/keycloak/keycloak-quickstarts/tree/latest/applications/app-vue

## Installation

To contribute to this project, you need to install a few dependencies that we will explain later.

### Dependencies

| Techno  | Version |
|---------|---------|
| npm     | 6.14.12 |
| Node.js | 14.16.1 |
| Vue.js  | 2.5.11  |


#### Install Node.js
To run this project you need to install Node.js.

Here you can download it: https://nodejs.dev/download

For linux user: https://nodejs.org/en/download/package-manager/

I also recommend you to install node package manager: https://github.com/nvm-sh/nvm \
And then install Node.js with it.

### Configure Vue.js project

1. Copy **.env.dev.example** file and adapt it to your needs:
````
cp .env.example .env
````

2. Install dependencies
```
npm install
```

## Use

Just run:
````
npm run serve
````

Go to http://localhost:8000

Just copy the token showed and use it on Postman or whatever you want to develop Backend.
