 import logo from '../assets/logo.png'
import moment from 'moment/moment';

export default function Header() {

  return (
    <div className='my-10'>
        <img className='mx-auto' src={logo} alt="xcbdg" />
        <div className='text-center'>
            <p className='my-1 text-gray-600'>Journalism Without Fear or Favour</p>
            <h3 className='font-semibold'>{moment().format('LLLL')}</h3>
        </div>
    </div>
  )
}
