'use client';

import { useEffect, useState } from 'react';

let counter = 1;

export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      const response = await fetch(`https://randomuser.me/api`);
      const data = await response.json();
      setUser(data.results[0]);
    }

    console.log(counter++);

    loadUser();
  }, []);

  console.log(counter++);

  if (!user) {
    return (
      <main>
        <h1>Loading data...</h1>
        <h2>counter:{counter}</h2>
      </main>
    );
  }

  return (
    <main>
      <h1>Server Side Rendering</h1>
      <h2>counter:{counter}</h2>

      <div className='bg-slate-400'>
        <div className='flex gap-8'>
          <div>
            <h2 className='text-xl font-bold'>
              {user.name.title}. {user.name.first} {user.name.last}
            </h2>
            <p className='text-gray-600'>{user.email}</p>

            <div className='mt-4'>
              <p>
                <span className='font-bold'>전화번호 : </span>
                {user.phone}
              </p>
              <p>
                <span className='font-bold'>휴대전화번호 : </span>
                {user.cell}
              </p>
              <p>
                <span className='font-bold'>사는 곳 : </span>
                {user.location.city}, {user.location.country}
              </p>
              <p>
                <span className='font-bold'>등록일자 : </span>
                {new Date(user.registered.date).toLocaleDateString()}
              </p>

              <p>
                <span className='font-bold'>생년월일 : </span>
                {new Date(user.dob.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
