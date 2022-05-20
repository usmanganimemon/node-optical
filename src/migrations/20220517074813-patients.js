'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('patients', {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true
      },
      name: {
        type: Sequelize.DataTypes.STRING
      },
      email: {
        type: Sequelize.DataTypes.STRING
      },
      phoneNumber: {
        type: Sequelize.DataTypes.STRING
      },
      age:{
        type: Sequelize.DataTypes.STRING
      },
      profession: {
        type: Sequelize.DataTypes.STRING
      },
      chiefComplaint: {
        type: Sequelize.DataTypes.STRING
      },
      place: {
        type: Sequelize.DataTypes.STRING
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
    return queryInterface.dropTable('patients')
  }
}
