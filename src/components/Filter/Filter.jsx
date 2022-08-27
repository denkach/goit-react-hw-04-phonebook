import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        <Label>Find contacts by name</Label>
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
