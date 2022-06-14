import './src/style.css';
import Grid from './src/grid';
import Commons from './src/commons';

const Lib = {
  Grid: Grid,
  //Compare: Compare,
};

export {
  Lib,
  Commons,
}


/*
const BL = {
  Lib: Lib,
  //Commons: Commons,
};

// grid
window.addEventListener('DOMContentLoaded', () => {
  console.log(BL)
  const columns = [{
      id: 'a',
      field: 'a',
      caption: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      width: 50,
      align: 'center',
      formatter: function (value, rowIdx, obj) {
        return 'formatter >>> ' + value;
      },
      className: 'abs',
    },
    {
      id: 'b',
      field: 'b',
      caption: 'b',
      formatter: null,
      className: 'b',
      width: 100,
      children: [{
          id: 'bb1',
          field: 'bb1',
          caption: 'bb1',
          children: [{
            id: 'bbb1',
            field: 'bbb1',
            caption: 'bbb1',
            align: 'right',
          }, {
            id: 'bbb2',
            field: 'bbb2',
            caption: 'bbb2'
          }, {
            id: 'bbb3',
            field: 'bbb3',
            caption: 'bbb3'
          }]
        },
        {
          id: 'bb2',
          field: 'bb2',
          caption: 'bb2',
          children: [{
            id: 'bbb4',
            field: 'bbb4',
            caption: 'bbb4'
          }, {
            id: 'bbb5',
            field: 'bbb5',
            caption: 'bbb5'
          }, {
            id: 'bbb6',
            field: 'bbb6',
            caption: 'bbb6'
          }]
        }
      ]
    },
    {
      id: 'c',
      field: 'c',
      caption: 'c',
      formatter: null,
      className: 'c',
      width: 100,
      children: [{
        id: 'cc1',
        field: 'cc1',
        caption: 'cc1',
      }, {
        id: 'cc2',
        field: 'cc2',
        caption: 'cc2',
        children: [{
          id: 'ccc1',
          field: 'ccc1',
          caption: 'ccc1',
        }]
      }]
    },
    {
      id: 'd',
      field: 'd',
      caption: 'd',
      // captionFormatter 지정시 sorting false 처리
      captionFormatter: function (caption) {
        return `<div>${caption}<button type="button">삭제</button></div>`;
      },
    }
  ];

  let data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      a: `a > ${i}`,
      bbb1: `${i}`,
      bbb2: `${i}`,
      bbb3: `${i}`,
      bbb4: `bbb4 > ${i}`,
      bbb5: `bbb5 > ${i}`,
      bbb6: `bbb6 > ${i}`,
      bb2: `bb2 > ${i}`,
      cc1: `cc1 > ${i}`,
      ccc1: `ccc1 > ${i}`,
      d: `d > ${i}`,
    })
  }

  window.changeData = [];
  for (let j = 105; j > 0; j--) {
    changeData.push({
      a: `a > ${j}`,
      bbb1: `bbb1 > ${j}`,
      bbb2: `bbb2 > ${j}`,
      bbb3: `bbb3 > ${j}`,
      bbb4: `bbb4 > ${j}`,
      bbb5: `bbb5 > ${j}`,
      bbb6: `bbb6 > ${j}`,
      bb2: `bb2 > ${j}`,
      cc1: `cc1 > ${j}`,
      ccc1: `ccc1 > ${j}`,
      d: `d > ${j}`,
    })
  }

  const config = {
    theme: 'default', // (String) 'default', 'clean', 'dark'
    rowHeader: 'no', // (String) 'checkbox', 'no', 'both', 'none',
    headerGroupFold: true, //(boolean) true, false
    paging: 'client', //(String) 'client', 'server', 'none'
    infiniteScroll: false, // (boolean) true, false ||| infiniteScroll이 false 일 경우에도 data의 길이가 300 이상이라면 true 로 변경됨
    sort: true, // (boolean) true, false
    viewCount: [10, 20, 30, 50, 100], // (List) Number..
    server: {
      url: 'url',
      param: {},
      type: 'GET',
    }, // paging : server 일때 (Object)
    loadCallback: loadCallback,
    freeze: 0, // (number) index,
    // column header row height 지정 값
    columnHeaderHeight: 50,
  };

  const eventHandler = {
    rowClick: function (selectData, dataArray, instance) {
      document.getElementById('test').innerHTML = JSON.stringify(selectData);
    },
    rowDblClick: function (selectData, dataArray, instance) {
      //alert('b')
    },
  };

  function loadCallback() {
    // console.log('Loaded ', arguments)
  }

  window.grid1 = new BL.Lib.Grid('grid1_contents', columns, data, config, eventHandler);
  // window.grid2 = new BL.Lib.Grid('grid2_contents', columns, data, config, eventHandler);
  // window.grid3 = new BL.Lib.Grid('grid3_contents', columns, data, config, eventHandler);
  // window.grid4 = new BL.Lib.Grid('grid4_contents', columns, data, config, eventHandler);

  // document.querySelector('#refresh').addEventListener('click', () => {
  //   grid.refresh();
  // });

  // document.querySelector('#changeData').addEventListener('click', () => {
  //   grid.changeData(changeData);
  // });

  document.querySelector('#downloadExcel').addEventListener('click', () => {
    grid1.downloadExcel('title');
  });

  document.querySelector('#changeColums').addEventListener('click', () => {
    const cols = Commons.Functions.cloneDeep(columns);
    cols.push({
      id: 'test',
      field: 'test',
      caption: 'test',
      edit: {
        show: true, // (boolean) true, false
        type: 'select', // (String) input, select, radio(미개발), checkbox(미개발)
        options: ['a', 'b', 'c', 'd'], // (Array<String>) type 이 select 인 경우 필수 값
      }
    })
    const newData = data.map((d, i) => {
      d['test'] = `test${i}`;
      return d;
    })
    grid1.changeColumns(cols, newData);
  });

  document.querySelectorAll('.tab-btns').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btns').forEach(b => {
        b.classList.remove('on');
      })
      btn.classList.add('on');
      document.querySelectorAll('.tab-contents').forEach(content => {
        if (content.id === btn.textContent) {
          content.classList.add('on')
        } else {
          content.classList.remove('on')
        }
      })
    });
  })

});

*/
/*
// compare
window.addEventListener('DOMContentLoaded', () => {
  const columns = [{
      id: 'a',
      field: 'a',
      caption: 'a',
      align: 'left',
      className: 'abs',
    },
    {
      id: 'b',
      field: 'b',
      caption: 'b',
      formatter: null,
      className: 'b',
      children: [{
          id: 'bb1',
          field: 'bb1',
          caption: 'bb1bbbbbbbbbbbbbbbbbbbbb',
          children: [{
            id: 'bbb1',
            field: 'bbb1',
            caption: 'bbb1',
            align: 'right',
          }, {
            id: 'bbb2',
            field: 'bbb2',
            caption: 'bbb2'
          }, {
            id: 'bbb3',
            field: 'bbb3',
            caption: 'bbb3'
          }]
        },
        {
          id: 'bb2',
          field: 'bb2',
          caption: 'bb2',
          children: [{
            id: 'bbb4',
            field: 'bbb4',
            caption: 'bbb4'
          }, {
            id: 'bbb5',
            field: 'bbb5',
            caption: 'bbb5'
          }, {
            id: 'bbb6',
            field: 'bbb6',
            caption: 'bbb6'
          }]
        }
      ]
    },
    {
      id: 'c',
      field: 'c',
      caption: 'c',
      formatter: null,
      className: 'c',
      children: [{
        id: 'cc1',
        field: 'cc1',
        caption: 'cc1',
      }, {
        id: 'cc2',
        field: 'cc2',
        caption: 'cc2',
        children: [{
          id: 'ccc1',
          field: 'ccc1',
          caption: 'ccc1',
        }]
      }]
    },
    {
      id: 'd',
      field: 'd',
      caption: 'd',
      height: 100,
    },
    {
      id: 'e',
      field: 'e',
      caption: 'e',
    },
    {
      id: 'f',
      field: 'f',
      caption: 'f',
    },
    {
      id: 'g',
      field: 'g',
      caption: 'g',
    },
    {
      id: 'h',
      field: 'h',
      caption: 'h',
    },
    {
      id: 'q',
      field: 'q',
      caption: 'q',
    },
    {
      id: 'z',
      field: 'z',
      caption: 'z',
    },
    {
      id: 'y',
      field: 'y',
      caption: 'y',
    },
    {
      id: 'j',
      field: 'j',
      caption: 'j',
    },
    {
      id: 'l',
      field: 'l',
      caption: 'l',
    },
    {
      id: 'k',
      field: 'k',
      caption: 'k',
    },
    {
      id: 'z',
      field: 'z',
      caption: 'z',
    },
    {
      id: 'h',
      field: 'h',
      caption: 'h',
    }
  ];

  const data = [];

  const config2 = {
    rowHeaderWidth: 80, // (Number)
    dataColWidth: 200, // (Number)
    colHeader: {
      type: 'custom', // (String) no, checkbox, custom
      height: 85, // (Number)
      align: 'center', // (String) left, right, center
    },
    keyProperty: 'id',
    valueSeparator: '_rpn',
    colHeaderFormatter: function (colData, colId, fullData, instance) {
      return `
        <div style="width:100%;height:100%;display:flex;flex-direction:column;">
          <button
            type="button"
            style="width:100%;height:25px;"
            class="col-button"
            data-col-target="${colId}"
            data-id="${colData.id}"
          >
            X
          </button>
          <div style="display:flex;flex-direction:column;">
            <h4 style="text-align:center;border-bottom:1px solid #cdcdcd;height:30px;line-height:30px;">${colData.id}</h4>
            <div style="display:flex; height:30px;">
              <div style="width:50%;border-right:1px solid #cdcdcd;text-align:center;line-height:30px;">검토 내용</div>
              <div style="width:50%;text-align:center;line-height:30px;">RPN</div>
            </div>
          </div>
        </div>
      `;
    },
    colHeaderHandler: function (data, clickTarget, target, instance) {
      if (clickTarget.tagName === 'BUTTON') {
        instance.removeColumn(clickTarget.getAttribute('data-col-target'), data.id);
      }
    },
    loadCallback: function (instance) {}
  };

  window.compare = new BL.Lib.Compare('grid2', columns, data, config2);

  document.querySelector('#refColumn').addEventListener('click', () => {
    const ref = [];
    for (let i = 0; i <= 0; i++) {
      ref.push({
        id: `ref`,
        a: `${i}`,
        a_rpn: `rpn value ${i}`,
        bbb1: `${i}`,
        bbb1_rpn: `rpn value ${i}`,
        bbb2: `${i}`,
        bbb2_rpn: `rpn value ${i}`,
        bbb3: `${i}`,
        bbb3_rpn: `rpn value ${i}`,
        bbb4: `${i}`,
        bbb4_rpn: `rpn value ${i}`,
        bbb5: `${i}`,
        bbb5_rpn: `rpn value ${i}`,
        bbb6: `${i}`,
        bbb6_rpn: `rpn value ${i}`,
        bb2: `${i}`,
        bb2_rpn: `rpn value ${i}`,
        cc1: `${i}`,
        cc1_rpn: `rpn value ${i}`,
        ccc1: `${i}`,
        ccc1_rpn: `rpn value ${i}`,
        d: `${i}`,
        d_rpn: `rpn value ${i}`,
        ref: true, // 데이터 조회 후 임의로 넣어줘야함. ref 한정
      })
    }
    compare.addColumn(ref, true);
  })

  document.querySelector('#refColumn2').addEventListener('click', () => {
    const ref = [];
    for (let i = 0; i <= 0; i++) {
      ref.push({
        id: `ref2`,
        a: `${i}`,
        a_rpn: `rpn value ${i}`,
        bbb1: `${i}`,
        bbb1_rpn: `rpn value ${i}`,
        bbb2: `${i}`,
        bbb2_rpn: `rpn value ${i}`,
        bbb3: `${i}`,
        bbb3_rpn: `rpn value ${i}`,
        bbb4: `${i}`,
        bbb4_rpn: `rpn value ${i}`,
        bbb5: `${i}`,
        bbb5_rpn: `rpn value ${i}`,
        bbb6: `${i}`,
        bbb6_rpn: `rpn value ${i}`,
        bb2: `${i}`,
        bb2_rpn: `rpn value ${i}`,
        cc1: `${i}`,
        cc1_rpn: `rpn value ${i}`,
        ccc1: `${i}`,
        ccc1_rpn: `rpn value ${i}`,
        d: `${i}`,
        d_rpn: `rpn value ${i}`,
        ref: true, // 데이터 조회 후 임의로 넣어줘야함. ref 한정
      })
    }
    compare.addColumn(ref, true)
  })

  document.querySelector('#addColumn').addEventListener('click', () => {

    const data = [];
    for (let i = 1; i <= 10; i++) {
      data.push({
        id: `${i}`,
        a: `${i}`,
        a_rpn: `rpn value ${i}`,
        bbb1: `${i}`,
        bbb1_rpn: `rpn value ${i}`,
        bbb2: `${i}`,
        bbb2_rpn: `rpn value ${i}`,
        bbb3: `${i}`,
        bbb3_rpn: `rpn value ${i}`,
        bbb4: `${i}`,
        bbb4_rpn: `rpn value ${i}`,
        bbb5: `${i}`,
        bbb5_rpn: `rpn value ${i}`,
        bbb6: `${i}`,
        bbb6_rpn: `rpn value ${i}`,
        bb2: `${i}`,
        bb2_rpn: `rpn value ${i}`,
        cc1: `${i}`,
        cc1_rpn: `rpn value ${i}`,
        ccc1: `${i}`,
        ccc1_rpn: `rpn value ${i}`,
        d: `${i}`,
        d_rpn: `rpn value ${i}`,
      })
    }

    compare.addColumn(data);
  });

  document.querySelector('#excel').addEventListener('click', () => {
    compare.downloadExcel();
  })
});

*/