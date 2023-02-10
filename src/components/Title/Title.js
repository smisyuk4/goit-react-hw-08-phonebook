import PropTypes from 'prop-types';

export const Title = ({ title, children }) => {
    return (
        <section>
            <h2>{title}</h2>

            {children}
        </section>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};