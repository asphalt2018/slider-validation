import { AxiosResponse } from 'axios';
export default class Request {
    static get(url: string, params?: object): Promise<AxiosResponse>;
    static post(url: string, params?: object, isFormData?: boolean): Promise<AxiosResponse>;
    private static translateParams(params);
}
