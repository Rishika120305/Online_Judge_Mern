import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsGithub, BsDiscord } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-4 border-teal-500 py-4'>
      <div className='w-full max-w-5xl mx-auto'>
        <div className='grid w-full gap-4 md:grid-cols-2'>
          <div className='text-center'>
            <Link
              to='/'
              className='text-base font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                CODE
              </span>
              CASE
            </Link>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsDiscord} />
            <Footer.Icon href='https://github.com/Rishika120305' icon={BsGithub} />
          </div>
        </div>
        <Footer.Divider className='my-2' />
        <div className='text-center'>
          <Footer.Copyright
            href='#'
            by="Rishika's Online Judge"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
}
