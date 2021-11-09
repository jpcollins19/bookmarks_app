module.exports = (category, obj, arr) => {
  return `
     <html>
        <head>
            <title>${category}</title>
            <link rel='stylesheet' href='/public/css.css'/>
        </head>
        <body>
            <h1>${category} (${obj[category]})</h1>
            <a href='/bookmarks/'>Home</a>
            <ul>
                ${arr.rows
                  .map(
                    (bookmark) => `
                    <div class='bookmark-container'>
                    <li class='bookmark-name'>
                        <a href='${bookmark.URL}'>${bookmark.name}</a>
                    </li>
                    <form class='delete-button' method ='POST' action='/bookmarks/${bookmark.id}?_method=DELETE'>
                        <button>Delete</button>
                        </form>
                        </div>`
                  )
                  .join("")} 
            </ul>
        </body>
    </html>`;
};
