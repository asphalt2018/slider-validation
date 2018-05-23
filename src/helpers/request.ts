import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

axios.defaults.timeout = 30 * 1000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default class Request {
  public static async get(url: string, params?: object): Promise<AxiosResponse> {
    let urlStr = url;
    if (Object.prototype.toString.call(params) === '[object Object]') {
      urlStr = url + (Object.keys(params).length ? '?' : '') + this.translateParams(params);
    }
    const parameters: AxiosRequestConfig = {
      url: urlStr,
      method: 'get'
    };
    return await axios.request(parameters);
  }

  public static async post(url: string, params?: object, isFormData?: boolean): Promise<AxiosResponse> {
    const parameters: AxiosRequestConfig = {
      url,
      method: 'post',
      data: isFormData ? params : this.translateParams(params)
    };
    if (isFormData) {
      parameters.headers = {'Content-Type': 'multipart/form-data'};
    }
    return await axios.request(parameters);
  }

  private static translateParams(params: object): string {
    let url = '';
    for (const key of Object.keys(params)) {
      url += `${key}=${params[key]}&`;
    }
    return url.substring(0, url.length - 1);
  }
}

