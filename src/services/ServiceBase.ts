import axios from 'axios';

import { ServiceBaseInterface } from './ServiceBase.types';

const callService = <T>(call): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    axios(call)
      .then((response) => resolve(response.data as T))
      .catch((error) => {
        const response = error.response?.data?.message;

        if (response) {
          reject(new Error(response));
        } else {
          reject(error);
        }
      });
  });
};

/**
 * Execute get request
 *
 * @param { ServiceBaseInterface } serviceProps - Service data to send
 *
 * @returns { Promise<T> } Request response
 */
export const get = <T>({ servicePath, params, headers }: ServiceBaseInterface, options = {}): Promise<T> =>
  callService({
    method: 'GET',
    params,
    headers,
    url: servicePath,
    ...options,
  });

/**
 * Execute post request
 *
 * @param { ServiceBaseInterface } serviceProps - Service data to send
 *
 * @returns { Promise<T> } Request response
 */
export const post = <T>({ servicePath, data, headers }: ServiceBaseInterface, options = {}): Promise<T> =>
  callService({
    method: 'POST',
    data,
    headers,
    url: servicePath,
    ...options,
  });

/**
 * Execute put request
 *
 * @param { ServiceBaseInterface } serviceProps - Service data to send
 *
 * @returns { Promise<T> } Request response
 */
export const put = <T>({ servicePath, data, headers }: ServiceBaseInterface): Promise<T> =>
  callService({
    method: 'PUT',
    data,
    headers,
    url: servicePath,
  });

/**
 * Execute patch request
 *
 * @param { ServiceBaseInterface } serviceProps - Service data to send
 *
 * @returns { Promise<T> } Request response
 */
export const patch = <T>({ servicePath, data, headers }: ServiceBaseInterface): Promise<T> =>
  callService({
    method: 'PATCH',
    data,
    headers,
    url: servicePath,
  });

/**
 * Execute delete request
 *
 * @param { ServiceBaseInterface } serviceProps - Service data to send
 *
 * @returns { Promise<T> } Request response
 */
export const remove = <T>({ servicePath, data, headers }: ServiceBaseInterface): Promise<T> =>
  callService({
    method: 'DELETE',
    data,
    headers,
    url: servicePath,
  });
