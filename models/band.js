module.exports = (sequelize, DataTypes) => {
    const Band = sequelize.define("Band", {
        band: DataTypes.STRING,
        year: DataTypes.INTEGER,
        month: DataTypes.INTEGER,
        day: DataTypes.INTEGER,
        start: DataTypes.STRING,
        end: DataTypes.STRING
    }, {
        timestamps: false
    });

    return Band;
}