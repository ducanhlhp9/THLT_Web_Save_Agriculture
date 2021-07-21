import Axios from "axios";
import { types } from "mobx-state-tree";

const User = types.model({
  name: types.optional(types.maybeNull(types.string), null),
  id: types.optional(types.maybeNull(types.number), null),
  phone: types.optional(types.maybeNull(types.string), null),
  address: types.optional(types.maybeNull(types.string), null),
  email: types.optional(types.maybeNull(types.string), null),
})
.views((self)=>({
  // id : function(){
  //   return self.id
  // }
}))

.actions((self)=>{
  function changeuser(name,id,phone,address,email){
    let id1= Number(id)
      self.name=name
      self.id=id1
      self.phone=phone
      self.address=address
      self.email=email
  }
  function dl(){
    self.name=null
    self.id=null
  }
  return{
    changeuser,
    dl
  }
})
const Listuser = types.model({
  listuser : types.array(User)
})
.actions(self=>{
  function changlistuser(data){
    if (data[0] !== undefined)
    self.listuser = data
    // console.log(self.listproduct);
  }
  return{
    changlistuser
  }
})
export const listuser=Listuser.create()
const speciesCategory = types.model({
  id : types.optional(types.maybeNull(types.number), null),
  name : types.optional(types.maybeNull(types.string), null),
  slug : types.optional(types.maybeNull(types.string), null),
  active : types.optional(types.maybeNull(types.number), null),
  status : types.optional(types.maybeNull(types.number), null),
  cat_id : types.optional(types.maybeNull(types.number), null),
  created_at : types.optional(types.maybeNull(types.string), null),
  updated_at : types.optional(types.maybeNull(types.string), null)
})

const ListspeciesCategory = types.model({
    listspeciesCategory :types.array(speciesCategory)
})
.actions((self)=>{
  function change(data){
    self.listspeciesCategory=data
  }
  return{
    change
  }
})
export const listspeciesCategory=ListspeciesCategory.create()
export const listtochucCategory=ListspeciesCategory.create()
const Product = types.model({
  id : types.optional(types.maybeNull(types.number), null),
  name : types.optional(types.maybeNull(types.string), null),
  slug : types.optional(types.maybeNull(types.string), null),
  spe_cat_id : types.optional(types.maybeNull(types.number), null),
  status : types.optional(types.maybeNull(types.number), null),
  cat_id:types.optional(types.maybeNull(types.number), null),
  user_id : types.optional(types.maybeNull(types.string), null),
  image1 : types.optional(types.maybeNull(types.string), null),
  image2 : types.optional(types.maybeNull(types.string), null),
  image3 : types.optional(types.maybeNull(types.string), null),
  description : types.optional(types.maybeNull(types.string), null),
  description_seo : types.optional(types.maybeNull(types.string), null),
  title : types.optional(types.maybeNull(types.string), null),
  title_seo : types.optional(types.maybeNull(types.string), null),
  content1 : types.optional(types.maybeNull(types.string), null),
  content2 : types.optional(types.maybeNull(types.string), null),
  content3 : types.optional(types.maybeNull(types.string), null),
  created_at : types.optional(types.maybeNull(types.string), null),
  updated_at : types.optional(types.maybeNull(types.string), null),
  active : types.optional(types.maybeNull(types.number), null),
})
// const productInfor = types.model({
//   infor: types.array(Product)
// })
// .actions(self=>{
//   function changdata(data){
//       self.infor.push(data)
//   }
//   return{
//     changdata
//   }
// })
// export const productinfor= productInfor.create([])
const Category = types.model({})
const ListProduct = types.model("ListProduct",{
  listproduct : types.array(Product)
})
.views((self) => ({
  data: function () {
    // console.log(id)
    // let id1=Number(id)
    // console.log(self.listproduct);
    // console.log(self.listproduct.find((todo) => todo.id === id1))

    return self.listproduct
},
  product: function (id) {
    // console.log(id)
    // console.log(typeof(id));
    let id1=Number(id)
    // console.log(typeof(id1));
    // console.log(self.listproduct);
    // console.log(self.listproduct.find((todo) => todo.id === id1))

    return self.listproduct.find((todo) => todo.id === id1)
},
  nongsan: function (id) {
    // console.log(id)
    let id1=Number(id)
    // let arr=[]
    let arr=self.listproduct.filter((todo) => todo.cat_id === id1)
    // arr.flat()
    // console.log(arr);
    return arr
  },
  dongvat: function (id) {
    // console.log(id)
    let id1=Number(id)
    let arr=[]
    arr.push(self.listproduct.find((todo) => todo.cat_id === id1))
    arr.flat()
    return arr
  }
}))
.actions((self)=>{
  function changlistproduct(data){
    if (data[0] !== undefined)
    self.listproduct = data
    // console.log(self.listproduct);
  }
  function changsearch(data){
    // if (data[0] !== undefined)
    self.listproduct = data
    // Axios.get()
    console.log("abc");
  }
  function delete1(id){
      let id1= self.listproduct.findIndex(value=> value.id===id)
  }
  return {
    changlistproduct,
    delete1,
    changsearch
  }
})
// const data=null;
// Axios.get("/api/articleSpecies").then(res=>{
//     data=res.data
//     console.log(data)
// })
export default ListProduct
export const listproduct=ListProduct.create()
export const listsearch=ListProduct.create()
export const listlq=ListProduct.create()
export const listtochuc=ListProduct.create()
export const user=User.create()
export const product=Product.create()


