import mongoose from "mongoose";

class DB {
  private DB_URL = 'mongodb://localhost:27017/news_db'

  createConnection() {
    mongoose.createConnection(this.DB_URL)
  }
}

export default DB;