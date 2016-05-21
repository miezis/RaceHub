import superagent from 'superagent';
import when from 'when';
import _ from 'lodash';

import AuthService from './AuthService';

const basePath = '/api';

const http = {
    'auth': (url, params, options = {cache: false}) => {
        const deferred = when.defer();

        superagent
            .post(url)
            .set(getHeaders(options.cache))
            .send(params)
            .end(handleResponse(deferred));

        return deferred.promise;
    },

    'get': (url, params, options = {cache: false}) => {
        const deferred = when.defer();

        superagent
            .get(normalizeUrl(url))
            .set(getHeaders(options.cache))
            .query(params)
            .end(handleResponse(deferred));

        return deferred.promise;
    },

    'post': (url, params, options = {cache: false}) => {
        const deferred = when.defer();

        superagent
            .post(normalizeUrl(url))
            .set(getHeaders(options.cache))
            .send(params)
            .end(handleResponse(deferred));

        return deferred.promise;
    },

    'put': (url, params, options = {cache: false}) => {
        const deferred = when.defer();

        superagent
            .put(normalizeUrl(url))
            .set(getHeaders(options.cache))
            .send(params)
            .end(handleResponse(deferred));

        return deferred.promise;
    },

    'delete': (url, params) => {
        const deferred = when.defer();

        superagent
            .del(normalizeUrl(url))
            .set(getHeaders(false))
            .send(params)
            .end(handleResponse(deferred));

        return deferred.promise;
    }
};

function getHeaders(cache) {
    let headers = {};

    if (!cache) {
        headers['Cache-Control'] = 'no-cache';
    }

    const token = AuthService.getAccessToken();

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
}

function handleResponse(deferred) {
    return (err, res) => {
        if (err) {
            if (err.response){
                if (err.response.type === 'application/json') {
                    err = JSON.parse(err.response.text);
                    deferred.reject(err.error);
                    return;
                }
            }

            deferred.reject(err);
            return;
        }

        deferred.resolve(res);
    };
}

function normalizeUrl(url) {
    if (_.startsWith(url, basePath)) {
        return url;
    }

    return basePath + url;
}

export default http;