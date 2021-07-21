// import dayjs from "dayjs";

export function objectToParams(obj, parentKey = null) {
  let str = "";
  for (let key in obj) {
    if (str !== "") {
      str += "&";
    }

    if (parentKey !== null) {
      if (( typeof obj[key] === 'object')) {
        str += parentKey + '['+key+']' + "=" + objectToParams(obj[key], key);
      } else {
        str += parentKey + '['+key+']' + "=" + obj[key];
      }
    } else {
      if (( typeof obj[key] === 'object')) {
        str += objectToParams(obj[key], key);
      } else {
        str += key + "=" + obj[key];
      }
    }
  }

  return str;
}

export function calculateOffset(limit, page) {
  let offset = 0;

  page = parseInt(page);

  if (page <= 0) {
    page = 1;
  }

  offset = (page - 1) * limit;

  return offset;
}

export function clone(object) {
  return JSON.parse(JSON.stringify(object))
}
export function pare_url_file(image)
{
  if (!image)
  {
    return'/images/no-image.jpg';
  }

  var explode = image.split('__');

  if ((explode[0])) {
    var time = explode[0].replace(/-/g, "/");
    return 'http://127.0.0.1:8000/uploads/'+time +'/' + image;
  }
}
export function create_name(name) {
  let newDate = new Date()
  let date = newDate.getDate().toString();
  let month = (newDate.getMonth() + 1).toString();
  let year = newDate.getFullYear().toString();
  return year+'-'+'0'+month+'-'+date+'__'+name
}

