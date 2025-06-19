import { useForm } from 'react-hook-form';
import './order-page.css';
import { useSendOrderMutation } from '../../store/api';

export default function OrderPage() {
  const { register, handleSubmit, reset } = useForm();
  const [sendOrder, { isLoading, error }] = useSendOrderMutation();

  const onSubmit = async (data) => {
    try {
      await sendOrder(data).unwrap();
      reset();
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className='order-page'>
      <h1>5% off on the first order</h1>
      <div className='page-bl'>
        <img src="/assets/fotes/head-2.png" alt="" />
        <form onSubmit={handleSubmit(onSubmit)} className='bl-text'>
          <input
            type="text"
            placeholder="Name"
            {...register('name', { required: true })}
          />
          <input
            type="tel"
            placeholder="Phone number"
            {...register('phone', { required: true })}
          />
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: true })}
          />
          <button type="submit" disabled={isLoading}>
            Get a discount
          </button>
        </form>
      </div>
    </div>
  );
}