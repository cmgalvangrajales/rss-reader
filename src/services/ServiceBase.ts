import axios from 'axios';

import { ServiceBaseInterface } from './ServiceBase.types';

/**
 * Execute get request
 *
 * @param { ServiceBaseInterface } serviceProps - Service data to send
 *
 * @returns { Promise<T> } Request response
 */
export const get = <T>({ servicePath, headers }: ServiceBaseInterface, options = {}): Promise<T> =>
  axios.get(servicePath, { headers, ...options }).then((response) => response.data);

/**
 * Execute post request
 *
 * @param { ServiceBaseInterface } serviceProps - Service data to send
 *
 * @returns { Promise<T> } Request response
 */
export const post = <T>({ servicePath, data, headers }: ServiceBaseInterface, options = {}): Promise<T> =>
  axios.post(servicePath, data, { headers, ...options });

/**
 * Execute put request
 *
 * @param { ServiceBaseInterface } serviceProps - Service data to send
 *
 * @returns { Promise<T> } Request response
 */
export const put = <T>({ servicePath, data, headers }: ServiceBaseInterface): Promise<T> => axios.put(servicePath, data, { headers });

/**
 * Execute patch request
 *
 * @param { ServiceBaseInterface } serviceProps - Service data to send
 *
 * @returns { Promise<T> } Request response
 */
export const patch = <T>({ servicePath, data, headers }: ServiceBaseInterface): Promise<T> => axios.patch(servicePath, data, { headers });

/**
 * Execute delete request
 *
 * @param { ServiceBaseInterface } serviceProps - Service data to send
 *
 * @returns { Promise<T> } Request response
 */
export const remove = <T>({ servicePath, data, headers }: ServiceBaseInterface): Promise<T> => axios.delete(servicePath, { headers, data });
