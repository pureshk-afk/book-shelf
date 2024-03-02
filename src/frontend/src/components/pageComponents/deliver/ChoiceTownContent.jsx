import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useAuthentication } from '../../../api/auth/AuthUtils';
import { fetchCarts, updateCart } from '../../../api/payload/LoadingData';

const options = [
  { value: 'Ростов-на-Дону', label: 'Ростов-на-Дону' },
  { value: 'Москва', label: 'Москва' },
  { value: 'Краснодар', label: 'Краснодар' },
];

export const ChoiceTownContent = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: null,
    label: 'Выберите город',
  });
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  const getCurrentCart = async () => {
    const user = await useAuthentication();
    const cartList = await fetchCarts({ user_id: user.id, closed: 'false' });

    if (cartList.results.length > 0) return cartList.results[0];

    return navigate('/');
  };

  const deliver = () => {
    if (!selectedOption.value) {
      alert('Выбрите город доставки!');
      return;
    }

    updateCart(cart.id, { town: selectedOption.value, closed: true })
      .then(() => navigate('/thanks'))
      .catch(() => alert('Что-то пошло не так... Повторите попытку позже'));
  };

  useEffect(() => {
    getCurrentCart().then((r) => setCart(r));
  }, []);

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <section className='container-deliver container-cart'>
      <div className='deliver-preview-container'>
        <img
          src='/deliver-preview.png'
          alt=''
          className='deliver-preview-img'
        />
      </div>
      <div className='deliver-choice-container'>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          className='deliver-select'
        />
        <button className='deliver-button' onClick={() => deliver()}>
          Подтвердить
        </button>
      </div>
    </section>
  );
};
