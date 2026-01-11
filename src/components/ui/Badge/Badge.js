
import PropTypes from 'prop-types';
import './Badge.css'; // Will convert to module

const Badge = ({ children, variant = 'default', className = '' }) => {
    return (
        <span className={`badge badge--${variant} ${className}`}>
            {children}
        </span>
    );
};

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'outline', 'solid', 'soft']),
    className: PropTypes.string,
};

export default Badge;
