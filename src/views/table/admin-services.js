import http from '@/commons/request';

const DocsApi = {};

//分类列表
DocsApi.clazz_list = () => {
    return http({ url: '/docs/clazz/list' });
}

//文件列表
DocsApi.detail_list = () => {
    var params = {}; 
    params.pageno = 1; params.limit = 15;
    //params['codex["title"]'] = 'XXX';
    //params.condition = "XXX";

    return http({ url: '/docs/detail/list', method: 'get', params: params });
}

export { DocsApi };