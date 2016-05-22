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

    'get': (url, params, options = {cache: false}, defer) => {
        const deferred = defer ? defer : when.defer();

        superagent
            .get(normalizeUrl(url))
            .set(getHeaders(options.cache))
            .query(params)
            .end(handleResponse(deferred, url, params, options, 'get'));

        return deferred.promise;
    },

    'post': (url, params, options = {cache: false}, defer) => {
        const deferred = defer ? defer : when.defer();

        superagent
            .post(normalizeUrl(url))
            .set(getHeaders(options.cache))
            .send(params)
            .end(handleResponse(deferred, url, params, options, 'post'));

        return deferred.promise;
    },

    'put': (url, params, options = {cache: false}, defer) => {
        const deferred = defer ? defer : when.defer();

        superagent
            .put(normalizeUrl(url))
            .set(getHeaders(options.cache))
            .send(params)
            .end(handleResponse(deferred, url, params, options, 'put'));

        return deferred.promise;
    },

    'delete': (url, params, options = {cache: false}, defer) => {
        const deferred = defer ? defer : when.defer();

        superagent
            .del(normalizeUrl(url))
            .set(getHeaders(false))
            .send(params)
            .end(handleResponse(deferred, url, params, options, 'delete'));

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

//res has a req object, retry based on that req.method, req.url
function handleResponse(deferred, url, params, options, method) {
    return (err, res) => {
        if (err) {
            if (res.statusCode === 401) {
                return AuthService.refreshTokens()
                    .then(() => {
                        return http[method](url, params, options, deferred);
                    });
            }
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