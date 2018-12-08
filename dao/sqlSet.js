const createTable = 'CREATE TABLE wks_place (id varchar(10), name varchar(10), time varchar(20));';
const dropTable = 'DROP TABLE wks_place';
const insertPlace = 'INSERT INTO wks_place (id, name) VALUES (001, Shenzhen)';
module.exports = {
    createTable,
    dropTable,
    insertPlace
}