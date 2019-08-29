module.exports = (sequelize, DataTypes) => {
    const Band = sequelize.define("Band", {
        band: DataTypes.STRING,
        year: DataTypes.INTEGER,
        month: DataTypes.INTEGER,
        day: DataTypes.INTEGER,
        time: DataTypes.STRING
    });

    return Band;
}