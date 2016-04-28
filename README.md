sequelize-metaable - Metadata for Sequelize
=============================
Attach meta data to Sequelize models.

**Warning:** This package is not production-ready. If you have exprience with Sequelize help will be appreciated.
## What is it?

Metaable adds the ability to access meta data as if it is a property on your model. Metable is Fluent, just like using an Sequelize model attribute you can set or unset metas.

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
var Metaable = require('sequelize-metaable');
```

### 2) Add the *metaable* feature to your models

```
var UserMeta = Metaable(UserModel, sequelize);
```
### 2) Set and Get methods
To Set and Get meta, please use the common Sequelize Relations / Associations methods (Examples coming soon).