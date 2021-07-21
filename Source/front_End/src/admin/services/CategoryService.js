import {objectToParams} from "../helpers";
import {deleteApi, getApi, patchApi, postApi} from "./HttpService";

const CategoryService = {
  getCategoryList: (params) => {
    const paramBag={};

    if(params.page !== undefined){
      paramBag.page = params.page;
    }
    if(params.limit !== undefined){
      paramBag.limit = params.limit;
    }
    if(params.fields !== undefined){
      paramBag.fields = params.fields;
    }
    if(params.sort !== undefined){
      paramBag.sort = params.sort;
    }
    if (params.conditions !== undefined) {
      for (let key in params.conditions) {
        if (params.conditions.hasOwnProperty(key)) {
          paramBag[key] = params.conditions[key];
        }
      }
    }
    return  getApi('category?'+objectToParams(paramBag))
  },
  getCategory: (id, params) => {
    const paramBag = {};

    if (params.fields !== undefined) {
      paramBag.fields = params.fields;
    }

    if (params.conditions !== undefined) {
      for (let key in params.conditions) {
        if (params.conditions.hasOwnProperty(key)) {
          paramBag[key] = params.conditions[key];
        }
      }
    }

    return getApi('category/'+id+'?'+objectToParams(paramBag));

  },

  createCategory: (data) => {
    return postApi('category', data);
  },

  updateCategory: (id, data) => {
    return patchApi('category/'+id, data);
  },

  deleteCategory: (id) => {
    return deleteApi('category/'+id);
  }
};

export default CategoryService;
