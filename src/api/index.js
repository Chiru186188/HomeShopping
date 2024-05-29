import {create} from 'apisauce';
import axios from 'axios';


export const base_url = 'http://hsstrain.apis.gov.ai/api/';
export const image_url = '';
export const API = {
  IMAGE_URL: image_url,
  BASE_URL: base_url,
};

export const requestGet = (url, extraHeaders = {}) => {
  return new Promise((resolve, reject) => {
axios.get(`${base_url}${url}`, {
  headers: {
          Accept: 'application/json',
          ...extraHeaders,
        },
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    }) 
};
export const requestGetWithBody = (url, data, extraHeaders = {}) => {
  console.log('requestGetWithBodydata', data);
  const queryParams = new URLSearchParams(data).toString();
  console.log('requestGetWithBodydataqueryParams', queryParams);

  return new Promise((resolve, reject) => {
    axios.get(`${base_url}${url}?${queryParams}`, {
      headers: {
        Accept: 'application/json',
        ...extraHeaders,
      },
    })
      .then(response => {
        console.log('API', base_url + url, 'requestGet-response.status', response.data);
        resolve(response);
      })
      .catch(error => {
        console.log('API', base_url + url, 'requestGet-error', error);
        reject(error);
      });
  });
};

//...

export const requestGet2 = (url, extraHeaders = {}) => {
  return new Promise((resolve, reject) => {
axios.get(`${base_url}${url}`, {
  headers: {
          Accept: 'application/json',
          ...extraHeaders,
        },
      })
      .then(response => {
        console.log('API', base_url + url, 'requestPost-response.status', response.data);
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
    }) 
};
export const requestPost = (url, data, isRaw, extraHeaders = {}) => {
  let formData = data || {};
  if (!isRaw && data) {
    formData = new FormData();
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        formData.append(key, data[key]);
      }
    }
  }
  return new Promise((resolve, reject) => {
    axios.post(base_url + url, formData, {
        headers: {
          Accept: 'application/json',
          ...extraHeaders,
        },
      })
      .then(response => {
        console.log('API', base_url + url, 'requestPost-response.status', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('API', base_url + url, 'requestPost-error', error);
        reject(error);
      });
  });
};

export const requestPostImage = (url, data, isRaw, extraHeaders = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(base_url + url, data, {
      headers: {
        Accept: 'application/json',
        ...extraHeaders,
      },
    })
      .then(response => {
        console.log('API', base_url + url, 'requestPost-response.status', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('API', base_url + url, 'requestPost-error', error);
        reject(error);
      });
  });
};

export const requestPostUrlEncoded = (url, data, extraHeaders = {}) => {
  let params = data || {};
  params = new URLSearchParams();
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      params.append(key, data[key]);
    }
  }
  return new Promise((resolve, reject) => {
    axios
      .post(base_url + url, params.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          ...extraHeaders,
        },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

