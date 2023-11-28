import client from './client'

export const writeDonatePost = ({ title, image, text, tag, userId }) =>
  client.post('/api/donates/new', { title, image, text, tag, userId });

export const writeFindPost = ({ title, image, text, tag, userId }) =>
  client.post('/api/finds/new', { title, image, text, tag, userId });

export const listFindPosts = () => {
  return client.get(`/api/finds`);
};

export const listDonatePosts = () => {
  return client.get(`/api/donates`);
};

export const readFindPost = id => client.get(`/api/finds/details/${id}`);

export const readDonatePost = (id) => client.get(`/api/donates/details/${id}`);

export const writeAddressInput = ({username, address, phoneNumber, userId}) => client.post('/api/informations/new', {username, address, phoneNumber, userId});

export const writeDeliveryInput = ({text, infoId, shopId, userId}) => client.post('/api/donate-order/new',  {text, infoId, shopId, userId});