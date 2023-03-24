"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        { name: "John Doe Fakename 1" },
        { name: "John Doe Fakename 2" },
        { name: "John Doe Fakename 3" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete("Users", {
      name: { [Op.like]: "John Doe Fakename%" },
    });
  },
};
