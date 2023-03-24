"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("users", "full_name", "name");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("users", "name", "full_name");
  },
};
