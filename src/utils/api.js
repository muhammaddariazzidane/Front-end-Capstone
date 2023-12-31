import { toast } from '@/components/ui/use-toast';
import { api } from '@/utils/axios';
import { deleteCookie, setCookie } from 'cookies-next';

export const register = async (data) => {
  try {
    const response = await api.post('/auth/register', data);
    return response;
  } catch (error) {
    if (error?.response?.status === 409) {
      toast({
        variant: 'destructive',
        title: 'Invalid Credentials',
        description: 'Email atau Username telah digunakan',
      });
    } else {
      console.log(error?.message);
    }
  }
};

export const login = async (data) => {
  try {
    const response = await api.post('/auth/login', data);
    if (response?.data.statusCode === 200) {
      setCookie('accessToken', response?.data.data.accessToken);
      return response;
    }
  } catch (error) {
    if (error?.response?.status === 401) {
      toast({
        variant: 'destructive',
        title: 'Invalid Credentials',
        description: 'Email atau Password yang anda masukkan salah',
      });
    }

    console.log(error?.message);
  }
};

export const logout = async () => {
  try {
    return deleteCookie('accessToken');
  } catch (error) {
    console.log(error?.message);
  }
};

export const addProduct = async (data) => {
  try {
    const response = await api.post('/products', data);
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const updateProduct = async (productId, data) => {
  try {
    const response = await api.patch(`/products/${productId}`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const addStore = async (data) => {
  try {
    const response = await api.post('/stores', data);
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const updateStore = async (data, id) => {
  try {
    const response = await api.patch(`/stores/${id}`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const deleteStore = async (id) => {
  try {
    const response = await api.delete(`/stores/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const createAddress = async (data) => {
  try {
    const response = await api.post('/addresses', data);
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const makeOrder = async (data) => {
  try {
    const response = await api.post('/orders', data);
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const updateAddress = async (data, id) => {
  try {
    const response = await api.patch(`/addresses/${id}`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const deleteAddress = async (id) => {
  try {
    const response = await api.delete(`/addresses/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const sendPaymentProof = async (transactionId, data) => {
  try {
    const response = await api.post(
      `/transactions/${transactionId}/payment-proof`,
      data
    );
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const addCategory = async (data) => {
  try {
    const response = await api.post('/categories', data);
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const updateCategory = async (data, id) => {
  try {
    const response = await api.patch(`/categories/${id}`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await api.delete(`/categories/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const addProfile = async (data) => {
  try {
    const response = await api.post('/profiles', data);
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const updateProfile = async (data) => {
  try {
    const response = await api.patch('/profiles', data);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error?.message);
  }
};
