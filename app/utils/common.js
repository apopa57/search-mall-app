export const numberWithCommas = (x) => {
  if(typeof x === 'undefined') {
    throw new Error('Expected defined value!');
    return;
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const paramsToQueryString = (params) => {
  if(typeof params !== 'object') {
    throw new Error('Expected params to be Object!');
    return;
  }
  const k = Object.keys(params);
  let s = "";
  for(let i=0; i<k.length; i++) {
    s += `${k[i]}=${encodeURIComponent(params[k[i]])}`;
    if (i != k.length -1) s += "&";
  }
  return s;
};

export const getPaginatedUrls = (link, type) => {
  if (!link) return null;
  if(typeof link !== 'string') {
    throw new Error('Expected link to be string!');
    return null;
  }
  const paginatedLink = link.split(',').find(s => s.indexOf(type) > -1);
  return paginatedLink ? paginatedLink.split(';')[0].trim().slice(1, -1) : null;
}
