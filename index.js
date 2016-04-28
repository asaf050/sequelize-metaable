var _ = require('lodash');


var Metaable = function(model, sequelize, temporalOptions) {

    var Sequelize = sequelize.Sequelize;

    var metaName = model.name + 'Meta';

    var metaAttrs = {
        key: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true, // don't allow empty strings
            }
        },
        value: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
    };
    var modelMetaable = sequelize.define(metaName, metaAttrs);
    modelMetaable.belongsTo(model);
    model.hasMany(modelMetaable);


    return modelMetaable;
};

module.exports = Metaable;