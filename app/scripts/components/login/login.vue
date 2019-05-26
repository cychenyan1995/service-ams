<template>
  <div class="login-wrap">
    <div class="company-logo">
      <img src="../../../images/logo.png" />
      <p>市场营销平台</p>
    </div>
    <div class="login-form">
      <ul>
        <li class="login-input">
          <input id="login"
            type="text"
            placeholder="请输入您的账号"
          >
        </li>
        <li class="login-input">
          <input id="pd"
            type="password"
            placeholder="请输入密码"
          >
        </li>
        <li>
          <p class='login-btn'>登录</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="./login.js"></script>
<style lang="less">
.login-wrap {
  padding-top: 2rem;
  background-color: #f9f9f9;
}
.company-logo {
  text-align: center;
  p {
    font-size: 0.333333rem;
    line-height: 0.333333rem;
    font-weight: 700;
  }
}
.login-form {
  margin-top: 2rem;
  ul {
    list-style-type: none;
    li {
      input {
        background: transparent;
        font-size: 0.4rem;
        border: none;
      }
      &:nth-child(3){
        background-color:#6fb0fa;
        width: 7rem;
        height: 1.066667rem;
        line-height: 1.066667rem;
        margin:.666667rem auto;
      }
    }
  }
}
.login-input{
  padding-left: 1.733333rem;
}
.login-btn {
  text-align: center;
  font-size: .4rem;
  color:#fff;
  letter-spacing: .266667rem;
}
</style>

