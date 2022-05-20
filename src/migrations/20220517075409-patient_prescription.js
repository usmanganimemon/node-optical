'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('patient_prescription', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      patientId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'patients',
            key: 'id'
          }
        },
        allowNull: false
      },
      rightSph: {
        type: Sequelize.DataTypes.INTEGER
      },
      rightCyl: {
        type: Sequelize.DataTypes.INTEGER
      },
      rightAxis: {
        type: Sequelize.DataTypes.INTEGER
      },
      rightAdd: {
        type: Sequelize.DataTypes.INTEGER
      },
      leftSph: {
        type: Sequelize.DataTypes.INTEGER
      },
      leftCyl: {
        type: Sequelize.DataTypes.INTEGER
      },
      leftAxis: {
        type: Sequelize.DataTypes.INTEGER
      },
      leftAdd: {
        type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('patient_prescription')
  }
}
