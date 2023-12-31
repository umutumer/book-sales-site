import { setData } from './slice';
import axios from 'axios';

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3005/kitaplar');
    dispatch(setData(response.data));
  } catch (error) {
    console.error('Veriler getirilirken hata oluştu:', error);
  }
};