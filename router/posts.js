const app = require(`express`).Router();
const {
  models: { Bookmark },
} = require(`../db`);

const home = require(`../views/home`);
const catListing = require(`../views/category`);

module.exports = app;

app.post(`/`, async (req, res, next) => {
  try {
    const bookmark = await Bookmark.create(req.body);
    res.redirect(`/bookmarks`);
  } catch (err) {
    next(err);
  }
});

app.get(`/`, async (req, res, next) => {
  try {
    const bookmarks = await Bookmark.findAll();
    const categoryObj = bookmarks.reduce((a, bookmark) => {
      if (!a.hasOwnProperty(bookmark.category)) {
        a[bookmark.category] = 1;
      } else {
        a[bookmark.category]++;
      }
      return a;
    }, {});

    const categoryObjKeys = Object.keys(categoryObj);

    res.send(home(categoryObjKeys, categoryObj));
  } catch (err) {
    next(err);
  }
});

app.delete(`/:id`, async (req, res, next) => {
  try {
    const bookmark = await Bookmark.findByPk(req.params.id);
    await bookmark.destroy();
    res.redirect(`/bookmarks`);
  } catch (err) {
    next(err);
  }
});

app.get(`/:id`, async (req, res, next) => {
  try {
    const category = req.params.id;

    const bookmarks = await Bookmark.findAll();

    const categoryObj = bookmarks.reduce((a, bookmark) => {
      if (!a.hasOwnProperty(bookmark.category)) {
        a[bookmark.category] = 1;
      } else {
        a[bookmark.category]++;
      }
      return a;
    }, {});

    const allBookmarksInCat = await Bookmark.findAndCountAll({
      where: { category },
    });

    res.send(catListing(category, categoryObj, allBookmarksInCat));
  } catch (err) {
    next(err);
  }
});
