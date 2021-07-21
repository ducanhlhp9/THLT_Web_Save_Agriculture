import {postApi} from "./HttpService";
import _ from "lodash";
import axios from "axios";

const UploadService = {
  upload: (data, params) => {
    const formData = new FormData();

    _.forEach(data, (value, key) => {
      formData.append(key, value, value.name)
    });

    const api = postApi('upload_temps', formData);

    if (params.onSucceed !== undefined) {
      api.then(params.onSucceed)
    }

    if (params.onFailed !== undefined) {
      api.catch(params.onFailed)
    }
  }
};

export default UploadService;
