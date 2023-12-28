const {
  addItem,
  getItems,
  deleteItem,
  getItemById,
  updateItem,
} = require("../../services/news.services");
const { body, validationResult } = require("express-validator");

var express = require("express");
var router = express.Router();

class NewsController {
  getAll = async (req, res, next) => {
    const data = await getItems();
    res.render("admin/news", { data });
  };

  getForm = async (req, res, next) => {
    let { id } = req.params;
    if (id == "") {
      res.render("admin/news/form");
    } else {
      let data = await getItemById(id);
      res.render("admin/news/form", { data });
    }
  };

  addOrUpdateItem = async (req, res) => {
    const { id } = req.body;
    let errors = validationResult(req);
    // console.log(errors);
    let listError = errors.errors;
    if (listError.length > 0) {
      let messages = [];
      listError.map((error) => messages.push(error.msg));
      req.flash("danger", messages, false);
      return id
        ? res.redirect("/admin/news/form/" + id)
        : res.redirect("/admin/news/form/");
    }
    if (id) {
      await updateItem(id, req.body);
      req.flash("success", "Update item thành công", false);
    } else {
      await addItem(req.body);
      req.flash("success", "Add item thành công", false);
    }
    res.redirect("/admin/news");
  };

  deleteItem = async (req, res, next) => {
    let { id } = req.params;
    await deleteItem(id);
    req.flash("success", "Delete item thành công", false);
    res.redirect("/admin/news");
  };
}

module.exports = new NewsController();
