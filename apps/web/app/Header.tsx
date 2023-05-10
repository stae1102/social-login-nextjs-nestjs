import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Header = () => {
  const { data } = useSession();

  console.log(data);

  return (
    <nav>
      <div>
        <div>
          <a href='#'>Next.13 Authentication</a>
        </div>

        <div>
          {data && data.user?.image ? (
            <>
              <span>
                <img
                  src={data.user.image}
                  height={25}
                  width={25}
                  alt='user image'
                />
                Hi, {data.user?.name}
              </span>

              <span style={{ cursor: 'pointer' }} onClick={() => signOut()}>
                {' '}
                Logout
              </span>
            </>
          ) : (
            <span>
              {' '}
              <Link href='/login'>Login</Link>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
