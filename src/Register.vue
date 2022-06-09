<template>

<div class="register" v-bind:class="{ active: registActive }">
 
  <article class="container">

      <div class="block">

          <section class="block_itemw block-item" v-bind:class="{ active: entryActive }">
              <h2 class="block-item_title">У вас уже есть аккаунт?</h2>
              <button class="block-item_btn signin-btn"
              @click="welcome">Войти</button>
          </section>

          <section class="block_itemr block-item" v-bind:class="{ active: registActive }">
              <h2 class="block-item_title">У вас нет аккаунта?</h2>
              <button class="block-item_btn signup-btn"
              @click="welcome">Зарегистрироваться</button>
          </section>

      </div>

      <div class="form-box" v-bind:class="{ active: registActive }">

          <div class="gradient"></div>

          <!--Форма входа-->
          <form class="form form_signin"
          @submit.prevent="login()">
              <h3 class="form_title">Вход</h3>

              <p>
                  <input required v-model="email" 
                  type="login" id="email"
                  class="form_input" placeholder="email"/>
              </p>
              <p>
                  <input required v-model="password"
                  id="password"
                  type="password" 
                  class="form_input" 
                  placeholder="Пароль"/>
              </p>
              <p>
                  <button type="submit"
                  class="form_btn" @click="login()">Войти</button>
              </p>
              <p>
                  <a href="#" class="form_forgot">Восстановить пароль</a>
              </p>
              <p>
                  <a href="#" class="form_forgot" @click="$router.push('/all')">Войти как гость</a>
              </p>
          </form>

          <!--Форма регистрации-->
          <form action="#" class="form form_signup">
              <h3 class="form_title">Регистрация</h3>

              <p>
                  <input type="text" class="form_input" placeholder="Логин">
              </p>
              <p>
                  <input type="email" class="form_input" placeholder="Email">
              </p>
              Ваш день рождения?
              <input type="date" class="form_input" placeholder="Ваш день рождения?"/>
              <p>
                  <input type="password" class="form_input" placeholder="Введите пароль">
              </p>
              <p>
                  <input type="password" class="form_input" placeholder="Подтвердите пароль">
              </p>
              <p>
                  <button class="form_btn form_btn_signup"
                  @click="onRegisterButtonClick();$router.push('/all')">Зарегистрироваться</button>
              </p>
          </form>

      </div>

  </article>
</div>
    
</template>

<script>

import { userRegisterRequest } from "@/api/user";

export default {
  name: 'UserRegister',
  data() {
    return{ 
        registActive: false,
        entryActive: true,
        email: "",
        password: ""
    }
  },
  methods: {
    onRegisterButtonClick : async() => {
      const res = await userRegisterRequest({
        "name": "Muhammad Nur Ali",
        "email": "muh.nur123434129ali43@gmail.com",
        "password": "12345678",
        "age": 20
      })
      console.log(res)
    },
    login: function () {
        let email = this.email 
        let password = this.password
        this.$store.dispatch('email', { email, password })
       .then(() => this.$router.push('/all'))
       .catch(err => console.log(err))
    },
    //Смена стиля Вход/Авторизация//
    welcome: function(){
        this.registActive = !this.registActive;
        this.entryActive = !this.entryActive
    }
    ////////////////////////////////   
  }
}
</script>

<style>
* {
    box-sizing: border-box;
}

.register {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    margin: 0;

    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(151, 226, 128);
    transition: 0.5s;
}

.register.active {
    background-color:  rgb(235, 159, 159);
}

.container {
    width: 800px;
    height: 500px;
    padding: 40px 0;
    position: relative;
}

/* Внутренний блок */

.block {
    height: 100%;
    background-color: rgba(255,255,255,0.2);
    box-shadow: 0 5px 45px rgba(0,0,0,0.2);

    display:  flex;
    align-items: center;
}

.block-item {
    width: 50%;
}

/* Элементы блока */

.block-item {
    text-align: center;
}

.block-item.active {
    filter: blur(15px);
    transition: 1.3s;
}

.block-item_title {
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 10px;
}

.block-item_btn {
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    background-color: #fff;
    color: #333;
    font-size: 16px;
    font-weight: 500;
}

/* Блок формы */

.gradient { /* Градиент */
    opacity: .2;
    background: linear-gradient(-45deg, #ff0000, #ff0000, #15fa00, #ffc401);
    background-size: 400% 400%;
    animation: gradient 8s ease infinite;
    height: 100%;
    width: 100%;
}

@keyframes gradient { /* Анимация градиента */
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.form-box {
    height: 100%;
    width: 50%;
    box-shadow: 0 5px 45px rgba(0,0,0,0.35);

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;

    transition: 0.5s ease-in-out;

    display: flex;
    align-items: center;

    overflow: hidden;
}

.form-box.active {
    left: 50%;
}

/* Форма */

.form {
    width: 100%;
    padding: 50px;
    font-size: 16px;

    position: absolute;
    transition: 0.5s;
}

.form_signin {
    left: 0;
    transition-delay: 0.25s;
}

.form_signup {
    left: 100%;
    transition-delay: 0s;
}

.form-box.active .form_signin {
    left: -100%;
    transition-delay: 0s;
}

.form-box.active .form_signup {
    left: 0%;
    transition-delay: 0.25s;
}

.form-title {
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
}

.form_input {
    width: 100%;
    padding: 10px;
    border: solid 1px #333;
    font-size: inherit;
    border-radius:10px;
}

.form_btn {
    border: none;
    cursor: pointer;
    font-size: inherit;
    background-color: rgb(112, 214, 44);
    color: #fff;
    padding: 10px 50px;
}

.form_btn_signup {
    background-color: rgb(255, 44, 44);
}

.form_forgot {
    color: #333;
}

/* Адаптив */

@media (max-width: 992px) {
    .container {
        max-width: 400px;
        height: 650px;
        padding: 0;
        margin: 0 20px;
    }

    .block {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .block-item {
        width: 100%;
        padding: 30px 0;
    }

    .form-box {
        width: 100%;
        height: 500px;
        box-shadow: none;

        top: 0;
    }

    .form-box.active {
        top: 150px;
        left: 0;
    }
}
</style>
