import { DataTypes } from "sequelize"
import { sequelize } from "."


module.exports = function (sequelize: any) {
    return sequelize.define(
        'users',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            nickname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false
        }
    )
}

