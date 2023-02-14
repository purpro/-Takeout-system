import {createStore, storeKey} from 'vuex'
   
//创建并暴露store
export default createStore({
   	state:{
        cartList:[], //购物车中的数据
        isDelete:true , //确定header组件点击编辑时候，底部组件的展示
        edit:true, // 默认展示编辑的状态
        orderList:[],
        userAddress:[
            {
                id: 1001,
                name: 'jason',
                tel: '18888888888',
                province: '广东省',
                city: '深圳市',
                county: '南山区',
                addressDetail: '深圳湾',
                isDefault: true,
                areaCode: '110101',
              },
              {
                id: 1002,
                name: 'allen',
                tel: '15874859685',
                province: '湖北省',
                city: '武汉市',
                county: '武昌区',
                addressDetail: '黄鹤楼',
                isDefault: false,
                areaCode: '110101',
              },
        ],
        orderListEnd:[]
    },
    mutations:{
        addcart(state, value){
            state.cartList = value
        },
        changeDelete(state){
            state.isDelete = !state.isDelete
        },
        delete(state,value){
            state.cartList = value
        },
        edit(state,value){
            if(value){
                state.edit = true
            }else{
                state.edit = !state.edit
            }
        },
        pay(state,value){
            state.orderList = value
        },
        orderListEd(state){
            state.orderListEnd = state.orderListEnd.concat(state.orderList)
        },
        addaddress(state,value){
            state.userAddress.map(item => {
                if(value.isDefault){
                    item.isDefault = false
                }
            })
            state.userAddress.push(value)
        },
        editaddress(state,value){
            state.userAddress = state.userAddress.map(item => {
                if(value.isDefault){
                    item.isDefault = false
                }
                // if(item.id === value.id){
                //     return value
                // }else{
                //     return item
                // }
                return item.id === value.id ? value :item
            })

        },
        deleteaddress(state,value){
            state.userAddress = state.userAddress.filter(item => {
                return !(item.id === value.id)
            })
            if(value.isDefault){
                state.userAddress[0].isDefault = true
            }
        }
    },
    actions:{}
})

