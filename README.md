sequelize-metaable - Metadata for Sequelize
=============================
Attach meta data to Sequelize models.

## What is it?

Metaable adds the ability to access meta data as if it is a property on your model. Metable is Fluent, just like using an sequelize model attribute you can set or unset metas.

The normal singular/plural naming scheme in Sequelize is used:

- model name: `modelName + Meta`
- table name: `modelName + Metas`


## Installation
Install through npm.

```js
npm install sequelize-metaable --save
```

## How to use

### 1) Import `sequelize-metaable`

```
var Sequelize = require('sequelize');
var Temporal = require('sequelize-temporal');
```

### 2) Add the *metaable* feature to your models

```
var User = Temporal(sequelize.define('User'), sequelize);
```
### 2) Set and Get methods
To Set and Get meta, please use the common Sequelize Relations / Associations methods (Examples coming soon).