import './header.css';
import { Input } from 'antd';
import { Space } from 'antd';
import { AudioOutlined,HeartOutlined,HomeOutlined,PhoneOutlined  } from '@ant-design/icons';

const {Search} = Input
const Header = () => {
    return ( 
      <section className="global-header">
        <div className='header-div'>
          <img src="logo_transparent.png" alt='logo' />
              <div className='search-bar'>
                <Search
                  style={{ width: "300px" }}
                    size='large'
                />
          </div>
          <div className='hrefs'>
            <HeartOutlined className='icon' />
            <HomeOutlined className='icon' />
            <PhoneOutlined  className='icon'/>
             
           </div>
        
             
         </div>
          
        </section>
     );
}
 
export default Header;