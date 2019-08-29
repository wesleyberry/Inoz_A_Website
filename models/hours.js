module.exports = (sequelize, DataTypes) => {
    const Hour = sequelize.define("Hour", {
        day: DataTypes. STRING,
        hours: DataTypes.STRING,
        current: DataTypes.BOOLEAN,
        season: DataTypes.STRING
    });

    return Hour;
}