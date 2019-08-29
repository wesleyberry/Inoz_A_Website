module.exports = (sequelize, DataTypes) => {
    const Special = sequelize.define("Special", {
        day: DataTypes. STRING,
        special: DataTypes.STRING,
        type: DataTypes. STRING
    }, {
        timestamps: false
    });

    return Special;
}