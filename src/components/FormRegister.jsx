import { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import Button from '../layout/Button';
import { Link } from 'react-router-dom';

function FormRegister() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('laki-laki');

  const { handleRegister } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(firstName, lastName, email, password, gender);
  };

  return (
    <div className="flex w-full ">
      <img className="relative filter bg-neutral-400 w-1/2 h-screen max-[980px]:hidden object-cover" src="https://source.unsplash.com/random/1920x1080/?trash" />

      <div className="absolute flex items-end w-1/2 h-screen max-[980px]:hidden overlay">
        <blockquote className="text-white p-10">&quot; Embrace the power of conscious choices, for every reduction in waste is a step towards a cleaner, greener tomorrow.&quot; #LessWasteMoreHope</blockquote>
      </div>

      <form className="flex flex-col m-auto max-w-xl  gap-4 text-sm font-bold justify-center bg-neutral-100 p-10 rounded-lg max-[980px]:h-screen max-[980px]:mx-auto max-[980px]:my-20" onSubmit={handleSubmit}>
        <img className="pb-10" src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/main-logo-small.png?updatedAt=1697183029244" width={300} alt="logo" />

        <h1 className="text-2xl">Daftar</h1>

        <div className="grid grid-cols-2 max-[400px]:grid-cols-1 gap-4">
          <div className="flex flex-col gap-4">
            <label>Nama depan: </label>
            <input className="rounded-lg w-full h-8" type="text" placeholder="nama depan" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="flex flex-col gap-4">
            <label>Nama akhir: </label>
            <input className="rounded-lg w-full h-8" type="text" placeholder="nama akhir" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>

        <label>Email: </label>
        <input className="rounded-lg w-full h-8" type="email" placeholder="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password: </label>

        <input className="rounded-lg w-full h-8" type="password" placeholder="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>Jenis Kelamin: </label>

        <select className="rounded-lg w-full" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="laki-laki">Laki-laki</option>
          <option value="perempuan">Perempuan</option>
        </select>
        <Button type="login" title="Daftar" />

        <p className="text-sm font-thin">
          Sudah punya akun?{' '}
          <Link to="/login" className="text-orange-300">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default FormRegister;
