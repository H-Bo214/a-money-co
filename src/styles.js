//React-Select component style

export const customStyles = {
  menu: (provided) => ({
    ...provided,
    border: '2px solid #19EF88',
  }),
  option: (provided) => ({
    ...provided,
    borderBottom: '2px solid #463182',
    padding: '12px 12px',
    '&:hover': {
      backgroundColor: 'rgba(25, 239, 136, .30)',
    },
  }),
  control: () => ({
    display: 'flex',
    width: '21.25rem',
    dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    height: '4rem',
    backgroundColor: '#fff',
    backgroundOrigin: 'content-box',
    fontFamily: 'Nunito, sans-serif',
    fontSize: '1.125rem',
    padding: '1rem, 1rem, 0, 0',
    cursor: 'pointer',
    caretColor: '#19ef88',
    boxShadow: 'none',
    border: '2px solid transparent',
    '&:hover': {
      border: '2px solid #19EF88',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#51707b',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: '#FFF',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#000',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'
    return { ...provided, opacity, transition }
  },
  valueContainer: (provided, state) => ({
    ...provided,
    paddingLeft: '1rem',
  }),
}
