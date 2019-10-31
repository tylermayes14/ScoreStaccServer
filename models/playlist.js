module.exports = (sequelize, DataTypes) => {
    const Playlist = sequelize.define('playlist', {
        owner: {
            type: DataTypes.INTEGER
        },
        music: {
            type: DataTypes.STRING
        }
    })
    return Playlist;
}