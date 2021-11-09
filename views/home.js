module.exports = (arr, obj) => {
  return `
    <html>
        <head>
            <title>Bookmarks Workshop</title>
        </head>
        <body>
            <h1>Categories</h1>
            <ul>
                ${arr
                  .map(
                    (category) => `
                    <li>
                        <a href='/bookmarks/${category}'>${category} (${obj[category]})</a>
                    </li>`
                  )
                  .join("")}
            </ul>
            <h4>Add a New Bookmark Below:</h4>
            <div class='bookmark-add-container'>
              <form method='POST'>
                <div>
                  <input name='name' placeholder='Name'/>
                </div>
                <p></p>
                <div>
                  <input URL='URL' placeholder='URL'/>
                </div>
                <p></p>
                <div>
                  <input category='category' placeholder='Category'/>
                </div>
                <p></p>
                <button>Add</button>
              </form>
            </div>
        </body>
    </html>`;
};
