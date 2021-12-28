import http from '@/request';

export function getOrders(params) {
  console.log(params);
  const pageNum = params.pageNum || 1;
  const pageSize = params.pageSize || 10;
  const orderStatus = params.orderStatus || '';
  return http.get('/orders', {
    params: {
      pageNum,
      pageSize,
      orderStatus,
    }
  });
}
