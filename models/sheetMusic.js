module.exports = (sequelize, DataTypes) => {
    const SheetMusic = sequelize.define('sheet music', {
        skillLevel: {
        type: DataTypes.STRING,
        allowNull: false
        }
    })
    return SheetMusic;
}