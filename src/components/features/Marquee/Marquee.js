
import './Marquee.css';

const Marquee = ({ items, speed = 40, direction = 'left' }) => {
    return (
        <div className={`marquee marquee--${direction}`} style={{ '--speed': `${speed}s` }}>
            <div className='marquee__content'>
                {items.concat(items).map((item, index) => (
                    <div key={index} className='marquee__item'>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
