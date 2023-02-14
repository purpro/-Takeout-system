<template>
  <Header title="地址管理" />
  <van-address-list
    :list="list"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
  />
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import Header from "../../components/Header.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: {
    Header,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const onAdd = () => {
      router.push({
        path: "/addressedit",
        query: {
          type: "add",
        },
      });
    };
    const onEdit = (item) => {
      // console.log(item)
      router.push({
        path: "/addressedit",
        query: {
          id: item.id,
          type: "edit",
        },
      });
    };
    const data = reactive({
      list: [],
    });
    //地址初始化
    const init = () => {
      data.list = store.state.userAddress.map((item) => {
        return {
          id: item.id,
          name: item.name,
          tel: item.tel,
          address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
          isDefault: item.isDefault,
        };
      });
    };
    onMounted(() => {
      init();
    });
    return {
      onAdd,
      onEdit,
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
// /deep/ .van-button--danger {
//   background-color: #ffc400;
//   border-color: #ffc400;
// }
// /deep/ .van-switch--on {
//   background-color: #ffc400;
// }
// /deep/ .van-radio__icon {
//   display: none;
// }
/deep/ .van-button--primary {
  background-color: #ffc400;
  border-color: #ffc400;
}
</style>
