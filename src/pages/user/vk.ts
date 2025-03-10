import VK from 'vk-openapi';

VK.init({
  apiId: process.env.REACT_APP_VK_ID,
});

export default VK;