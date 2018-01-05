<template>
  <div id="User">
    <h2>{{caption}}</h2>
    <ul>
      <li v-for="user in users">
        <span>{{ user.name }}</span><span>{{ user.email }}</span><button v-on:click="deleteUser(user)">X</button>
      </li>
    </ul>

    <form action="" v-on:submit.prevent="addUser" id="form_add_user">
      <input type="text" name="" id="txt_user_name" v-model="newUser.name" placeholder="codigo">
      <input type="email" name="" id="" v-model="newUser.email" placeholder="email">
      <button type="submit">ADD</button>
    </form>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        caption: 'Lista de Usuarios',
        users: [
          // { name: 'aobando', perfil: 'admin' },
          // { name: 'gperez', perfil: 'reviser' }, 
          // { name: 'mbustos', perfil: 'editor' }  
        ],
        newUser: { }
      }
    },
    methods: {
      addUser(){      
        this.users.push(this.newUser);
        this.newUser = {};
        document.getElementById('txt_user_name').focus();
      },
      deleteUser(user){
        this.users.splice(this.users.indexOf(user),1);
      }
    },
    created() {
      // console.log('componente User cargado');
      // document.getElementById('txt_user_name').focus();// PARECE SER QUE NO CREA EL ELEMENTO AUN, YA QUE NO RESULTA ESTE ENLACE
      this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.users = res.body);
    }
  }
</script>

<style media='screen'>

#User {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  
}
#User>h2 {
  width : 70%;
  background-color: #4A7C59;
  padding: 1rem;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
  margin: 0px;
  color: white;
}

#User>ul {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width : 70%;
  justify-content: center;
  background-color : rgba(200, 213, 185, 0.336);
  margin: 0px;
}
#User>ul>li {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  margin: .2rem;
}
#User>ul>li>span {
  /* flex: 0 0 40% !important; */
  width: 30% !important;
  /* background-color: yellow; */
  margin: .0rem .3rem;
  border: 1px solid silver;
}
#form_add_user {
  width : 70%;
  background-color: #8FC0A9;
  padding: 1rem;
  border-bottom-left-radius: .3rem;
  border-bottom-right-radius: .3rem;
  
}

</style>
