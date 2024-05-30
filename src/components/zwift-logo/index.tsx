
import zwiftLogo from '../../assets/logo.svg';
export default function ZwitLogo() {
  return (
    <div className={`flex flex-row items-center leading-none text-white`}>
      <img src={zwiftLogo} alt="logo-image" width={100} height={100} className='w-20 h-20 md:w-full md:h-full'/>
    </div>
  );
}
