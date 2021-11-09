const Sequelize = require(`sequelize`);
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost/bookmark_db`
);
const { STRING } = Sequelize;

const Bookmark = db.define(`bookmarks`, {
  name: {
    type: STRING,
  },
  URL: {
    type: STRING,
  },
  category: {
    type: STRING,
  },
});

const syncAndSeed = async () => {
  await db.sync({ force: true });

  data.map((bookmark) => {
    return Bookmark.create({
      name: bookmark.name,
      URL: bookmark.URL,
      category: bookmark.category,
    });
  });
};

const data = [
  {
    name: "LinkedIn",
    URL: "http://www.linkedin.com",
    category: "jobs",
  },
  {
    name: "Indeed",
    URL: "http://www.indeed.com",
    category: "jobs",
  },
  {
    name: "Amazon",
    URL: "http://www.amazon.com",
    category: "shopping",
  },
  {
    name: "W3C Shools - Javascript",
    URL: "https://www.w3schools.com/jsref/default.asp",
    category: "coding",
  },
  {
    name: "Target",
    URL: "http://www.shopping.com",
    category: "shopping",
  },
  {
    name: "The Weeknd",
    URL: "https://www.theweeknd.com/",
    category: "music",
  },
  {
    name: "Stack Overflow",
    URL: "https://stackoverflow.com/",
    category: "coding",
  },
];

module.exports = {
  db,
  syncAndSeed,
  models: { Bookmark },
};
