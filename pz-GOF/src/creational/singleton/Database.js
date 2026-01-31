"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
class Database {
    constructor() { }
    static getInstance() {
        if (!Database.instance)
            Database.instance = new Database();
        return Database.instance;
    }
    query(sql) { console.log(`[Singleton] Запит до БД: ${sql}`); }
}
exports.Database = Database;
