import PropTypes from 'prop-types';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center my-5'>
            <p className='text-[#D99904] mb-2'>{subHeading}</p>
            <h3 className='text-3xl border-y-4 py-3'>{heading}</h3>
        </div>
    );
};
SectionTitle.propTypes = {
    heading: PropTypes.string, // Optional string prop
    subHeading: PropTypes.string, // Optional string prop
  };
export default SectionTitle;