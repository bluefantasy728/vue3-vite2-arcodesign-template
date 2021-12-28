import http from '@/request';

export function getCount() {
  return http.get('/home', {
    params: {
      pageNum: 1,
      pageSize: 100,
    }
  });
}