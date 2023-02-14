<template>
  <Header title="账号管理" />
  <div>
    <van-field v-model="name" label="昵称" placeholder="请输入昵称" />
    <van-field
      v-model="sign"
      label="个性签名"
      placeholder="请输入个性签名"
      disabled
    />
    <van-field v-model="pass" label="密码" placeholder="请输入密码" />
  </div>
  <van-button
    type="primary"
    color="#ffc400"
    round
    block
    class="save-btn"
    @click="save"
    >保存</van-button
  >

  <van-button
    type="primary"
    color="#ffc400"
    round
    block
    class="save-btn"
    @click="logOut"
    >退出登录</van-button
  >
</template>

<script>
import Header from "../../components/Header.vue";
import { reactive, toRefs } from "vue";
import { showToast } from "vant";
import { useRouter } from "vue-router";
export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    const data = reactive({
      name: "",
      sign: "2023十分美妙",
      pass: "",
    });
    const save = () => {
      if (data.name && data.pass) {
        let userInfo = JSON.parse(localStorage.userInfo);
        let currentUser = JSON.parse(localStorage.currentUser);
        for (let i = 0; i < userInfo.length; i++) {
          if (userInfo[i].user == currentUser.user) {
            userInfo[i] = {
              user: data.name || userInfo[i].name,
              pass: data.pass || userInfo[i].pass,
            };
            currentUser = userInfo[i];
          }
        }
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        localStorage.setItem("currentUser",JSON.stringify(currentUser));
        showToast("修改成功");
        router.push("/mine");
      } else {
        showToast("请输入内容");
      }
    };
    const logOut = () => {
      localStorage.removeItem("isLogin");
      router.push("/login");
      showToast("退出成功");
    };

    return {
      ...toRefs(data),
      logOut,
      save,
    };
  },
};
</script>

<style lang="less" scoped>
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>