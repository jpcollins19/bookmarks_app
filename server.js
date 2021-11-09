const express = require(`express`);
const { db, syncAndSeed } = require(`./db`);
const morgan = require(`morgan`);
const path = require(`path`);

const app = express();
app.use(express.urlencoded({ extened: false }));

app.use(morgan(`dev`));
app.use(`/public`, express.static(path.join(__dirname, `public`)));
app.use(require(`method-override`)(`_method`));

app.use(`/bookmarks`, require(`./router/posts`));

app.get(`/`, (req, res) => res.redirect(`/bookmarks`));

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 2223;
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

init();
