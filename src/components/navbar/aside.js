import React from 'react';
import NavItem from './navItem';
import { AppstoreFilled, FullscreenExitOutlined, BranchesOutlined } from '@ant-design/icons';

function Aside() {
  return (
    <aside className='w-1/5 bg-[#fff]'>
      <div className='w-full h-full'>
        <div className='w-full h-1/6 flex justify-center items-center border'>
          <img className='w-40' src='https://www.gatherdao.com/static/media/gd-new-logo-light.44e866ff69c1ad3d75879f9741b657ee.svg' alt='' />
        </div>
        <ul className='w-full h-5/6 flex flex-col items-center gap-3 m-2'>
          <NavItem icon={<AppstoreFilled style={{ fontSize: '24px' }} />} text='Dashbord' />
          <NavItem icon={<FullscreenExitOutlined style={{ fontSize: '24px' }} />} text='gatherpool' />
          <NavItem icon={<BranchesOutlined style={{ fontSize: '24px' }} />} text='Scatter' />
        </ul>
      </div>
    </aside>
  );
}
export default Aside;
