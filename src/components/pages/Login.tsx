import {
  Button,
  Monitor,
  Tab,
  TabBody,
  Tabs,
  TextInput,
  WindowContent,
} from 'react95';
import { ChangeEvent, FormEvent, useState } from 'react';
import { createUser, loginUser } from '../../firebase/auth.ts';

const AUTH_TAB = 'authorization';
const REG_TAB = 'registration';

type SignUpFormData = {
  name: string;
  tag: string;
  email: string;
  password: string;
};

export const Login = () => {
  const [activeTab, setActiveTab] = useState<string>(AUTH_TAB);
  const [error, setError] = useState<string>('');
  const [avatar, setAvatar] = useState<{ file: File | null; url: string }>({
    file: null,
    url: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setAvatar({ file, url: URL.createObjectURL(file) });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as SignUpFormData;

    try {
      await loginUser(email, password);
    } catch (error) {
      console.error(error);
      setError('invalid email address or password');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { name, tag, email, password } = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as SignUpFormData;

    try {
      if (avatar.file) {
        await createUser(name, tag, email, password, avatar.file);
        alert('registration success');
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error(error);
      setError('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <WindowContent id={'login'} className='max-w-2xl'>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab value={AUTH_TAB}>Authorization</Tab>
        <Tab value={REG_TAB}>Registration</Tab>
      </Tabs>
      <TabBody className='h-80'>
        {activeTab === AUTH_TAB && (
          <form onSubmit={handleLogin} className='flex flex-col gap-5'>
            <TextInput placeholder='email' />
            <TextInput placeholder='password' type='password' />
            <Button disabled={loading} type='submit'>
              {loading ? 'wait a sec...' : 'log in'}
            </Button>
            {error && <p className='text-red-500'>{error}</p>}
          </form>
        )}
        {activeTab === REG_TAB && (
          <form onSubmit={handleSignUp} className='flex gap-8'>
            <Monitor
              children={
                avatar.url ? (
                  <img
                    src={avatar.url}
                    alt='avatar'
                    className='w-full h-full object-cover'
                  />
                ) : (
                  <label
                    htmlFor='file'
                    className='text-3xl flex p-2 cursor-pointer'
                  >
                    Click to choose an avatar
                  </label>
                )
              }
            />
            <input hidden type='file' id='file' onChange={handleAvatar} />
            <div className='flex flex-col gap-5 min-w-80'>
              <TextInput name='email' placeholder='enter your email' />
              <TextInput
                name='password'
                placeholder='imagine the password'
                type='password'
              />
              <TextInput name='name' placeholder='just your name' />
              <TextInput name='tag' placeholder='unique username' />
              <Button disabled={loading} type='submit'>
                {loading ? 'wait a sec...' : 'sign up'}
              </Button>
            </div>
          </form>
        )}
      </TabBody>
    </WindowContent>
  );
};
