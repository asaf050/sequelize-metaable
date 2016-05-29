var _ = require('lodash');


var Metaable = function(model, sequelize, fields, options) {
    // Load Sequelize
    var Sequelize = sequelize.Sequelize;
    // Set model name
    var metaName = model.name + 'Meta';
    // Set defualts
    var fieldsdefualts = {
        key: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                // don't allow empty strings
            }
        },
        value: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
    };
    // Load custom fields
    fields = _.extend(fieldsdefualts, fields);
    // Create the model
    var modelMetaable = sequelize.define(metaName, fields, options);
    
    // Create the relations
    modelMetaable.belongsTo(model);
    model.hasMany(modelMetaable, {
        as: 'Metas'
    });

    return modelMetaable;
};

module.exports = Metaable;


