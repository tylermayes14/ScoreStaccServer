module.exports = (sequelize, DataTypes) => {
    const SheetMusic = sequelize.define('sheet music', {
        skillLevel: {
        type: DataTypes.STRING,
        },
        scoreName: {
        type: DataTypes.STRING,
        }
    })
    return SheetMusic;
}

