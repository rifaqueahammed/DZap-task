import React from 'react';
import NavItem from './navItem';
import { AppstoreFilled, FullscreenExitOutlined, BranchesOutlined } from '@ant-design/icons';
import Logo from './logo';

function Aside() {
  return (
    <aside className='w-1/5 bg-[#fff] hidden md:flex'>
      <div className='w-full h-full'>
        <Logo/>
        <ul className='w-full h-5/6 flex flex-col items-center mt-5 gap-3'>
          <NavItem icon={<AppstoreFilled style={{ fontSize: '24px' }} />} text='Dashboard' />
          <NavItem icon={<FullscreenExitOutlined style={{ fontSize: '24px' }} />} text='Gatherpool' />
          <NavItem icon={<BranchesOutlined style={{ fontSize: '24px' }} />} text='Scatter' />
        </ul> 
      </div>
    </aside>
  );
}
export default Aside;
