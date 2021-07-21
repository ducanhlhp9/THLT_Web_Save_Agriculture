import Axios from 'axios';
import { observer } from 'mobx-react';
import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import { listproduct, listspeciesCategory, user } from '../Product/store';
import "./registration.css"
class Registration extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tech:"3",
      job:'',
      message:'',
      dk:''
    }

 }
  onChange =(e)=>{
    // console.log(e.target)
    var name=e.target.name;
    var value=e.target.value;
    this.setState({
      [name]:value
    })
  }
  handleChange(e){
    this.setState({
      tech: e.target.value
    })
  }
  showcate=(datas,id)=>{
    var result=null
    let id1=Number(id)
    result=datas.map((data,index)=>{

      // console.log(data.cat_id,id1);
      if (data.cat_id===id1){
        return(
          <option key={data.id} value={data.id}>{data.name}</option>
      )
      }

    })
    return result
  }
  submit=(data)=>{
    Axios.post('/api/rescue',{name:user.name,email:user.email,phone:user.phone,address:user.address,job:this.state.job,message:this.state.message,species_id:data.spe_cat_id,user_id:user.id})
    .then(res=>{
      console.log(res.data);
      if (res.data!==undefined){
        console.log("object");
        this.setState({
          dk:'thanh cong'
        })
      }
    })
  }
  render(){
    if (user.id===0){
      return(
        <Redirect to="/login" />
      )
    }
    if (this.state.dk === 'thanh cong'){
      return(
        <Redirect to='/'/>
      )
  }
    // console.log(this.props.match.params.name);
    let data=listproduct.product(this.props.match.params.name)
    console.log(user);
    // console.log(listproduct.listproduct);
    if (data === undefined){
        return(
          <div></div>
        )
    } else
    return (

      <div className="container">
          <div className="registration">
            <h1 className="size32">Đăng Ký Giải Cứu</h1>
            <div className="form">
                <div className="form-group">
                    <label >Tên </label>
                    <input type="text" className="form-control" value={user.name} placeholder="Tên của bạn"></input>
                </div>
                <div className="form-group">
                    <label >Địa chỉ</label>
                    <input type="text" className="form-control" value={user.address} placeholder="Địa chỉ của bạn"></input>
                </div>
                <div className="form-group">
                    <label >Số Điện Thoại</label>
                    <input type="text" className="form-control" placeholder="Số điện thoại của bạn" value={user.phone} pattern="[0-9]{10}" title="số 10 ký tự"></input>
                </div>
                <div className="form-group">
                    <label >Chủ Đề</label>
                    <div className="row">
                      <div className="col">
                        <select className="form-control" value={data.cat_id} >
                          <option key="3" value="3">Nông Sản</option>
                          <option key="4" value="4">Động Vật</option>
                        </select>
                      </div>
                      <div className="col">
                        <select className="form-control" value={data.spe_cat_id} >
                          {this.showcate(listspeciesCategory.listspeciesCategory,this.state.tech)}
                        </select>
                      </div>
                    </div>
                </div>
                <div className="form-group">
                    <label >Tên sản phẩm</label>
                    <input type="text" className="form-control" value={data.name} placeholder="Tên sản phẩm"></input>
                </div>
                <div className="form-group">
                    <label >Nghề nghiệp</label>
                    <input type="text" className="form-control" name='job' value={this.state.job} onChange={this.onChange} placeholder="job"></input>
                </div>
                <div className="form-group">
                    <label >message</label>
                    <textarea name="message" value={this.state.message} onChange={this.onChange}></textarea>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" ></input>
                    <label className="form-check-label" >chấp nhận mọi yêu cầu</label>
                </div>

                    <button onClick={()=>{this.submit(data)}} className="btn btn-primary">Gửi Đăng Ký</button>
                </div>
          </div>

      </div>

    )
    }
}

export default observer(Registration);
