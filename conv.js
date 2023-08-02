let fs = require('fs');
let juice = require('juice');

let source = fs.readFileSync('./htdocs/index_original.html', 'utf-8');
let inlinecss = juice(source, {
  removeStyleTags: false,
  preserveImportant: true,
});

fs.writeFile('./htdocs/index.html', inlinecss, (err) => {
  if (err) throw err;
  console.log('正常に書き込みが完了しました');
});
