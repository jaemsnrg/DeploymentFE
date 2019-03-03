import styled from 'styled-components';

export const gridOverrides = `
// general
    div:focus {outline:0;}
    .ReactTable .rt-thead.-header {
        box-shadow: none !important;
        border-bottom: 1px solid #c9cdcd;
    }

    .ReactTable {
        position: relative;
        left: 0;
        width: 105%;
        background-color: white;
        @media (min-width: 768px) {
            left: 0;
            width: 100%;
        }
    }

    .rt-noData {
        display: none;
    }
// footer

    .ReactTable .-pagination{
        box-shadow: none;        
        border-top: none;
    }


// header

    // .ReactTable .rt-thead {
    //     overflow-y: scroll;
    // }
  

// pagination
    .-pageInfo {
        font-family: "Roboto Regular";
    }

    .-btn {
        position: relative;
        top: 3px;
        font-family: "Roboto Regular";
        color: white !important;
        width: 130px !important;
        height: 30px !important;
        border-radius: 15px !important;
        background-color: #4d8fff !important;
        margin: 0 auto;
        padding: 4px !important;
    }

    select {
        font-family: "Roboto Regular";
    }

    option {
        font-family: "Roboto Regular";
    }
    

// custom sort direction icons

    .ReactTable .rt-resizable-header {
        padding: 0 !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }
     
    .ReactTable .rt-resizer:before {
        display: inline-block;
        position: absolute;
        right: 25px;
        top: 12px;
        height: 18px;
        width: 18px;
        color: transparent;
        content: '.';
        background-size: 18px 18px;
        background-repeat: no-repeat; 
        opacity: 0.87;
    }
    
    .ReactTable  .rt-resizable-header-content:after {
        position: absolute;
        right: 8px;
        top: 3px;
        height: 18px;
        width: 18px;
        z-index: 120;
        color: transparent;
        content: '.';
    }
    
    .ReactTable .rt-th.-sort-asc .rt-resizer:before {
        opacity: 0.7;
        transform: rotate(180deg);
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMTVWNmw0IDQgMS0xLTYtNi02IDYgMSAxIDQtNHY5eiIgZmlsbD0iIzMzMyIvPjwvc3ZnPg==);
    }
    
    .ReactTable .rt-th.-sort-desc .rt-resizer:before {
        opacity: 0.7;
        transform: rotate(180deg);
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCAzdjkuMTNMNCA4IDMgOWw2IDYgNi02LTEtMS00IDQuMTNWM3oiIGZpbGw9IiMzMzMiLz48L3N2Zz4=);
    }


    .rt-th:nth-child(1) {
        pointer-events: none;
      }
    .rt-th:nth-child(2) {
         pointer-events: none;
      }
    .rt-th:nth-child(5) {
         pointer-events: none;
      }
    .rt-th:nth-child(6) {
         pointer-events: none;
      }
    .rt-th:nth-child(7) {
         pointer-events: none;
      }
    .rt-th:nth-child(8) {
         pointer-events: none;
      }
    .rt-th:nth-child(9) {
         pointer-events: none;
      }

      .ReactTable .rt-tbody .rt-td {
        //   border: none !important;
      }
`
