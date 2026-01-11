
import { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';
import './SectionContainer.module.css';

const SectionContainer = ({
    id,
    title,
    subtitle,
    children,
    className = '',
    maxWidth = 'xl', // 'md' | 'lg' | 'xl' | 'full'
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id={id}
            ref={ref}
            className={`section ${className}`}
        >
            <div className={`section__content section__content--${maxWidth}`}>
                {(title || subtitle) && (
                    <div className="section__header">
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                                className="section__title"
                            >
                                {title}
                            </motion.h2>
                        )}
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="section__subtitle"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

SectionContainer.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    maxWidth: PropTypes.oneOf(['md', 'lg', 'xl', 'full']),
};

export default SectionContainer;
