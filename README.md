##  BL GRID ๐จ
***
### ๊ทธ๋ฆฌ๋ ์์ฑ ๋ฐฉ๋ฒ

#### html
```html
<div id="grid"></div>
```

#### x-javascript
์์ฑ์ ํฉ์๋ฅผ ํตํด ์ธ์คํด์ค๋ฅผ ์์ฑ ํ๋ค.
```x-javascript
// id: String ->   ELEMENT ID
// columns: Array<Object>
// data: Array<Object>
// config: Object
// eventHandler: Object

const grid = new BL.Lib.Grid("grid", columns, data, config, eventHandler);
```

##### > ์ปฌ๋ผ ์ ์
```x-javascript
const columns = [{
  // ์ปฌ๋ผ id
  id: 'seq',
  // ๋ฐ์ดํฐ ๋งตํ key
  field: 'seq',
  // ๊ทธ๋ฆฌ๋ ์ปฌ๋ผ์ ์ถ๋ ฅ๋  ํค๋
  caption: 'SEQ',
  // ์บก์์ ์ถ๋ ฅ๊ฐ์ ๋ณ๊ฒฝํ๊ธฐ ์ํ ํจ์
  captionFormatter: function(caption_value) {
    return `<span>${caption_value} ํฌ๋งท ๋ณ๊ฒฝ</span>`;
  },
  // ์ ํธ์ง ๊ธฐ๋ฅ
  edit: {
    // (boolean) true, false
    show: true, 
    // (String) input, select, radio(๋ฏธ๊ฐ๋ฐ), checkbox(๋ฏธ๊ฐ๋ฐ)
    type: 'select', 
    // (Array<String>) type ์ด select ์ธ ๊ฒฝ์ฐ ํ์ ๊ฐ
    options: ['a', 'b', 'c', 'd'],
  }
  // ์ถ๋ ฅ ๊ฐ์ ๋ณ๊ฒฝํ๊ธฐ ์ํ ํจ์
  foramtter: function(value, row_index, rowDataObj) {
    // ์ ๋ฌ ๋ฐ์ ๊ฐ์ ์ฉ๋์ ๋ง๊ฒ ๋ณํ
    return value + 1;
  },
  // ์ปฌ๋ผ์ ๋์ด๊ฐ์ด ์ง์ 
  // 100, '20%', '*'
  width: 100,
  // ํ์ ์ปฌ๋ผ ๋ฐฐ์ด
  children: [],
  // ์ปฌ๋ผ ์ง์  ํด๋์ค
  className: 'seq_class',
}, ...];
```

##### > ์ต์ ์ ์
```x-javascript
const config = {

  // (String) 'default', 'clean', 'dark' 
  // โ ๋ฏธ๊ฐ๋ฐ ์ํ
  theme: 'default', 
  
  // (String) 'checkbox', 'no', 'both', 'none'
  // Row ํค๋ ํ์ ์ค์ 
  rowHeader: 'no',
  
  // (boolean) true, false
  // ํค๋ ์์ญ์ ์์ ์์๋ฅผ ๊ฐ์ง๊ณ  ์๋ ํค๋ ์ ์ ๊ธฐ,ํผ์น๊ธฐ ๊ธฐ๋ฅ
  headerGroupFold: true, 

  // (String) 'client', 'server', 'none'
  // ํ์ด์ง ๊ธฐ๋ฅ
  // โ server ๋ฏธ๊ฐ๋ฐ ์ํ
  paging: 'client', 

  // paging ๊ธฐ๋ฅ์ด server์ผ๋ ์ฌ์ฉ๋  ์ต์
  // ํ์ฌ paging server ๋ฏธ๊ฐ๋ฐ๋ก ์ฌ์ฉ๋์ง ์์
  server: {
    url: url,
    param: {},
    type: 'GET',
  }, // paging : server ์ผ๋ (Object)

  // (boolean) true, false
  // infiniteScroll์ด false ์ผ ๊ฒฝ์ฐ์๋ data์ ๊ธธ์ด๊ฐ 300 ์ด์์ด๋ผ๋ฉด true ๋ก ๋ณ๊ฒฝ๋จ
  infiniteScroll: false,  

  // (boolean) true, false
  sort: true, 

  // (List<Number>) 
  // ํ์ด์ง ์ฌ์ฉ์ ํ์ด์ง๋น ์ถ๋ ฅ๋  ๋ฐ์ดํฐ ๊ฐ์ ์ ํ ์ต์ ๊ฐ
  viewCount: [10, 20, 30, 50, 100], 

  // function
  // ์ธ์คํด์ค ์์ฑ ํ ์คํํ  ํจ์
  loadCallback: function(instance) {
    // do something...
  },

  // (Number) index
  // ์ด ๊ณ ์  ๊ธฐ๋ฅ
  freeze: 0, 

  // (Number) index
  // header ์์ ๋์ด ์ง์  ๊ฐ
  // default 33px
  columnHeaderHeight: 50,
};
```
##### > Event Handler ์ ์
```x-javascript
const eventHandler = {
  // ํ ํด๋ฆญ ์ด๋ฒคํธ
  rowClick: function (selectData, dataArray, instance) {
    // do something...
  },
  // ํ ๋๋ธํด๋ฆญ ์ด๋ฒคํธ
  rowDblClick: function (selectData, dataArray, instance) {
    // do something...
  },
};
```
