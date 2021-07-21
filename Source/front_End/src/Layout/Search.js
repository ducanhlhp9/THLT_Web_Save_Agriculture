import Axios from 'axios'
import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { listsearch } from '../Component/Product/store'
import ShowProduct from '../Component/Show/ShowProduct'
function Search(props){
  useEffect(()=>{
    let search=props.location.search
    let namesearch= search.slice(8)

    Axios.post('/api/search',{name:namesearch}).then(res=>{
      listsearch.changlistproduct(res.data)
    })

  },[])
  console.log(listsearch.listproduct);
  console.log(props.location.search)
  return(
      <div className="abc container">
          <p>Có {listsearch.listproduct.length} sản phẩm tương ứng</p>
          <ShowProduct data={listsearch.listproduct}></ShowProduct>
      </div>
  )
}
export default observer(Search)
