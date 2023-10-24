import './footer.css';
import { PhoneOutlined ,HomeOutlined} from '@ant-design/icons';;
const Footer = () => {
    return ( 
       
            <section className="global-footer-section">
              <img src='logo_transparent.png' alt='logo' />
            <div className='first-block'>
            
                <a href='#'>На Главную</a>
                <a href='#'>О Нас</a>
                <a href='#'> Как Заказать </a>
                <a href='#'>Доставка</a>
                <a href='#'>Оплата</a>
            </div>
            <div className='second-block'>

                <h3>Контакты</h3>
                <p><span><PhoneOutlined /></span> +7(999)-415-99-99 | +7(978)-456-45-78</p>
                <p><span><HomeOutlined /></span> г. Одинцово , ул. Пушкина дом 59</p>
                <hr></hr>
                {/* <div className='hrefs-div'> */}
                    <h4>Мы в социальных сетях</h4>
                    <a href='https://vk.com/akobyan77' target='_blank'><img src='vk.png' alt='vkontake-logo'/></a>
                    <a href='https://www.instagram.com/emmigift/' target='_blank'><img src='instagram.png' alt='instagram-logo'/></a>
                    <a href='https://web.telegram.org/k/' target='_blank'><img src='telegram.png' alt='telegram-logo'/></a>
                 {/* </div> */}
                
             </div>
             <p className='author'>Created by <b>Artur Oganesian</b>© 2023</p>
            </section>
           
    
        
     );
}
 
export default Footer;