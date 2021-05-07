<h1 align="center">Welcome to import-hosts-zbx-api 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1-blue.svg?cacheSeconds=2592000" />
  <a href="https://www.zabbix.com/documentation/5.0/manual/api/reference/host/create" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Importar hosts de um arquivo .csv para o zabbix utilizando a API.

## Config
- O arquivo .csv não precisa de cabeçalho e o separador é o ";".
- As colunas são: host;ip
- No arquivo login.js é preciso informar o usuário e senha do Zabbix (linha 7 e 8).
- O arquivo a ser importado deve ser informado no final do arquivo index.js (Linha 43).


## Install

```sh
$ git clone https://github.com/alisson-moura/import-hosts-zbx-api
$ cd import-hosts-zbx-api
$ npm install
$ node index.js
```

## Author

👤 **alisson-moura**

* Github: [@alisson-moura](https://github.com/alisson-moura)
* LinkedIn: [@www.linkedin.com\/in\/alisson-mo-moura](https://linkedin.com/in/www.linkedin.com\/in\/alisson-mo-moura)

