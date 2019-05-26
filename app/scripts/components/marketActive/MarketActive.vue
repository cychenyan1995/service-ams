<template>
  <div class="market-active">
    <header>
      <div class="search">
        <input
          type="text"
          placeholder="请输入活动名称查找"
        >
      </div>
      <span class="s-icon">
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 100 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="search"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              d="M76.0871908,70.7838899 L98.6516504,93.3483496 C100.116117,94.8128157 100.116117,97.1871843 98.6516504,98.6516504 C97.1871843,100.116117 94.8128157,100.116117 93.3483496,98.6516504 L70.7838899,76.0871908 C63.4016421,82.2745965 53.8858783,86 43.5,86 C20.0278981,86 1,66.9721019 1,43.5 C1,20.0278981 20.0278981,1 43.5,1 C66.9721019,1 86,20.0278981 86,43.5 C86,53.8858783 82.2745965,63.4016421 76.0871908,70.7838899 Z M43.5,78.5 C62.8299662,78.5 78.5,62.8299662 78.5,43.5 C78.5,24.1700338 62.8299662,8.5 43.5,8.5 C24.1700338,8.5 8.5,24.1700338 8.5,43.5 C8.5,62.8299662 24.1700338,78.5 43.5,78.5 Z"
              id="Combined-Shape"
              fill="#000000"
              fill-rule="nonzero"
            ></path>
          </g>
        </svg>
      </span>
    </header>
  </div>
</template>
<style lang='less'>
.market-active {
  header {
      height: 1.333333rem;
      margin: 0 auto;
    .search {
      text-align: center;
    //   height: 0.8rem;
      line-height: 0.4rem;
      padding: .4rem .533333rem 0;
    //   border: 1px solid #eee;
    //   border-radius: 0.333333rem;
    //   background-color: #f4f7f9;
      & > input {
        font-size: 0.4rem;
        // border: none;
        background-color: #f4f7f9;
        border-radius: .8rem;
        height: .8rem;
        text-align: center;
      }
    }
    .s-icon {
      position: absolute;
      left: 2.5rem;
      top: 0rem;
      right: 0;
      bottom: 0;
      height: .4rem;
      width: .4rem;
      svg {
        width: 100%;
        height: 100%;
        path {
            fill: #d8dce0;
        }
      }
    }
  }
}
</style>
