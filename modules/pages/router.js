const express = require("express");
const pageRouter = express.Router();
const menuLinks = require("../navLinks/func");

pageRouter.get("/", async (request, response) => {
  links = await menuLinks.getLinks();
  response.render("index", { title: "Home", nav: links });
});

pageRouter.get("/menu", async (request, response) => {
  links = await menuLinks.getLinks();
  doughnuts = await menuLinks.getMenu();
  response.render("menu", { title: "Menu", nav: links, menu: doughnuts });
});

pageRouter.get("/about", async (request, response) => {
  links = await menuLinks.getLinks();
  response.render("about", { title: "About", nav: links });
});

module.exports = pageRouter;