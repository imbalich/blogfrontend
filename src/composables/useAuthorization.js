import { ref,onMounted } from 'vue'
import authorization from '@/utils/authorization'

export const useAuthorization = () => {
  const username = ref('');
  const hasLogin = ref(false);
  const isSuperuser = JSON.parse(localStorage.getItem('isSuperuser.myblog'));

  const fetchData = async () => {
    const [loginStatus, name] = await authorization();
    hasLogin.value = loginStatus;
    username.value = name;
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  const refresh = () => {
    username.value = localStorage.getItem('username.myblog');
  };

  onMounted(fetchData);

  return {
    username,
    hasLogin,
    isSuperuser,
    logout,
    refresh
  };
};