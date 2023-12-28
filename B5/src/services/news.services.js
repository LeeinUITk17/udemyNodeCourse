const mongoose = require("mongoose");
const newsModel = require("../model/news.model");
const addItem = async (body) => {
  await newsModel.create(body);
};
const getItems = async () => {
  return await newsModel.find({});
};

const getItemById = async (id) => {
  return await newsModel.findById(id).exec();
};

const deleteItem = async (id) => {
  return await newsModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
};

const updateItem = async (id, body) => {
  await newsModel.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(id) },
    { $set: body }
  );
};

module.exports = {
  addItem,
  getItems,
  deleteItem,
  getItemById,
  updateItem,
};
